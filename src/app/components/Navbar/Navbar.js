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
                  <select>
                    <option>All categories</option>
                    <option>option 2 </option>
                    <option>option 3 </option>
                  </select>
                </div>
                <div>
                  <input type="text" placeholder="Search for products" />
                  <img src="/search.png" alt="" />
                </div>
              </div>
            </div>
            <div className={styles.cartAreaWrapper}>
              <div>
                <p className={styles.callNow}>Call Us Now</p>
                <p className={styles.phone}>+011 5827918</p>
                <p className={styles.phone}>Sign In</p>
              </div>
              <div>
                <img src="/user.png" alt="" />
              </div>
              <div>
                <img src="/heart.png" alt="" />
              </div>
              <div className={styles.cartItem}>
                <img src="/cart.png" alt="" />
                <p>Cart</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bottomNav}></div>
      </div>
    </div>
  );
};

export default Navbar;
