package com.example.api.controller.product;

import com.example.api.dto.product.ProductDTO;
import com.example.api.service.product.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/product")
@CrossOrigin("*")
public class ProductRestController {
    @Autowired
    private IProductService productService;
    @GetMapping("")
    public ResponseEntity<Page<ProductDTO>> findProductByName (
            @RequestParam(required = false, defaultValue = "") String name,
            @PageableDefault(sort = {"id"},direction = Sort.Direction.DESC,size = 6) Pageable pageable ) {
        Page<ProductDTO> productDTOS = productService.findByName(pageable, name);
        if (productDTOS.isEmpty()) {
            return new ResponseEntity<>(productDTOS, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(productDTOS, HttpStatus.OK);
    }

    @GetMapping("/list")
    public ResponseEntity<Page<ProductDTO>> findAll (
            @PageableDefault(sort = {"id"},direction = Sort.Direction.DESC,size = 3) Pageable pageable ) {
        Page<ProductDTO> productDTOS = productService.findAll(pageable);
        if (productDTOS.isEmpty()) {
            return new ResponseEntity<>(productDTOS, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(productDTOS, HttpStatus.OK);
    }

    @GetMapping("/detail/{id}")
    public ResponseEntity<ProductDTO> findById (@PathVariable Integer id) {
        ProductDTO productDTO = productService.findById(id);
        if (productDTO == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(productDTO, HttpStatus.OK);
    }
}
