package com.example.api.repository.cart;

import com.example.api.entity.cart.CartDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ICartDetailRepository extends JpaRepository<CartDetail, Integer> {
    @Query(value = "select * from cart_detail where is_delete = false", nativeQuery = true)
    List<CartDetail> findAllIsDeleteFalse();
}
