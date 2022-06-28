import * as React from "react"
import "./ProductGrid.css"
import ProductCard from "../ProductCard/ProductCard";

export default function ProductGrid({
                                        products,
                                        handleAddItemToCart,
                                        handleRemoveItemToCart,
                                        shoppingCart,
                                        selectedCategories,
                                        searchTerm,
                                        selectedSort
                                    }) {

    const alphabeticalSortFunc = (a,b) => {
        return a.name.localeCompare(b.name)
    }

    const priceSortFunc = (a,b) => {
        return a.price - b.price
    }

    const idSortFunc = (a,b) => {
        return a.id - b.id;
    }

    var sortFunc = idSortFunc;
    switch(selectedSort) {
        case 'id-asc':
            sortFunc = idSortFunc;
            break
        case 'id-desc':
            sortFunc = (a,b) => idSortFunc(b,a);
            break
        case 'price-asc':
            sortFunc = priceSortFunc;
            break
        case 'price-desc':
            sortFunc = (a,b) => priceSortFunc(b,a)
            break
        case 'name-asc':
            sortFunc = alphabeticalSortFunc;
            break
        case 'name-desc':
            sortFunc = (a,b) => alphabeticalSortFunc(b,a)
            break
    }

    var sortedProducts = [...(products??[])]
    sortedProducts.sort(sortFunc)

    console.log(sortedProducts)

    return (<div className={"product-grid"}>
        {sortedProducts.map((product, id) => {
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