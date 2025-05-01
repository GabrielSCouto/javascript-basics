function calculateProductPrice(costValue: number, profitMargin: number, shippingCost: number): number {
    let profit = costValue * (profitMargin / 100);
    let finalPrice = costValue + profit + shippingCost;
    return finalPrice;
}

console.log(calculateProductPrice(100, 20, 15));
