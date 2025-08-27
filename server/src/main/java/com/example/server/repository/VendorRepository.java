package com.example.server.repository;

import com.example.server.model.Vendor;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VendorRepository extends JpaRepository<Vendor, Integer> {

    public Optional<Vendor> findByUserId(Integer id);
}