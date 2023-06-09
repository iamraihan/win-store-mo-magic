"use client";
import "swiper/swiper-bundle.css";
import styles from "./Category.module.css";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import CategorySliderBtn from "@/app/components/CategorySliderBtn/CategorySliderBtn";

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
            style={{ paddingLeft: "30px", paddingRight: "30px" }}
            slidesPerView={1.2}
            spaceBetween={33}
            effect={"fade"}
            breakpoints={{
              640: {
                slidesPerView: 1.2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 16,
              },

              1024: {
                slidesPerView: 4,
                spaceBetween: 33,
              },
            }}
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
                    style={{ height: "100%", width: "100%" }}
                    alt={data?.title}
                  />
                  <div className={`${styles.shop}`}>
                    <h4>{data?.title}</h4>
                    <p className={`${styles.shopSubtitle}`}>Shop</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <CategorySliderBtn />
          </Swiper>
        </>
      </div>
    </div>
  );
};

export default Category;
