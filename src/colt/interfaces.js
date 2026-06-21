;
var product = {
    price: 100,
    name: "Shoes",
    applyDiscount: function (discount) {
        var newPrice = (1 - discount) * this.price;
        return this.price = newPrice;
    }
};
product.applyDiscount(0.4);
console.log(product);
