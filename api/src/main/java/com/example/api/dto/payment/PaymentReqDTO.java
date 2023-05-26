package com.example.api.dto.payment;

public class PaymentReqDTO {
    private long amount;

    public PaymentReqDTO() {
    }

    public long getAmount() {
        return amount;
    }

    public void setAmount(long amount) {
        this.amount = amount;
    }
}
