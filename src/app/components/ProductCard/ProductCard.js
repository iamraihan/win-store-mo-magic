import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./ProductCard.module.css";

const ProductCard = ({ product }) => {
  const [width, setWidth] = useState(1140);
  useEffect(() => {
    window.addEventListener("resize", () => {
      const screenWidth = window.outerWidth;
      setWidth(screenWidth);
    });
  }, [width]);
  // console.log(width);
  let imgWidth;
  if (width >= 640) {
    imgWidth = 158;
  } else {
    imgWidth = 300;
  }

  // card container width
  let cardWidth;
  if (width >= 1140) {
    cardWidth = styles.item;
  } else {
    cardWidth = styles.product;
  }
  return (
    <div className={`${cardWidth}`}>
      <p className={`${styles.productCategory}`}>Bin Bakar Electronics</p>
      <h4 className={`${styles.productTitle}`}>
        {product?.title.slice(0, 18)}
      </h4>
      <Image
        src={`${product?.image}`}
        width={imgWidth}
        height={129}
        // style={{ height: "100%", width: "100%" }}
        alt={product?.title}
      />
      <div className={`${styles.priceWrapper}`}>
        {/* currenty not availavle discount regular price thats whiy rating count set as regular price */}
        <p className={`${styles.regularPrice}`}>RS {product?.rating.count}</p>
        <p className={`${styles.discountPrice}`}>RS {product?.price}</p>
      </div>
      <div>
        <button className={`${styles.addToCartBtn}`}>Add to cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
