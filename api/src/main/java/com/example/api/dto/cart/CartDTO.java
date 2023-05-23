package com.example.api.dto.cart;

import java.util.Set;

public class CartDTO {
    private Integer id;
    private String code;
    private boolean isDelete;
    private Double total;
    private String customerName;
    private Set<CartDetailDTO> cartDetailDTOS;

    public CartDTO() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public boolean isDelete() {
        return isDelete;
    }

    public void setDelete(boolean delete) {
        isDelete = delete;
    }

    public Double getTotal() {
        return total;
    }

    public void setTotal(Double total) {
        this.total = total;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public Set<CartDetailDTO> getCartDetailDTOS() {
        return cartDetailDTOS;
    }

    public void setCartDetailDTOS(Set<CartDetailDTO> cartDetailDTOS) {
        this.cartDetailDTOS = cartDetailDTOS;
    }
}
