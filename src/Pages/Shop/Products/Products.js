import React from 'react';
import { Button, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

const Products = ({products, addToCart}) => {
    const { name, price, img, ratings } = products;
    return (
        <div>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="180"
                        image={img}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">{name}</Typography>
                        <Typography variant="body1" color="text.secondary">Price: ৳{price}</Typography> <br />
                        <Typography variant="body2" color="text.secondary">Ratings: {ratings}</Typography>
                    </CardContent>
                </CardActionArea>
                <Button
                    size="medium"
                    variant="contained"
                    onClick={() => addToCart(products)}
                >
                    Add to cart
                </Button>
            </Card>
        </div>
    );
};

export default Products;