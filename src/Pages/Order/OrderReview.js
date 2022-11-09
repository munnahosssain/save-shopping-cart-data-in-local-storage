import React from 'react';
import Cart from '../Shop/Cart/Cart';
import ItemReview from './ItemReview';
import { Container } from '@mui/system';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { Link } from 'react-router-dom';
import { removeFromDb } from '../../utilities/fakedb';

const OrderReview = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);

    const deleteItems = (product) => {
        const rest = cart.filter(pd => pd.id !== product.id)
        setCart(rest);
        removeFromDb(product.id);
        console.log('re');
    };

    return (
        <Container style={{ display: 'flex', grid: '20px', gridTemplateColumns: 'repeat (2,2fr)' }}>
            <div className="cols-md-6">
                {
                    cart.map(product =>
                        <ItemReview
                            key={product.id}
                            product={product}
                            deleteItems={deleteItems}
                        />
                    )
                }
            </div>
            <div className="cols-md-6" style={{ marginLeft: '35px' }}>
                <Cart cart={cart} >
                    <Link to='/'>link</Link>
                </Cart>
            </div>
        </Container>
    );
};

export default OrderReview;