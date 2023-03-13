"use client";
import "swiper/swiper-bundle.css";
import styles from "./Category.module.css";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

const Category = () => {
  const dataList = [
    {
      id: 1,
      title: "electronics",
      imgURL: "/electronics.png",
    },
    {
      id: 2,
      title: "jewelery",
      imgURL: "/fashion.png",
    },
    {
      id: 3,
      title: "men's clothing",
      imgURL: "/appliances.png",
    },
    {
      id: 4,
      title: "women's clothing",
      imgURL: "/babies-store.png",
    },
    {
      id: 5,
      title: "electronics",
      imgURL: "/electronics.png",
    },
    {
      id: 6,
      title: "jewelery",
      imgURL: "/fashion.png",
    },
    {
      id: 7,
      title: "men's clothing",
      imgURL: "/appliances.png",
    },
    {
      id: 8,
      title: "women's clothing",
      imgURL: "/babies-store.png",
    },
  ];
  return (
    <div className={`${styles.categoryBg}`}>
      <div className={`${styles.categoryContainer}`}>
        <>
          <Swiper
            slidesPerView={4}
            spaceBetween={33}
            effect={"fade"}
            navigation={true}
            modules={[Navigation]}
            className="categorySlider"
          >
            {dataList?.map((data) => (
              <SwiperSlide key={data.id}>
                <div className={`${styles.relative}`}>
                  <Image
                    src={`${data?.imgURL}`}
                    width={272}
                    height={199}
                    alt={data?.title}
                  />
                  <div className={`${styles.shop}`}>
                    <h4>{data?.title}</h4>
                    <p className={`${styles.shopSubtitle}`}>Shop</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      </div>
    </div>
  );
};

export default Category;
