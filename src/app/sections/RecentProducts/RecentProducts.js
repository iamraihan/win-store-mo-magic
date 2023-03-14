"use client";
import styles from "./RecentProducts.module.css";
import getQueryClient from "@/app/utils/getQueryClient";
import { useQuery } from "react-query";
import ProductCard from "@/app/components/ProductCard/ProductCard";

export const getProducts = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return data;
};
const RecentProducts = () => {
  const { data, isLoading, error } = useQuery("products", getProducts);
  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  //   console.log(data);
  return (
    <div className={`${styles.productsContainer}`}>
      <h2 className={`${styles.productTitle}`}>
        <span>New</span> Arrivals
      </h2>
      <div className={`${styles.productsWrapper}`}>
        {data.slice(0, 10).map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default RecentProducts;
