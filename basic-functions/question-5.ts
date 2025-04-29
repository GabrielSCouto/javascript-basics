function discount(price: number, discount: number): number{
    return price - (price * discount)
}

console.log("Final price: $",discount(100,0.75).toFixed(2))