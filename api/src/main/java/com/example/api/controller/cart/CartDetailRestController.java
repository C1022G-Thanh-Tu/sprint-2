package com.example.api.controller.cart;

import com.example.api.dto.cart.CartDetailDTO;
import com.example.api.service.cart.ICartDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/cart-detail")
@CrossOrigin("*")
public class CartDetailRestController {
    @Autowired
    private ICartDetailService cartDetailService;
    @GetMapping("")
    public ResponseEntity<List<CartDetailDTO>> listAll() {
        List<CartDetailDTO> cartDetailDTOS = cartDetailService.findAll();
        return new ResponseEntity<>(cartDetailDTOS ,HttpStatus.OK);
    }
    @PostMapping("")
    public ResponseEntity<?> createInvoiceDetail(@Valid @RequestBody CartDetailDTO cartDetailDTO,
                                                 BindingResult bindingResult) {
        if (!bindingResult.hasErrors()) {
            cartDetailService.save(cartDetailDTO);
            return new ResponseEntity<>(HttpStatus.CREATED);
        } else {
            Map<String, String> map = new LinkedHashMap<>();
            List<FieldError> errors = bindingResult.getFieldErrors();
            for (FieldError error : errors) {
                if (!map.containsKey(error.getField())) {
                    map.put(error.getField(), error.getDefaultMessage());
                }
            }
            return new ResponseEntity<>(map,  HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Integer id) {
        if (id == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        cartDetailService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/{id}/{quantity}")
    public ResponseEntity<?> update(@PathVariable Integer id, @PathVariable Integer quantity) {
        if (id == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        cartDetailService.update(id, quantity);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
