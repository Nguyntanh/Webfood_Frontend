package com.example.server.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "Vendors")
@Data
public class Vendor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @OneToOne
    @JoinColumn(name = "user_id", unique = true)
    private User user;

    @Column(length = 100)
    private String name;

    @Column(length = 1000)
    private String description;

    @Column(length = 100)
    private String location;

    private Float averageRating;

    private Integer totalRatings;
}