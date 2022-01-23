package com.trinhvannam.userapi.Service;

import com.trinhvannam.userapi.Model.Product;
import com.trinhvannam.userapi.Service.DTO.request.ProductRequestDTO;

import java.util.List;

public interface ProductService {
    public Product createNewProduct(ProductRequestDTO productRequestDTO);
    public List<Product> findProductByName(String name);
}
