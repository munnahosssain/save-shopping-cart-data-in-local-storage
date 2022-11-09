import React from 'react';
import { Link } from 'react-router-dom';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    let quantity = 0;
    let shipping = 0;

    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }

    const tax = parseFloat((total * .15).toFixed(2));
    const grandTotal = (total + shipping + tax).toFixed(2);

    return (
        <div>
            <h2>Order Summary</h2>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: $ {total}</p>
            <p>Total Shipping Cost: $ {shipping}</p>
            <p>Tax: ${tax}</p>
            <p>Grand Total: $ {grandTotal}</p>
            {/* <Link to='/order'>delete</Link> */}
            <Link to='/order' style={{ textDecoration: 'none' }}>
                {props.children}
                <HiArrowNarrowRight size={25} />
            </Link>
        </div>
    );
};

export default Cart;