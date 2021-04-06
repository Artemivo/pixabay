import React, { useState } from "react";
import { useSelector } from "react-redux";
import ProductItem from "../components/ProductItem";
import products from "../redux/reducers/products";

function ProductList() {
  const hits = useSelector((state) => state.products);
  return (
    <div className="content-list">
      {hits && hits.length === 0 && (
        <p className="category-warrning">Enter a word in the search</p>
      )}

      {hits && hits.map((hit) => <ProductItem hit={hit} key={hit.id} />)}
    </div>
  );
}

export default ProductList;
