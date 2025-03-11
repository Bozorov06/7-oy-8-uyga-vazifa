import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetProductsByCategoryQuery } from "../lib/apiSlice/productsApi";
import Products from "./Products";

function Filter() {
  const { category } = useParams();
  const [page, setPage] = useState(0);
  const { data, isLoading, error } = useGetProductsByCategoryQuery({
    category,
    page,
  });
  const total = data ? Math.ceil(data.total / 10) : 0;
  return (
    <div>
      <h1 className=" font-semibold text-4xl text-center my-10">Sorted Products</h1>
      <Products
        error={error}
        isLoading={isLoading}
        products={data?.products}
        page={page}
        setPage={setPage}
        total={total}
      />
    </div>
  );
}

export default Filter;
