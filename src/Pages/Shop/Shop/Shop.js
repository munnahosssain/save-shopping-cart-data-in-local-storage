import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../../utilities/fakedb';
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

    useEffect(() => {
        const storedCart = getStoredCart();
        const saveCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id)
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                saveCart.push(addedProduct);
            }
        }
        setCart(saveCart);
    }, [products])

    const addToCart = (selectedProduct) => {
        let newCart = [];
        const exist = cart.find(product => product.is === selectedProduct.id);
        if (!exist) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exist.quantity = exist.quantity + 1;
            newCart = [...rest, exist];
        }
        setCart(newCart);
        addToDb(selectedProduct.id);
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