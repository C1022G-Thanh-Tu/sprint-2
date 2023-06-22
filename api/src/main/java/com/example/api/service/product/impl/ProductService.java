package com.example.api.service.product.impl;

import com.example.api.dto.product.ProductDTO;
import com.example.api.entity.product.Product;
import com.example.api.mapper.product.IProductMapper;
import com.example.api.repository.product.IProductRepository;
import com.example.api.service.product.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class ProductService implements IProductService {
    @Autowired
    private IProductRepository productRepository;

    @Override
    public Page<ProductDTO> findByName(Pageable pageable, String name) {
        Page<Product> productPage = productRepository.findProductsByNameContaining(pageable, name);
        List<ProductDTO> productDTOList = IProductMapper.INSTANCE.productsToProductDTOs(productPage.toList());
        return new PageImpl<>(productDTOList, pageable, productPage.getTotalElements());
    }

    @Override
    public ProductDTO findById(Integer id) {
        Optional<Product> product  = productRepository.findById(id);
        return IProductMapper.INSTANCE.productToProductDTO(product.orElse(null));
    }

    @Override
    public Page<ProductDTO> findAll(Pageable pageable) {
        Page<Product> productPage = productRepository.findAll(pageable);
        List<ProductDTO> productDTOList = IProductMapper.INSTANCE.productsToProductDTOs(productPage.toList());
        return new PageImpl<>(productDTOList, pageable, productPage.getTotalElements());
    }
}
