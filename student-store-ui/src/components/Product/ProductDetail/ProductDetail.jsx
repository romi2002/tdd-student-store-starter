import * as React from "React"
import "./ProductDetail.css"
import {useEffect, useState} from "react";
import { Routes, Route, useParams } from 'react-router-dom';
import axios from "axios";
import ProductView from "../ProductView/ProductView";

export default function ProductDetail({}){
    const {productId} = useParams()
    const [product, setProduct] = useState(null)

    useEffect(() => {
        axios.get('https://codepath-store-api.herokuapp.com/store/' + productId).then(res => {
            setProduct(res.data.product)
            console.log(res.data.product)
        })
    }, [productId])

    return (
        <div className={'product-detail'}>
            {product === null ?
            <h1 className='loading'>Loading...</h1> :
            <ProductView productId={productId} product={product}/>}
        </div>
    )
}