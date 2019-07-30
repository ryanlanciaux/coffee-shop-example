import React, { useState, useContext } from "react";
import { getCoffeeData } from "../api/getData";

import Layout from "../components/Layout";
import Loading from "../components/Loading";
import ItemGroup from "../components/ItemGroup";
import Cart from "../components/Cart";

import { GlobalContext } from "../components/GlobalStateProvider";

// this should be a reducer
function useCoffeeData() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  getCoffeeData()
    .then(newData => {
      setData(newData);
      setLoading(false);
    })
    .catch(ex => {
      setData(undefined);
      setLoading(false);
      setError(ex);
    });

  return { data, isLoading: loading, error };
}

export default function() {
  const { data, isLoading, error } = useCoffeeData();
  const [showCart, setShowCart] = useState(false);
  const { dispatch } = useContext(GlobalContext);

  return (
    <Layout onToggleCart={() => setShowCart(!showCart)}>
      {isLoading && <Loading />}
      {showCart && <Cart />}
      {data && (
        <ItemGroup
          data={data}
          addToCart={item => dispatch({ type: "ADD_ITEM", payload: item })}
        />
      )}
      {error && JSON.stringify(error)}
    </Layout>
  );
}
