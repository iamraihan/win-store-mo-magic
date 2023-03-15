import styles from "./ProductByCategoryCard.module.css";
const ProductByCategoryCard = ({ data }) => {
  console.log(data);
  return (
    <div className={styles.categoryProductCard}>
      <div className={styles.contentWrapper}>
        <div>
          <p className={styles.categoryCardTitle}>Nintendo Switch Console</p>
          <h4 className={styles.categoryCardDiscountPrice}>Rs.{data?.price}</h4>
          <p className={styles.categoryCardRegularPrice}>
            Rs.{data?.rating.count}
          </p>
        </div>
        {data.price == 168 && (
          <div>
            <img src={data?.image} alt="" />
          </div>
        )}
        <h3 className={styles.specialOffer}>
          <span>Special</span> Offer
        </h3>
      </div>
      <div className={styles.imgWrapper}>
        <div className={styles.save}>
          Save <br />
          10%
        </div>
        {data.price != 168 && (
          <div>
            <img src={data?.image} alt="" />
          </div>
        )}
      </div>
      <div className={styles.availableItemOne}>
        {data.id == 6 && (
          <>
            <p>Already Sold: 6 </p>
            <p>Available: 30</p>
          </>
        )}
      </div>
      <div className={styles.availableItemThree}>
        {data.id == 9 && (
          <>
            <p>Already Sold: 6 </p>
            <p>Available: 30</p>
          </>
        )}
      </div>
      <div className={styles.availableItemTwo}>
        {data.id == 8 && (
          <>
            <p>Already Sold: 6 </p>
            <p>Available: 30</p>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductByCategoryCard;
