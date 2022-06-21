import * as React from "react"
import "./ProductGrid.css"
import ProductCard from "../ProductCard/ProductCard";

export default function ProductGrid({
                                        products,
                                        handleAddItemToCart,
                                        handleRemoveItemToCart,
                                        shoppingCart,
                                        selectedCategories,
                                        searchTerm
                                    }) {
    return (<div className={"product-grid"}>
        {products !== null && products.map((product, id) => {
                console.log(searchTerm)
                const isInSearch = searchTerm === '' || product.name.toLowerCase().search(searchTerm.toLowerCase()) !== -1
                if (selectedCategories.includes(product.category) && isInSearch) {
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