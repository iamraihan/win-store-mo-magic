import Link from "next/link";
import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <div>
      <div className={styles.navbar}>
        <div className={styles.topNav}>
          <div className={styles.topNavWrapper}>
            <div className={styles.logoSearchWrapper}>
              <div>
                <img src="/logo.png" alt="" />
              </div>
              <div className={styles.inputWrapper}>
                <div>
                  <select className={styles.inputSelect}>
                    <option>All categories</option>
                    <option>option 2 </option>
                    <option>option 3 </option>
                  </select>
                </div>
                <div>
                  <input
                    className={styles.inputText}
                    type="text"
                    placeholder="Search for products"
                  />
                </div>
                <div>
                  <img className={styles.submitBtn} src="/search.png" alt="" />
                </div>
              </div>
            </div>
            <div className={styles.cartAreaWrapper}>
              <div>
                <p className={styles.callNow}>Call Us Now</p>
                <p className={styles.phone}>
                  {" "}
                  <img src="/headphones.svg" alt="" />
                  +011 5827918
                </p>
                <p className={styles.signIn}>Sign In</p>
              </div>
              <div>
                <img src="/user.png" alt="" />
              </div>
              <div>
                <img src="/heart.png" alt="" />
              </div>
              <div className={styles.cartItem}>
                <img src="/cart.png" alt="" />
                <p className={styles.cartText}>Cart</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bottomNav}>
          <div className={styles.bottomNavWrapper}>
            <div className={styles.routesList}>
              <div className={styles.categoryWrapper}>
                <img src="/hamburger.svg" alt="" />
                <p>Brouse By Category</p>
              </div>
              <Link className={styles.route} href="#">
                <p>Home</p>
              </Link>
              <Link className={styles.route} href="#">
                <p>Easy Monthly Installments</p>
              </Link>
              <Link className={styles.route} href="#">
                <p>Easy Shop by Brands</p>
              </Link>
              <Link className={styles.route} href="#">
                <p>Easy Become a Vendor</p>
              </Link>
            </div>
            <div className={styles.socialIcons}>
              <div className={styles.icon}>
                <Link href="#">
                  <img src="/fb.svg" alt="" />
                </Link>
              </div>
              <div className={styles.icon}>
                <Link href="#">
                  {" "}
                  <img src="/twitter.svg" alt="" />
                </Link>
              </div>
              <div className={styles.icon}>
                <Link href="#">
                  {" "}
                  <img src="/linkedIn.svg" alt="" />
                </Link>
              </div>
              <div className={styles.icon}>
                <Link href="#">
                  {" "}
                  <img src="/insta.svg" alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
