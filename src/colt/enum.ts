const enum ORDER_STATUS {
    // Adding const before enum does not add ORDER_STATUS object to compiled build js
    PENDING = "pending",
    SHIPPED = "hello",
    DELIVERED = "delivered",
    RETURNED = "returned"
}

const isPending = ORDER_STATUS.PENDING;
console.log(isPending);