package com.example.api.mapper.product;

import com.example.api.dto.product.ProductDTO;
import com.example.api.dto.product.ProductTypeDTO;
import com.example.api.entity.product.Product;
import com.example.api.entity.product.ProductType;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper
public interface IProductMapper {
    IProductMapper INSTANCE = Mappers.getMapper(IProductMapper.class);

    @Mapping(source = "productType", target = "productTypeDTO")
    @Mapping(source = "product.productImgs", target = "productImgDTOS")
    ProductDTO productToProductDTO(Product product);

    ProductTypeDTO productTypeToProductTypeDTO(ProductType productType);
    List<ProductDTO> productsToProductDTOs(List<Product> productList);
}
