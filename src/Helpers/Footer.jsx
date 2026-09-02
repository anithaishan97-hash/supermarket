import React from "react";
import { FiYoutube } from "react-icons/fi";
import { GrInstagram } from "react-icons/gr";
import { LuFacebook } from "react-icons/lu";
import styles from "./Footer.module.css";
import logo1 from '../assets/logo1.avif'
import logo2 from '../assets/logo2.avif'
import logo3 from '../assets/logo3.avif'
import logo4 from '../assets/logo4.avif'
import logo5 from '../assets/logo5.avif'
import logo6 from '../assets/logo6.avif'
import logo7 from '../assets/logo7.avif'

const Footer = () => {

 return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        <div className={styles.col}>
          <h2 className={styles.brand}>Clovers.</h2>

          <h3 className={styles.subtitle}>Need Help?</h3>

          <p>
            Visit our <span className={styles.link}>Customer Support</span> <br />
            for assistance or call us at
          </p>

          <h2 className={styles.phone}>123-456-7890</h2>

          <div className={styles.social}>
            <LuFacebook />
            <GrInstagram />
            <FiYoutube />
          </div>
        </div>
        <div className={styles.col}>
          <h3 className={styles.title}>Menu</h3>
          <p>Deals</p>
          <p>Food</p>
          <p>Beverages</p>
          <p>Household</p>
          <p>Personal Care</p>
          <p>My Orders</p>
        </div>


        <div className={styles.col}>
          <h3 className={styles.title}>Categories</h3>
          <p>Vegetables</p>
          <p>Bakery</p>
          <p>Wine</p>
          <p>Dairy & Eggs</p>
          <p>Meat & Poultry</p>
          <p>Soft Drinks</p>
          <p>Cleaning Supplies</p>
          <p>Cereal & Snacks</p>
        </div>

        <div className={styles.col}>
          <h3 className={styles.title}>Info</h3>
          <p>FAQ</p>
          <p>About Us</p>
          <p>Customer Support</p>
          <p>Locations</p>
        </div>

        <div className={styles.col}>
          <h3 className={styles.title}>My Choice</h3>
          <p>Favorites</p>
          <p>My Orders</p>
        </div>

      </div>

      <div className={styles.line}></div>
      <div className={styles.last}>
      <div className={styles.content}>
        <p><u>Shipping & Returns</u></p>
        <p><u>Terms & Conditions</u></p>
        <p><u>Payment Methods</u></p>
      </div>
      <div className={styles.payment}>
      <p>We accept the following payment methods</p>
      </div>
      </div>
      <div className={styles.logoRow}>
        <img src={logo1} alt="payment1" />
        <img src={logo2} alt="payment2" />
        <img src={logo3} alt="payment3" />
        <img src={logo4} alt="payment4" />
        <img src={logo5} alt="payment5" />
        <img src={logo6} alt="payment6" />
        <img src={logo7} alt="payment7" />

      </div>
    </footer>
    
  );
};

export default Footer;