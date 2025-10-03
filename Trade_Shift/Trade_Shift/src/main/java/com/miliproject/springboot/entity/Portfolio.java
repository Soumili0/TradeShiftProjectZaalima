package com.miliproject.springboot.entity;

import java.util.Collection;
import jakarta.persistence.*;
import java.util.List;

@Entity
public class Portfolio {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private double balance;

    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;

    @OneToMany(mappedBy = "portfolio", cascade = CascadeType.ALL)
    private List<Holding> holdings;

    // ✅ getters & setters

	public Collection<Order> getHoldings() {
		// TODO Auto-generated method stub
		return null;
	}

	public double getBalance() {
		// TODO Auto-generated method stub
		return 0;
	}

    public double getQuantity() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getQuantity'");
    }

    public String getSymbol() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getSymbol'");
    }

}

