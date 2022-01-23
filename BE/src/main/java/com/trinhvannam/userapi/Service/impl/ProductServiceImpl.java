package com.trinhvannam.userapi.Service.impl;

import com.trinhvannam.userapi.Exception.ResourceNotFoundException;
import com.trinhvannam.userapi.Model.Product;
import com.trinhvannam.userapi.Repository.ProductRepository;
import com.trinhvannam.userapi.Service.DTO.request.ProductRequestDTO;
import com.trinhvannam.userapi.Service.ProductService;
import com.trinhvannam.userapi.Service.mapper.ProductMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {
    @Autowired
    ProductRepository productRepository;

    @Override
    public Product createNewProduct(ProductRequestDTO productRequestDTO) {
        ProductMapper productMapper = new ProductMapper();
        Product product = productMapper.toEntity(productRequestDTO);
        return productRepository.save(product);
    }

    @Override
    public List<Product> findProductByName(String name) {
        return productRepository.findProductByName(name);
    }

}
