package com.miliproject.springboot.service;



public class PortfolioSummary {
    private double totalInvested;
    private double balance;

    public PortfolioSummary(double totalInvested, double balance) {
        this.totalInvested = totalInvested;
        this.balance = balance;
    }

    public double getTotalInvested() { return totalInvested; }
    public void setTotalInvested(double totalInvested) { this.totalInvested = totalInvested; }

    public double getBalance() { return balance; }
    public void setBalance(double balance) { this.balance = balance; }
}
