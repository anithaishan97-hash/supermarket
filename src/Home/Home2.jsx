import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styles from "./Home2.module.css";

import img1 from "../assets/img4.avif";
import img2 from "../assets/img5.avif";
import img3 from "../assets/stoberry.avif";
import img4 from "../assets/avocados.avif";
import img5 from "../assets/chicken.avif";
import img6 from "../assets/coffee.avif";
import img7 from "../assets/flakes.avif";
import img8 from "../assets/h8img3.avif";
import Button2 from "../Components/Button2";
import Button4 from "../Components/Button4";

import Button3 from "../Components/Button3";

const Home2 = () => {
  const carouselRef = useRef(null);

const scrollLeft = () => {
  carouselRef.current.scrollBy({ left: -265, behavior: "smooth" });
};

const scrollRight = () => {
  carouselRef.current.scrollBy({ left: 265, behavior: "smooth" });
};

  const products = [
    { id: 1, name: "Hand Cream", image: img1, oldPrice: null, price: 2.99 },
    { id: 2, name: "Herbal Tea 16 ct.", image: img2, oldPrice: null, price: 3.99 },
    { id: 3, name: "Strawberries - 1lb", image: img3, oldPrice: 4.99, price: 4.49 },
    { id: 4, name: "Hass Avocados - 1lb", image: img4, oldPrice: 2.99, price: 2.69 },
    { id: 5, name: "Boneless Chicken Thighs", image: img5, oldPrice: 4.49, price: 4.04 },
    { id: 6, name: "Fresh Coffee Pack", image: img6, oldPrice: null, price: 6.99 },
    { id: 7, name: "Organic Cereal Flakes", image: img7, oldPrice: 5.49, price: 4.99 },
    { id: 8, name: "Whitening Toothpaste 4 oz", image: img8, oldPrice: null, price: 3.49 },
  ];

  return (
    <div className={styles.main}>
      <h2 className={styles.heading}>Best Deals</h2>

      <div className={styles.carouselWrapper}>
        <button className={styles.arrowLeft} onClick={scrollLeft}>
          <FaChevronLeft size={20} />
        </button>

        <div className={styles.carousel} ref={carouselRef}>
          {products.map((product) => (
            <div key={product.id} className={styles.card}>

              <Button4/>

              <img src={product.image} alt={product.name} className={styles.image} />

              <p className={styles.title}>{product.name}</p>

              <div className={styles.pricing}>
                {product.oldPrice && (
                  <span className={styles.oldPrice}>${product.oldPrice}</span>
                )}
                <span className={styles.price}>${product.price}</span>
              </div>
              <div className={styles.qtyBox}>
              <span>-</span>
              <span>1</span>
              <span>+</span>
            </div>
            <Button2/>
    
            </div>
          ))}
        </div>

        <button className={styles.arrowRight} onClick={scrollRight}>
          <FaChevronRight size={20} />
        </button>
      </div>
        <Button3/>
    </div>
  );
};

export default Home2;