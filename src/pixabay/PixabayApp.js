import React, { useEffect, useState } from "react";
import Header from "./containers/Header";
import MainContent from "./containers/MainContent";
import createStore from "./redux/createStore";
import { Provider } from "react-redux";
const store = createStore();

function PixabayApp() {


  return (
    <Provider store={store}>
      <div className="wrapper">
        <Header />
        <MainContent />
      </div>
    </Provider>
  );
}

export default PixabayApp;
