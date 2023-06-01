package com.example.api.service.cart.impl;

import com.example.api.dto.cart.CartDTO;
import com.example.api.entity.cart.Cart;
import com.example.api.repository.cart.ICartRepository;
import com.example.api.service.cart.ICartDetailService;
import com.example.api.service.cart.ICartService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CartService implements ICartService {
    @Autowired
    private ICartRepository cartRepository;
    @Autowired
    private ICartDetailService cartDetailService;

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
}
