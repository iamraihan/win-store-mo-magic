import Image from "next/image";
import styles from "./ProductCard.module.css";

const ProductCard = ({ product }) => {
  return (
    <div className={`${styles.product}`}>
      <p className={`${styles.productCategory}`}>Bin Bakar Electronics</p>
      <h4 className={`${styles.productTitle}`}>
        {product?.title.slice(0, 18)}
      </h4>
      <Image
        src={`${product?.image}`}
        width={158}
        height={129}
        // style={{ height: "100%", width: "100%" }}
        alt={product?.title}
      />
      <div className={`${styles.priceWrapper}`}>
        <p className={`${styles.regularPrice}`}>RS 60.000</p>
        <p className={`${styles.discountPrice}`}>RS101.000</p>
      </div>
      <div>
        <button className={`${styles.addToCartBtn}`}>Add to cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
