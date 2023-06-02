package com.example.api.service.cart.impl;

import com.example.api.dto.cart.CartDTO;
import com.example.api.entity.cart.Cart;
import com.example.api.entity.cart.CartDetail;
import com.example.api.entity.product.Product;
import com.example.api.repository.cart.ICartDetailRepository;
import com.example.api.repository.cart.ICartRepository;
import com.example.api.repository.product.IProductRepository;
import com.example.api.service.cart.ICartDetailService;
import com.example.api.service.cart.ICartService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class CartService implements ICartService {
    @Autowired
    private ICartRepository cartRepository;
    @Autowired
    private ICartDetailService cartDetailService;
    @Autowired
    private ICartDetailRepository cartDetailRepository;
    @Autowired
    private IProductRepository productRepository;

    @Override
    public void update(CartDTO cartDTO) {
        Cart cart = cartRepository.findWithCustomerNameAndIsDelete(cartDTO.getCustomerName());
        if (cart == null) {
            cart = cartRepository.findWithNull();
        }
        cartDTO.setId(cart.getId());
        BeanUtils.copyProperties(cartDTO, cart);
        cart.setDelete(true);
        cartDetailService.deleteAll(cart.getId());
        cartRepository.save(cart);
    }

    @Override
    public void deletePermanent(Integer id) {
        Cart cart = cartRepository.findById(id).get();
        List<CartDetail> cartDetailList = cartDetailRepository.findAll();
        for (int i = cartDetailList.size() - 1; i >= 0; i--) {
            if (Objects.equals(cartDetailList.get(i).getCart().getId(), cart.getId())) {
                Product product = productRepository.findById(cartDetailList.get(i).getProduct().getId()).get();
                product.setQuantity(cartDetailList.get(i).getQuantity() + product.getQuantity());
                productRepository.save(product);
                cartDetailRepository.delete(cartDetailList.get(i));

            }
        }
        cartRepository.delete(cart);
    }
}
