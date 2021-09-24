import { Typography } from '@material-ui/core';
import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router'
import { selectedProducts } from '../Redux/Actions/productAction';


export default function ProductDetail() {
    const products = useSelector(state => state.product);
    const { id, title, image, description, price, category } = products;

    const { productId } = useParams();
    console.log(productId);
    const dispatch = useDispatch();
    const fetchDetail = async () => {
        const res = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch((err) => console.log("error", err));
        dispatch(selectedProducts(res.data));
    };
    useEffect(() => {
        if (productId && productId !== "")
            fetchDetail();
    }, [productId]);



    console.log(products)
    return (
        <>
            <div key={id}>
                <div>
                    <img src={image} alt={title} />
                </div>
                <div>
                    <Typography>{title}</Typography>
                    <Typography> $ {price}</Typography>
                    <Typography>{category}</Typography>
                    <Typography>{description}</Typography>
                </div>
            </div></>
    )
}
