import React, { useState, useContext, useEffect } from "react";
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

  useEffect(() => {
    const getData = async () => {
      try {
        const newData = await getCoffeeData();
        setData(newData);
        setLoading(false);
      } catch (ex) {
        setData(undefined);
        setLoading(false);
        setError(ex);
      }
    };

    getData();
  }, []);

  return { data, isLoading: loading, error };
}

export default function() {
  const { data, isLoading, error } = useCoffeeData();
  const [showCart, setShowCart] = useState(false);
  const { dispatch } = useContext(GlobalContext);

  return (
    <Layout onToggleCart={() => setShowCart(!showCart)} showCart={showCart}>
      {isLoading && <Loading />}
      {showCart && <Cart />}
      {!showCart && data && (
        <ItemGroup
          data={data}
          addToCart={item => dispatch({ type: "ADD_ITEM", payload: item })}
        />
      )}
      {error && JSON.stringify(error)}
    </Layout>
  );
}
