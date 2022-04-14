import React from "react";
import ProductContent from "./ProductContent";
import ProductList from "./ProductList";
import ProductTitle from "./ProductTitle";

export default function ProductMain() {
    return (
        <React.Fragment>
            <ProductTitle />
            <ProductList />
            <ProductContent />
        </React.Fragment>
    );
}