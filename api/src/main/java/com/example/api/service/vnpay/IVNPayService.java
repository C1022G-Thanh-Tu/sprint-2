package com.example.api.service.vnpay;

import com.example.api.dto.payment.PaymentSendEmailDTO;

public interface IVNPayService {
    void sendEmail(PaymentSendEmailDTO paymentSendEmailDTO);
}
