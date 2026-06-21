interface Product {
    price: number,
    name: string,
    applyDiscount: (discountPercent: number) => number
};

const product: Product = {
    price: 100,
    name: "Shoes",
    applyDiscount: function(discount) {
        let newPrice = (1-discount) * this.price;
        return this.price = newPrice;
    }
};

product.applyDiscount(0.4);

console.log(product);