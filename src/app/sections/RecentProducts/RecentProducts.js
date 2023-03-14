"use client";
import styles from "./RecentProducts.module.css";
import { useQuery } from "react-query";
import ProductCard from "@/app/components/ProductCard/ProductCard";
import { useEffect, useState } from "react";

export const getProducts = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return data;
};
const RecentProducts = () => {
  const [width, setWidth] = useState(1140);
  useEffect(() => {
    window.addEventListener("resize", () => {
      const screenWidth = window.outerWidth;
      setWidth(screenWidth);
    });
  }, []);
  console.log(width);
  let cardWrapper;
  if (width >= 1140) {
    cardWrapper = styles.itemWrapper;
  } else {
    cardWrapper = styles.productsWrapper;
  }
  const { data, isLoading, error } = useQuery("products", getProducts);
  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  //   console.log(data);
  return (
    <div className={`${styles.productsContainer}`}>
      <h2 className={`${styles.productTitle}`}>
        <span>New</span> Arrivals
      </h2>
      <div className={`${cardWrapper}`}>
        {data.slice(0, 10).map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default RecentProducts;
