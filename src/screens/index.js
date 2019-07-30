import React, { useState } from "react";
import { getCoffeeData } from "../api/getData";

import Layout from "../components/Layout";
import Loading from "../components/Loading";
import ItemGroup from "../components/ItemGroup";

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

  return (
    <Layout>
      {isLoading && <Loading />}
      {data && <ItemGroup data={data} />}
      {error && JSON.stringify(error)}
    </Layout>
  );
}
