import { Typography } from '@material-ui/core'
import React, { useEffect } from 'react'
import ProductComponent from './ProductComponent'
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import { setProducts } from "../Redux/Actions/productAction"

export default function ProductListing() {

    const products = useSelector(state => state);
    const dispatch = useDispatch();
    // const { id, title } = products;
    const fetchProducts = async () => {
        const res = await axios.get("https://fakestoreapi.com/products").catch((err) => {
            console.log("error", err)
        });
        dispatch(setProducts(res.data));
    };
    useEffect(() => {

        fetchProducts();
    }, []);
    console.log(products)
    return (
        <div>
            <ProductComponent />
        </div>
    )
}
