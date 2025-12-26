package com.ucuzburada.ucuzburada.controller;

import com.ucuzburada.ucuzburada.model.Product;
import com.ucuzburada.ucuzburada.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:5173")
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    // 🔹 Tüm ürünler
    @GetMapping
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    // 🔹 ID'ye göre ürün
    @GetMapping("/{id}")
    public Product getProductById(@PathVariable Long id) {
        return productRepository.findById(id).orElse(null);
    }

    // 🔍 SEARCH ENDPOINT
    // http://localhost:8080/api/products/search?q=laptop
    @GetMapping("/search")
    public List<Product> searchProducts(@RequestParam String q) {
        return productRepository.findByNameContainingIgnoreCase(q);
    }

}
