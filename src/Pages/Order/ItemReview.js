import { Button } from '@mui/material';
import React from 'react';

const ItemReview = ({ deleteItems, product }) => {
    const { img, name, price, quantity } = product;

    return (
        <div style={{ display: 'flex', border: '1px solid red', marginTop: '5px', borderRadius: '5px' }}>
            <img style={{ height: '100px', borderRadius: '10px' }} src={img} alt="" />
            <p>{name}</p>
            <p>Price: {price}</p>
            <p>Quantity: {quantity}</p>
            <Button onClick={() => deleteItems(product)}>Delete</Button>
        </div>
    );
};

export default ItemReview;