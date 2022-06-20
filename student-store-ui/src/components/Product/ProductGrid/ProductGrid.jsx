import * as React from "react"
import "./ProductGrid.css"
import ProductCard from "../ProductCard/ProductCard";

export default function ProductGrid({products,
                                    handleAddItemToCart,
                                    handleRemoveItemToCart,
                                    shoppingCart}) {
    return (<div className={"product-grid"}>
        {products !== null && products.map((product, id) => {
            return <ProductCard key={"product-card-" + id}
                                handleAddItemToCart={handleAddItemToCart}
                                handleRemoveItemToCart={handleRemoveItemToCart}
                                product={product}
                                productId={product.id}
                                quantity={shoppingCart[product.id]}/>
            }
        )}
    </div>)
}