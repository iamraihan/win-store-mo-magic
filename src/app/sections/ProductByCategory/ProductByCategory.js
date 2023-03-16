"use client";
import ProductByCategoryCard from "@/app/components/ProductByCategoryCard/ProductByCategoryCard";
import Loading from "@/app/Loading";
import { useQuery } from "react-query";
import styles from "./ProductByCategory.module.css";
import { Tab } from "@headlessui/react";
const getCategory = async () => {
  const res = await fetch(
    "https://fakestoreapi.com/products/category/jewelery"
  );
  const data = await res.json();
  return data;
};

const ProductByCategory = () => {
  const { data, isLoading, error } = useQuery("category", getCategory);
  if (isLoading) return <Loading />;

  if (error) return "An error has occurred: " + error.message;

  const singDataObj = {
    id: 9,
    title: "White Gold Plated Princess",
    price: 9.99,
    description:
      "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    rating: {
      rate: 3,
      count: 400,
    },
  };
  const newData = [...data, singDataObj];
  return (
    <div className={styles.categoryProductContainer}>
      <div className={styles.sectionTabWrapper}>
        <p className={styles.productCategoryTitle}>
          <span>Best</span> Deals
        </p>
        <div className={styles.tabItemWrap}>
          <p className={styles.tabItem}>Kitchen Appliances</p>
          <p className={styles.tabItem}>Consoles</p>
          <p className={styles.tabItem}>TV & Videos</p>
          <p className={styles.tabItem}>Cell Phones</p>
          <p className={styles.tabItem}>Grocery</p>
        </div>
      </div>

      <div className={styles.productCategoryWrapper}>
        {newData.map((data) => (
          <ProductByCategoryCard data={data} key={data.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductByCategory;
