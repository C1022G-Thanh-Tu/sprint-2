package com.example.api.repository.cart;

import com.example.api.dto.cart.CartDetailDTO;
import com.example.api.entity.cart.CartDetail;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ICartDetailRepository extends JpaRepository<CartDetail, Integer> {
    @Query(value = "select * from cart_detail where is_delete = false", nativeQuery = true)
    List<CartDetail> findAllIsDeleteFalse();

    @Query(value = "select * from cart_detail where is_delete = true", nativeQuery = true)
    Page<CartDetail> findTotalAll(Pageable pageable);
}
