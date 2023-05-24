package com.example.api.service.cart;

import com.example.api.dto.cart.CartDetailDTO;

import java.util.List;

public interface ICartDetailService {
    String save(CartDetailDTO cartDetailDTO);
    String update(Integer id, Integer quantity);
    void delete(int id);
    List<CartDetailDTO> findAll();
}
