"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Loading from "../Loading";
import styles from "./page.module.css";

const ProductDetails = (params) => {
  //   console.log(params.params.slug);
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.params.slug}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  if (!product) {
    return <Loading />;
  }
  return (
    <div className={styles.singleProductsContainer}>
      <div className={styles.wrapper}>
        <section className={styles.itemSection}>
          <div className={styles.heart}>
            <i className="fas fa-heart"></i>
          </div>

          {/* <img src={product?.image} alt="" /> */}
          <Image src={product?.image} width={300} height={300} />
          <div className={styles.card}>
            <h1>{product?.title?.slice(0, 10)}</h1>
            <p>RS {product?.price}</p>
            <p>{product?.description?.slice(0, 20)}</p>
          </div>
          <button className={styles.buyBtn}>+ ADD TO CART</button>
        </section>
      </div>
    </div>
  );
};

export default ProductDetails;
