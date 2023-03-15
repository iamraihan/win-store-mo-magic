import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <div>
      <div className={styles.topFooter}>
        <div className={styles.topFooterContainer}>
          <div className={styles.topFooterWrapper}>
            <div>
              <div className={styles.logo}>
                {/* <Image src="/public/logo.png" width={132} height={28} alt="logo" /> */}
                <img src="/logo.png" alt="" />
              </div>
              <p style={{ marginBottom: "14px" }} className={styles.callUs}>
                Got questions? Call us 24/7!
              </p>
              <div className={styles.phoneNumber}>
                <p>03 111 666 144</p>
                <p>0317 1777015.</p>
              </div>
              <div style={{ marginBottom: "14px" }}>
                <p className={styles.callUs}>Contact info</p>
                <p className={styles.email}>info@winstore.pk</p>
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
            <div className="colum">
              <h4 className={styles.linkCategory}>Trending</h4>

              <ul>
                <li style={{ listStyle: "none" }}>
                  <Link className={styles.link} href="#">
                    <p className={styles.linkItem}> Installments</p>
                  </Link>
                </li>
                <li style={{ listStyle: "none" }}>
                  <Link className={styles.link} href="#">
                    <p className={styles.linkItem}> Electronics</p>
                  </Link>
                </li>
                <li style={{ listStyle: "none" }}>
                  <Link className={styles.link} href="#">
                    <p className={styles.linkItem}> Grocery</p>
                  </Link>
                </li>
                <li style={{ listStyle: "none" }}>
                  <Link className={styles.link} href="#">
                    <p className={styles.linkItem}> Health & Beauty</p>
                  </Link>
                </li>
                <li style={{ listStyle: "none" }}>
                  <Link className={styles.link} href="#">
                    <p className={styles.linkItem}> Home Appliances</p>
                  </Link>
                </li>
                <li style={{ listStyle: "none" }}>
                  <Link className={styles.link} href="#">
                    <p className={styles.linkItem}> Mobile Accessories</p>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="colum">
              <h4 className={styles.linkCategory}>Information</h4>

              <ul>
                <li style={{ listStyle: "none" }}>
                  <Link className={styles.link} href="#">
                    <p className={styles.linkItem}> About Us</p>
                  </Link>
                </li>
                <li style={{ listStyle: "none" }}>
                  <Link className={styles.link} href="#">
                    <p className={styles.linkItem}> Contact Us</p>
                  </Link>
                </li>
                <li style={{ listStyle: "none" }}>
                  <Link className={styles.link} href="#">
                    <p className={styles.linkItem}> FAQs</p>
                  </Link>
                </li>
                <li style={{ listStyle: "none" }}>
                  <Link className={styles.link} href="#">
                    <p className={styles.linkItem}> Shipping & Return</p>
                  </Link>
                </li>
                <li style={{ listStyle: "none" }}>
                  <Link className={styles.link} href="#">
                    <p className={styles.linkItem}> Privacy policy</p>
                  </Link>
                </li>
                <li style={{ listStyle: "none" }}>
                  <Link className={styles.link} href="#">
                    <p className={styles.linkItem}> Terms & Conditions</p>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="colum">
              <h4 className={styles.linkCategory}>Customer Care</h4>

              <ul>
                <li style={{ listStyle: "none" }}>
                  <Link className={styles.link} href="#">
                    <p className={styles.linkItem}> My Account</p>
                  </Link>
                </li>
                <li style={{ listStyle: "none" }}>
                  <Link className={styles.link} href="#">
                    <p className={styles.linkItem}> Track Your Order</p>
                  </Link>
                </li>
                <li style={{ listStyle: "none" }}>
                  <Link className={styles.link} href="#">
                    <p className={styles.linkItem}> Recently Viewed</p>
                  </Link>
                </li>
                <li style={{ listStyle: "none" }}>
                  <Link className={styles.link} href="#">
                    <p className={styles.linkItem}> Wishlist</p>
                  </Link>
                </li>
                <li style={{ listStyle: "none" }}>
                  <Link className={styles.link} href="#">
                    <p className={styles.linkItem}> Compare</p>
                  </Link>
                </li>
                <li style={{ listStyle: "none" }}>
                  <Link className={styles.link} href="#">
                    <p className={styles.linkItem}> Become a Vendor</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.paymentGateway}>
            <img src="/payment-gateway.png" alt="" />
          </div>
        </div>
      </div>
      <div className={styles.copyrightFooter}>
        <div className={styles.copyrightFooterWrapper}>
          <p>© 2021 Winstore. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
