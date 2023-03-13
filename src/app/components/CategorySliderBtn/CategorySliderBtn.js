import Image from "next/image";
import { useSwiper } from "swiper/react";
import styles from "./CategorySliderBtn.module.css";

const CategorySliderBtn = () => {
  const swiper = useSwiper();
  return (
    <div className={`${styles.swiperBtns}`}>
      <button
        className={`${styles.categorySwiperNextBtn}`}
        onClick={() => swiper.slidePrev()}
      >
        <Image src="/left-arrow-category.svg" width={16} height={33} />
      </button>
      <button
        className={`${styles.categorySwiperPrevBtn}`}
        onClick={() => swiper.slideNext()}
      >
        {" "}
        <Image src="/right-arrow-category.svg" width={16} height={33} />
      </button>
    </div>
  );
};

export default CategorySliderBtn;
