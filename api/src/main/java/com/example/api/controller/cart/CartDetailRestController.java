package com.example.api.controller.cart;

import com.example.api.dto.cart.CartDetailDTO;
import com.example.api.service.cart.ICartDetailService;
import com.example.api.service.cart.ICartService;
import com.example.api.service.cart.impl.CartDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
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
    private ICartDetailService icartDetailService;
    @Autowired
    private CartDetailService cartDetailService;

    @GetMapping("")
    public ResponseEntity<List<CartDetailDTO>> listAll(@RequestParam(required = false, defaultValue = "") String customerName) {
        List<CartDetailDTO> cartDetailDTOList = icartDetailService.findAll(customerName);
        if (cartDetailDTOList.isEmpty()) {
            return new ResponseEntity<>(cartDetailDTOList, HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(cartDetailDTOList, HttpStatus.OK);
    }

    @GetMapping("/list")
    public ResponseEntity<Page<CartDetailDTO>> listTotalAll(
            @RequestParam(required = false, defaultValue = "") String customerName,
            @PageableDefault(sort = {"id"}, direction = Sort.Direction.DESC, size = 3) Pageable pageable) {
        Page<CartDetailDTO> cartDetailDTOPage = icartDetailService.findTotalAll(customerName, pageable);
        if (cartDetailDTOPage.isEmpty()) {
            return new ResponseEntity<>(cartDetailDTOPage, HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(cartDetailDTOPage, HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity<?> createInvoiceDetail(
            @Valid @RequestBody CartDetailDTO cartDetailDTO,BindingResult bindingResult,
            @RequestParam(required = false, defaultValue = "") String customerName) {
        if (!bindingResult.hasErrors()) {
            String msg = icartDetailService.save(cartDetailDTO, customerName);
            if (!msg.equals("")) {
                return new ResponseEntity<>(msg, HttpStatus.BAD_REQUEST);
            } else {
                return new ResponseEntity<>(HttpStatus.CREATED);
            }
        } else {
            Map<String, String> map = new LinkedHashMap<>();
            List<FieldError> errors = bindingResult.getFieldErrors();
            for (FieldError error : errors) {
                if (!map.containsKey(error.getField())) {
                    map.put(error.getField(), error.getDefaultMessage());
                }
            }
            return new ResponseEntity<>(map, HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Integer id) {
        if (id == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        icartDetailService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/{id}/{quantity}")
    public ResponseEntity<?> update(@PathVariable Integer id, @PathVariable Integer quantity) {
        if (id == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        String msg = icartDetailService.update(id, quantity);
        if (!msg.equals("")) {
            return new ResponseEntity<>(msg, HttpStatus.BAD_REQUEST);
        } else {
            return new ResponseEntity<>(HttpStatus.OK);
        }
    }

    @GetMapping("/log-out")
    @ResponseStatus(HttpStatus.OK)
    public void resetCount() {
        cartDetailService.resetCount();
    }
}
