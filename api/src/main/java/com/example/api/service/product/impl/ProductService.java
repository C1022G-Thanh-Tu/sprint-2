package com.example.api.service.product.impl;

import com.example.api.dto.product.ProductDTO;
import com.example.api.dto.product.ProductImgDTO;
import com.example.api.dto.product.ProductTypeDTO;
import com.example.api.entity.product.Product;
import com.example.api.entity.product.ProductImg;
import com.example.api.repository.product.IProductRepository;
import com.example.api.service.product.IProductService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class ProductService implements IProductService {
    @Autowired
    private IProductRepository productRepository;
    public ProductDTO mapProductDTO (Product product){
        ProductDTO productDTO = new ProductDTO();
        copyProductToProductDTO(product, productDTO);
        return productDTO;
    }
    public void setValueOfProductImgSet(Set<ProductImg> productImgs, Set<ProductImgDTO> productImgDTOS) {
        ProductImgDTO productImgDTO;
        for (ProductImg productImg: productImgs) {
            productImgDTO = new ProductImgDTO();
            BeanUtils.copyProperties(productImg, productImgDTO);
            productImgDTOS.add(productImgDTO);
        }
    }

    public void copyProductToProductDTO (Product product, ProductDTO productDTO) {
        productDTO.setProductTypeDTO(new ProductTypeDTO());
        BeanUtils.copyProperties(product.getProductType(), productDTO.getProductTypeDTO());
        productDTO.setProductImgDTOS(new TreeSet<>(Comparator.comparingInt(ProductImgDTO::getId)));
        setValueOfProductImgSet(product.getProductImgs(), productDTO.getProductImgDTOS());
        BeanUtils.copyProperties(product, productDTO);
    }

    @Override
    public Page<ProductDTO> findByName(Pageable pageable, String name) {
        Page<Product> productPage = productRepository.findProductsByNameContaining(pageable, name);
        List<ProductDTO> productDTOS = productPage.stream().map(this::mapProductDTO).collect(Collectors.toList());
        return new PageImpl<>(productDTOS, pageable, productPage.getTotalElements());
    }

    @Override
    public ProductDTO findById(Integer id) {
        Product product = productRepository.findById(id).get();
        ProductDTO productDTO = new ProductDTO();
        copyProductToProductDTO(product, productDTO);
        return productDTO;
    }

    @Override
    public Page<ProductDTO> findAll(Pageable pageable) {
        Page<Product> productPage = productRepository.findAll(pageable);
        List<ProductDTO> productDTOList = productPage.stream().map(this::mapProductDTO).collect(Collectors.toList());
        return new PageImpl<>(productDTOList, pageable, productPage.getTotalElements());
    }
}
