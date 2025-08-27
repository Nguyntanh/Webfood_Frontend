package com.example.server.service;

import com.example.server.model.Product;
import com.example.server.model.User;
import com.example.server.model.Vendor;
import com.example.server.repository.ProductRepository;
import com.example.server.repository.VendorRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {
    private static final Logger logger = LoggerFactory.getLogger(ProductService.class);

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private VendorRepository vendorRepository;

    public Product createProduct(Product product) {
        User currentUser = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        logger.debug("Tạo sản phẩm bởi người dùng: {}", currentUser.getUsername());
        
        if (!"ADMIN".equals(currentUser.getRole()) && !"VENDOR".equals(currentUser.getRole())) {
            logger.warn("Người dùng không có quyền tạo sản phẩm: {}", currentUser.getUsername());
            throw new RuntimeException("Chỉ admin hoặc vendor có thể tạo sản phẩm");
        }

        if ("VENDOR".equals(currentUser.getRole())) {
            Optional<Vendor> vendorOpt = vendorRepository.findByUserId(currentUser.getId());
            if (vendorOpt.isEmpty()) {
                logger.error("Không tìm thấy vendor cho người dùng: {}", currentUser.getUsername());
                throw new RuntimeException("Không tìm thấy vendor cho người dùng này");
            }
            product.setVendor(vendorOpt.get());
        } else if ("ADMIN".equals(currentUser.getRole()) && product.getVendor() == null) {
            logger.error("Admin phải chỉ định vendor khi tạo sản phẩm");
            throw new RuntimeException("Admin phải chỉ định vendor cho sản phẩm");
        }

        logger.info("Tạo sản phẩm mới: {}", product.getName());
        return productRepository.save(product);
    }

    public Product updateProduct(Integer id, Product updatedProduct) {
        User currentUser = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        logger.debug("Cập nhật sản phẩm ID {} bởi người dùng: {}", id, currentUser.getUsername());

        if (!"ADMIN".equals(currentUser.getRole()) && !"VENDOR".equals(currentUser.getRole())) {
            logger.warn("Người dùng không có quyền cập nhật sản phẩm: {}", currentUser.getUsername());
            throw new RuntimeException("Chỉ admin hoặc vendor có thể cập nhật sản phẩm");
        }

        Optional<Product> existingProductOpt = productRepository.findById(id);
        if (existingProductOpt.isEmpty()) {
            logger.warn("Không tìm thấy sản phẩm với ID: {}", id);
            throw new RuntimeException("Sản phẩm không tồn tại");
        }

        Product existingProduct = existingProductOpt.get();
        if ("VENDOR".equals(currentUser.getRole())) {
            Optional<Vendor> vendorOpt = vendorRepository.findByUserId(currentUser.getId());
            if (vendorOpt.isEmpty() || !existingProduct.getVendor().getId().equals(vendorOpt.get().getId())) {
                logger.warn("Vendor không có quyền cập nhật sản phẩm này: {}", currentUser.getUsername());
                throw new RuntimeException("Vendor không có quyền cập nhật sản phẩm này");
            }
        }

        existingProduct.setName(updatedProduct.getName());
        existingProduct.setPrice(updatedProduct.getPrice());
        existingProduct.setDescription(updatedProduct.getDescription());
        existingProduct.setCategory(updatedProduct.getCategory());
        existingProduct.setImage(updatedProduct.getImage());
        existingProduct.setStatus(updatedProduct.getStatus());
        
        if ("ADMIN".equals(currentUser.getRole()) && updatedProduct.getVendor() != null) {
            existingProduct.setVendor(updatedProduct.getVendor());
        }

        logger.info("Cập nhật sản phẩm: {}", existingProduct.getName());
        return productRepository.save(existingProduct);
    }

    public void deleteProduct(Integer id) {
        User currentUser = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        logger.debug("Xóa sản phẩm ID {} bởi người dùng: {}", id, currentUser.getUsername());

        if (!"ADMIN".equals(currentUser.getRole()) && !"VENDOR".equals(currentUser.getRole())) {
            logger.warn("Người dùng không có quyền xóa sản phẩm: {}", currentUser.getUsername());
            throw new RuntimeException("Chỉ admin hoặc vendor có thể xóa sản phẩm");
        }

        Optional<Product> productOpt = productRepository.findById(id);
        if (productOpt.isEmpty()) {
            logger.warn("Không tìm thấy sản phẩm với ID: {}", id);
            throw new RuntimeException("Sản phẩm không tồn tại");
        }

        Product product = productOpt.get();
        if ("VENDOR".equals(currentUser.getRole())) {
            Optional<Vendor> vendorOpt = vendorRepository.findByUserId(currentUser.getId());
            if (vendorOpt.isEmpty() || !product.getVendor().getId().equals(vendorOpt.get().getId())) {
                logger.warn("Vendor không có quyền xóa sản phẩm này: {}", currentUser.getUsername());
                throw new RuntimeException("Vendor không có quyền xóa sản phẩm này");
            }
        }

        logger.info("Xóa sản phẩm: {}", product.getName());
        productRepository.deleteById(id);
    }

    public List<Product> getAllProducts() {
        logger.debug("Lấy tất cả sản phẩm");
        return productRepository.findAll();
    }

    public Optional<Product> getProductById(Integer id) {
        logger.debug("Lấy sản phẩm với ID: {}", id);
        return productRepository.findById(id);
    }

    public List<Product> searchProducts(String keyword) {
        logger.debug("Tìm kiếm sản phẩm với từ khóa: {}", keyword);
        return productRepository.searchProducts(keyword);
    }
}