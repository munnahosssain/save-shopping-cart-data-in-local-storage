import React from 'react';

const Cart = ({ cart }) => {
    let total = 0;
    let quantity = 0;
    let shippingCost = 0
    
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price;
        shippingCost = shippingCost + product.shipping;
    }

    let tax = 0;
    let grandTotal = 0;
    tax = parseFloat((total * .15).toFixed(2));
    grandTotal = parseFloat((total + shippingCost + tax).toFixed(2));

    return (
        <div>
            <h2>Order Summary</h2>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: $ {total}</p>
            <p>Total Shipping Cost: $ {shippingCost}</p>
            <p>Tax: ${tax}</p>
            <p>Grand Total: $ {grandTotal}</p>
        </div>
    );
};

export default Cart;