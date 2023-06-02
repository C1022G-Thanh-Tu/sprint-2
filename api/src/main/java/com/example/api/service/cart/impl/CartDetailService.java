package com.example.api.service.cart.impl;

import com.example.api.dto.cart.CartDTO;
import com.example.api.dto.cart.CartDetailDTO;
import com.example.api.dto.product.ProductDTO;
import com.example.api.entity.cart.Cart;
import com.example.api.entity.cart.CartDetail;
import com.example.api.entity.product.Product;
import com.example.api.repository.cart.ICartDetailRepository;
import com.example.api.repository.cart.ICartRepository;
import com.example.api.repository.product.IProductRepository;
import com.example.api.service.cart.ICartDetailService;
import com.example.api.service.cart.ICartService;
import com.example.api.service.product.IProductService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CartDetailService implements ICartDetailService {
    @Autowired
    private ICartDetailRepository cartDetailRepository;
    @Autowired
    private ICartRepository cartRepository;
    @Autowired
    private IProductService productService;
    @Autowired
    private IProductRepository productRepository;
    Integer count = 0;
    public void resetCount() {
        count = 0;
    }
    @Override
    public String save(CartDetailDTO cartDetailDTO, String customerName) {
        Product product = productRepository.findById(cartDetailDTO.getProductDTO().getId()).get();

        if (product.getQuantity() < cartDetailDTO.getQuantity()) {
            return "Số lượng không đủ";
        }

        if (customerName == null) {
            customerName = "";
        }

        CartDetail cartDetail = new CartDetail();
        cartDetail.setProduct(new Product());
        BeanUtils.copyProperties(cartDetailDTO.getProductDTO(), cartDetail.getProduct());
        BeanUtils.copyProperties(cartDetailDTO, cartDetail);
        Cart cart = cartRepository.findWithCustomerNameAndIsDelete(customerName);

        if (count == 0 && cart !=null && !cart.isDelete() && cart.getCustomerName().equals(customerName)) {
            cartDetail.setCart(cart);
        } else if (count == 0) {
            Cart cart1 = new Cart();
            cart1.setCustomerName(customerName);
            cartRepository.save(cart1);
        }

        cartDetail.setCart(cartRepository.findWithCustomerNameAndIsDelete(customerName));

        if (product.getQuantity() - cartDetail.getQuantity() < 0) {
            return "Số lượng không đủ";
        }

        product.setQuantity(product.getQuantity() - cartDetail.getQuantity());
        productRepository.save(product);

        List<CartDetail> cartDetailList = cartDetailRepository.findAll();

        if (cartDetailList.isEmpty()) {
            cartDetailRepository.save(cartDetail);
            count++;
            return "";
        }

        for (int i = cartDetailList.size() - 1; i >= 0; i--) {
            if (count != 0 && cartDetailList.get(i).getProduct().equals(product)  && !cartDetailList.get(i).isDelete()) {
                cartDetailList.get(i).setQuantity(cartDetailList.get(i).getQuantity() + cartDetailDTO.getQuantity());
                cartDetailRepository.save(cartDetailList.get(i));
                return "";
            }
        }

        cartDetailRepository.save(cartDetail);
        count++;
        return "";
    }

    @Override
    public String update(Integer id, Integer quantity) {
        CartDetail cartDetail = cartDetailRepository.findById(id).get();
        Product product = productRepository.findById(cartDetail.getProduct().getId()).get();
        if (product.getQuantity() < quantity) {
            return "Số lượng không đủ";
        }
        product.setQuantity(product.getQuantity() - quantity);
        productRepository.save(product);
        if (cartDetail.getQuantity() + quantity <= 0) {
            delete(id);
            return "Lỗi";
        }
        cartDetail.setQuantity(cartDetail.getQuantity() + quantity);
        cartDetailRepository.save(cartDetail);
        return "";
    }

    @Override
    public void delete(int id) {
        CartDetail cartDetail = cartDetailRepository.findById(id).get();
        cartDetail.setDelete(true);
        Product product = productRepository.findById(cartDetail.getProduct().getId()).get();
        product.setQuantity(product.getQuantity() + cartDetail.getQuantity());
        productRepository.save(product);
        cartDetailRepository.save(cartDetail);
    }

    @Override
    public List<CartDetailDTO> findAll(String customerName) {
        List<CartDetail> cartDetailList = cartDetailRepository.findAllIsDeleteFalse(customerName);
        List<CartDetailDTO> cartDetailDTOList = new ArrayList<>();
        CartDetailDTO cartDetailDTO;
        for (CartDetail cartDetail: cartDetailList) {
            cartDetailDTO = new CartDetailDTO();
            cartDetailDTO.setCartDTO(new CartDTO());
            BeanUtils.copyProperties(cartDetail.getCart(), cartDetailDTO.getCartDTO());
            cartDetailDTO.setProductDTO(productService.findById(cartDetail.getProduct().getId()));
            BeanUtils.copyProperties(cartDetail, cartDetailDTO);
            cartDetailDTOList.add(cartDetailDTO);
        }
        return cartDetailDTOList;
    }

    @Override
    public void deleteAll(int id) {
        List<CartDetail> cartDetails = cartDetailRepository.findAll();
        for (int i = cartDetails.size() - 1; i >= 0; i--) {
            if (cartDetails.get(i).getCart().getId() == id) {
                cartDetails.get(i).setDelete(true);
                cartDetailRepository.save(cartDetails.get(i));
            }
        }
    }

    @Override
    public Page<CartDetailDTO> findTotalAll(String customerName, Pageable pageable) {
        Page<CartDetail> cartDetailPage = cartDetailRepository.findTotalAll(customerName, pageable);
        List<CartDetailDTO> cartDetailDTOList = new ArrayList<>();
        CartDetailDTO cartDetailDTO;
        for (CartDetail cartDetail: cartDetailPage) {
            cartDetailDTO = new CartDetailDTO();
            cartDetailDTO.setCartDTO(new CartDTO());
            BeanUtils.copyProperties(cartDetail.getCart(), cartDetailDTO.getCartDTO());
            cartDetailDTO.setProductDTO(productService.findById(cartDetail.getProduct().getId()));
            BeanUtils.copyProperties(cartDetail, cartDetailDTO);
            cartDetailDTOList.add(cartDetailDTO);
        }
        return new PageImpl<>(cartDetailDTOList, pageable, cartDetailPage.getTotalElements());
    }
}
