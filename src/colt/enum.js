var ORDER_STATUS;
(function (ORDER_STATUS) {
    ORDER_STATUS["PENDING"] = "pending";
    ORDER_STATUS["SHIPPED"] = "hello";
    ORDER_STATUS["DELIVERED"] = "delivered";
    ORDER_STATUS["RETURNED"] = "returned";
})(ORDER_STATUS || (ORDER_STATUS = {}));
var isPending = ORDER_STATUS.PENDING;
console.log(isPending);
