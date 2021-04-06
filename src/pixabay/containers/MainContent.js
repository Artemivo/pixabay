import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import apiClient from "../api/API";
import { addProducts, filterProducts } from "../redux/actions/products";
import ProductList from "./ProductList";

function MainContent() {
  const hits = useSelector((state) => state.products);
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();

  function takeData() {
    apiClient
      .get(
        `https://pixabay.com/api/?key=21019747-b0e1c7087da51f2ebe306f156&q=${category}&image_type=all&per_page=100`
      )
      .then((response) => {
        const data = response.data;
        dispatch(addProducts(data));
      })
      .catch((err) => console.log(err));
  }
  return (
    <div>
      <main className="wrapper-content">
        <div className="filter-form">
          <input
            className="input-filter"
            placeholder="Select a category"
            type="text"
            onChange={(e) => setCategory(e.target.value)}
            autoFocus
          ></input>

          <button className="button-filter" onClick={() => takeData()}>
            Select
          </button>

          {hits.length !== 0 && (
            <div className="radio_btn-container">
              <div className="form_radio_btn">
                <input
                  id="radio-1"
                  type="radio"
                  name="radio"
                  value="increase"
                  onChange={(e) => dispatch(filterProducts(e.target.value))}
                ></input>
                <label htmlFor="radio-1">increase</label>
              </div>
              <div className="form_radio_btn">
                <input
                  id="radio-2"
                  type="radio"
                  name="radio"
                  value="decrease"
                  onChange={(e) => dispatch(filterProducts(e.target.value))}
                ></input>
                <label htmlFor="radio-2">decrease</label>
              </div>
            </div>
          )}
        </div>
        <ProductList />
      </main>
    </div>
  );
}

export default MainContent;
