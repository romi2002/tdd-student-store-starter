import * as React from "react"
import "./ProductDetail.css"
import {useEffect, useState} from "react";
import {Routes, Route, useParams} from 'react-router-dom';
import axios from "axios";
import ProductView from "../ProductView/ProductView";

export default function ProductDetail({}) {
    const {productId} = useParams()
    const [product, setProduct] = useState(null)

    useEffect(() => {
        axios.get('http://localhost:3001/store/' + productId).then(res => {
            console.log(res.data)

            setProduct(res.data.product)
        }).catch((error) => {
            //TODO Handle request error
            console.log("Error!")
        })
    }, [productId])

    return (
        <div className={'product-detail'}>
            {product === null ?
                <h1 className='loading'>Loading...</h1> :
                <ProductView productId={productId} product={product}
                showButtons={false}
                showDescription={true}
                showName={false}/>}
        </div>
    )
}