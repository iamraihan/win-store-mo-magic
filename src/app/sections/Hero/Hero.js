"use client";
// import styles from "./Hero.module.css";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper-bundle.css";
// import required modules
import { Parallax, Pagination, Navigation } from "swiper";
import Image from "next/image";
import styles from "./Hero.module.css";
const Hero = () => {
  return (
    <div>
      <>
        <Swiper
          speed={600}
          parallax={true}
          pagination={{
            clickable: true,
          }}
          modules={[Parallax, Pagination]}
          className="heroSlider"
        >
          <SwiperSlide
            className="parallax-bg"
            style={{
              backgroundImage: "url(/hero-bg.png)",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            data-swiper-parallax="-23%"
          >
            <div className={`${styles.sliderContentWrapper}`}>
              <div className={`${styles.sliderContents}`}>
                <div className="title" data-swiper-parallax="-300">
                  <h2 className={`${styles.heroSliderTitle}`}>
                    <span style={{ color: "#000" }}>Shop</span> Computer &
                    experience
                  </h2>
                </div>
                <div className="subtitle" data-swiper-parallax="-200">
                  <p className={`${styles.heroSubTitle}`}>
                    You cannot inspect quality into the product; it is already
                    there. I am not a product of my circumstances. I am a
                    product of my decisions.
                  </p>
                </div>
                <div className="text" data-swiper-parallax="-100">
                  <button className={`${styles.heroBtn}`}>View More</button>
                </div>
              </div>
              <div>
                <Image
                  src="/discount-40.png"
                  alt="40% Discount"
                  width={165}
                  height={159}
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            className="parallax-bg"
            style={{
              backgroundImage: "url(/hero-bg.png)",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            data-swiper-parallax="-23%"
          >
            <div className={`${styles.sliderContentWrapper}`}>
              <div className={`${styles.sliderContents}`}>
                <div className="title" data-swiper-parallax="-300">
                  <h2 className={`${styles.heroSliderTitle}`}>
                    <span style={{ color: "#000" }}>Shop</span> Computer &
                    experience
                  </h2>
                </div>
                <div className="subtitle" data-swiper-parallax="-200">
                  <p className={`${styles.heroSubTitle}`}>
                    You cannot inspect quality into the product; it is already
                    there. I am not a product of my circumstances. I am a
                    product of my decisions.
                  </p>
                </div>
                <div className="text" data-swiper-parallax="-100">
                  <button className={`${styles.heroBtn}`}>View More</button>
                </div>
              </div>
              <div>
                <Image
                  src="/discount-40.png"
                  alt="40% Discount"
                  width={165}
                  height={159}
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            className="parallax-bg"
            style={{
              backgroundImage: "url(/hero-bg.png)",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            data-swiper-parallax="-23%"
          >
            <div className={`${styles.sliderContentWrapper}`}>
              <div className={`${styles.sliderContents}`}>
                <div className="title" data-swiper-parallax="-300">
                  <h2 className={`${styles.heroSliderTitle}`}>
                    <span style={{ color: "#000" }}>Shop</span> Computer &
                    experience
                  </h2>
                </div>
                <div className="subtitle" data-swiper-parallax="-200">
                  <p className={`${styles.heroSubTitle}`}>
                    You cannot inspect quality into the product; it is already
                    there. I am not a product of my circumstances. I am a
                    product of my decisions.
                  </p>
                </div>
                <div className="text" data-swiper-parallax="-100">
                  <button className={`${styles.heroBtn}`}>View More</button>
                </div>
              </div>
              <div>
                <Image
                  src="/discount-40.png"
                  alt="40% Discount"
                  width={165}
                  height={159}
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default Hero;
