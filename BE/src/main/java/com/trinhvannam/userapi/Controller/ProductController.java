package com.trinhvannam.userapi.Controller;


import com.trinhvannam.userapi.Exception.ResourceNotFoundException;
import com.trinhvannam.userapi.Model.Product;
import com.trinhvannam.userapi.Repository.ProductRepository;
import com.trinhvannam.userapi.Service.DTO.request.ProductRequestDTO;
import com.trinhvannam.userapi.Service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/products")
public class ProductController {
    @Autowired
    ProductRepository productRepository;

    @Autowired
    ProductService productService;

    @PostMapping
    public ResponseEntity<Product> createProduct(@RequestBody ProductRequestDTO productRequestDTO) {
        return ResponseEntity.ok().body(productService.createNewProduct(productRequestDTO));
    }

    @GetMapping("{id}")
    public ResponseEntity<Product> getProductById(@PathVariable  long id){
        Product product  = productRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User not exist with id:" + id));
        return ResponseEntity.ok(product);
    }

    @GetMapping
    public List<Product> getAllProduct() {
        return productRepository.findAll();
    }

    @GetMapping("/findProductByName")
    public ResponseEntity<List<Product>> findProductByName(@RequestParam String name) {
        return ResponseEntity.ok().body(productService.findProductByName(name));
    }

    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteProduct(@PathVariable long id){

        Product product = productRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User not exist with id: " + id));

        productRepository.delete(product);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PutMapping("{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable long id, @RequestBody Product productDetails) {
        Product updateProduct = productRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User not exist with id: " + id));

        updateProduct.setProductName(productDetails.getProductName());
        updateProduct.setProductPrice(productDetails.getProductPrice());
        updateProduct.setProductQuantity(productDetails.getProductQuantity());
        updateProduct.setProductDescription(productDetails.getProductDescription());
        updateProduct.setProductImgURL(productDetails.getProductImgURL());
        productRepository.save(updateProduct);
        return ResponseEntity.ok(updateProduct);
    }
}
