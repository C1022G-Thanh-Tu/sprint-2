package com.example.api.controller.cart;

import com.example.api.dto.cart.CartDTO;
import com.example.api.service.cart.ICartService;
import com.example.api.service.cart.impl.CartDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/cart")
@CrossOrigin("*")
public class CartRestController {
    @Autowired
    private CartDetailService cartDetailService;
    @Autowired
    private ICartService cartService;
    @PutMapping("")
    public ResponseEntity<Void> updateCart (@RequestBody CartDTO cartDTO) {
        cartService.update(cartDTO);
        cartDetailService.resetCount();
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCart (@PathVariable Integer id) {
        if (id == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        cartService.deletePermanent(id);
        cartDetailService.resetCount();
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
