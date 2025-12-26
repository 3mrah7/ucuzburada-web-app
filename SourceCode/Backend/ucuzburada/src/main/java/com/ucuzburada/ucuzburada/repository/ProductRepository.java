package com.ucuzburada.ucuzburada.repository;

import com.ucuzburada.ucuzburada.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    // 🔍 Sadece ürün adına göre arama
    List<Product> findByNameContainingIgnoreCase(String name);
}
