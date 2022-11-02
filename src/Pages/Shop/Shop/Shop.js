import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const addToCart = (product) => {
        const card = [...cart, product]
        setCart(card);
    };

    return (
        <Container
            sx={{
                display: 'grid',
                gap: 3,
                gridTemplateColumns: 'repeat(3, 1fr)',
            }}
        >
            <div>
                <Cart cart={cart} />
            </div>
            {
                products.map(products =>
                    <Products
                        key={products.id}
                        products={products}
                        addToCart={addToCart}
                    />
                )
            }
        </Container>
    );
};

export default Shop;