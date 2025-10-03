package com.miliproject.springboot.controller;

import com.miliproject.springboot.entity.Portfolio;
import com.miliproject.springboot.service.PortfolioService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/portfolio")
public class PortfolioController {

    private final PortfolioService portfolioService;

    public PortfolioController(PortfolioService portfolioService) {
        this.portfolioService = portfolioService;
    }

    @GetMapping("/{userId}")
    public List<Portfolio> getUserPortfolio(@PathVariable Long userId) {
        return portfolioService.getUserPortfolio(userId);
    }

    @GetMapping("/{userId}/value")
    public double getPortfolioValue(@PathVariable Long userId) {
        return portfolioService.calculatePortfolioValue(userId);
    }
}
