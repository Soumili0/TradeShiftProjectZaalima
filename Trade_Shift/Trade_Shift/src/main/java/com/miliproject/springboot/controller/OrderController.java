package com.miliproject.springboot.controller;

import org.springframework.web.bind.annotation.*;

import com.miliproject.springboot.entity.User;
import com.miliproject.springboot.service.OrderService;

import jakarta.persistence.criteria.Order;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/api/orders")
public class OrderController {

    private final OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    // ✅ Place Buy/Sell order
    @PostMapping("/place")
    public Order placeOrder(@RequestBody com.miliproject.springboot.entity.Order order, Principal principal) {
        // principal থেকে User অবজেক্ট বের করবে (JWT থেকে User ডিটেলস)
        // এখন সহজে ধরছি order.getUser() সেট করা আছে
        return (Order) orderService.placeOrder(order);
    }

    // ✅ Get order history
    @GetMapping("/history")
    public List<com.miliproject.springboot.entity.Order> getOrderHistory(Principal principal) {
 
        User user = new User(); 
        user.setId(1L); // JWT integration করলে আসল User আনবে
        return orderService.getOrderHistory(user);
    }
}
