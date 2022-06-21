import * as React from "react"
import "./ProductGrid.css"
import ProductCard from "../ProductCard/ProductCard";

export default function ProductGrid({
                                        products,
                                        handleAddItemToCart,
                                        handleRemoveItemToCart,
                                        shoppingCart,
                                        selectedCategories
                                    }) {
    return (<div className={"product-grid"}>
        {products !== null && products.map((product, id) => {
                console.log(selectedCategories)
                console.log(product.category)
                if (selectedCategories.includes(product.category)) {
                    return <ProductCard key={"product-card-" + id}
                                        handleAddItemToCart={handleAddItemToCart}
                                        handleRemoveItemToCart={handleRemoveItemToCart}
                                        product={product}
                                        productId={product.id}
                                        quantity={shoppingCart[product.id]}/>
                }
            }
        )}
        {selectedCategories.length === 0 && <h1>Select a category!</h1>}
    </div>)
}