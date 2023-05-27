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
    @Override
    public String save(CartDetailDTO cartDetailDTO) {
        Product product = productRepository.findById(cartDetailDTO.getProductDTO().getId()).get();
        if (product.getQuantity() < cartDetailDTO.getQuantity()) {
            return "Số lượng không đủ";
        }
        if (count == 0) {
            Cart cart = new Cart();
            cartRepository.save(cart);
        }
        CartDetail cartDetail = new CartDetail();
        cartDetail.setProduct(new Product());
        BeanUtils.copyProperties(cartDetailDTO.getProductDTO(), cartDetail.getProduct());
        BeanUtils.copyProperties(cartDetailDTO, cartDetail);
        cartDetail.setCart(cartRepository.findTheLastCart());
        if (product.getQuantity() - cartDetail.getQuantity() < 0) {
            return "Số lượng không đủ";
        }
        product.setQuantity(product.getQuantity() - cartDetail.getQuantity());
        productRepository.save(product);
        List<CartDetail> cartDetails = cartDetailRepository.findAll();
        if (cartDetails.isEmpty()) {
            cartDetailRepository.save(cartDetail);
            count++;
            return "";
        }
        for (int i = cartDetails.size() - 1; i >= 0; i--) {
            if (count != 0 && cartDetails.get(i).getProduct().equals(product)  && !cartDetails.get(i).isDelete()) {
                cartDetails.get(i).setQuantity(cartDetails.get(i).getQuantity() + cartDetailDTO.getQuantity());
                cartDetailRepository.save(cartDetails.get(i));
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
    public List<CartDetailDTO> findAll() {
        List<CartDetail> cartDetails = cartDetailRepository.findAllIsDeleteFalse();
        List<CartDetailDTO> cartDetailDTOS = new ArrayList<>();
        CartDetailDTO cartDetailDTO;
        for (CartDetail cartDetail: cartDetails) {
            cartDetailDTO = new CartDetailDTO();
            cartDetailDTO.setProductDTO(productService.findById(cartDetail.getProduct().getId()));
            BeanUtils.copyProperties(cartDetail, cartDetailDTO);
            cartDetailDTOS.add(cartDetailDTO);
        }
        return cartDetailDTOS;
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
    public Page<CartDetailDTO> findTotalAll(Pageable pageable) {
        Page<CartDetail> cartDetails = cartDetailRepository.findTotalAll(pageable);
        List<CartDetailDTO> cartDetailDTOS = new ArrayList<>();
        CartDetailDTO cartDetailDTO;
        for (CartDetail cartDetail: cartDetails) {
            cartDetailDTO = new CartDetailDTO();
            cartDetailDTO.setCartDTO(new CartDTO());
            BeanUtils.copyProperties(cartDetail.getCart(), cartDetailDTO.getCartDTO());
            cartDetailDTO.setProductDTO(productService.findById(cartDetail.getProduct().getId()));
            BeanUtils.copyProperties(cartDetail, cartDetailDTO);
            cartDetailDTOS.add(cartDetailDTO);
        }
        return new PageImpl<>(cartDetailDTOS, pageable, cartDetails.getTotalElements());
    }

    public void resetCount() {
        count = 0;
    }
}