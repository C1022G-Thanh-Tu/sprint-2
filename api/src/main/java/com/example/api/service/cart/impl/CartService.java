package com.example.api.service.cart.impl;

import com.example.api.repository.cart.ICartRepository;
import com.example.api.service.cart.ICartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CartService implements ICartService {
    @Autowired
    private ICartRepository cartRepository;
}
