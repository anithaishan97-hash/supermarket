import React,{useState} from "react";
import Allprocss from '../Allproduct/AllproductFirst.module.css'
import img1 from '../../assets/all product/olive oil.avif'
import img2 from '../../assets/all product/white rice.avif'
import img3 from '../../assets/all product/black rice.avif'
import img4 from '../../assets/all product/brown rice.avif'
import img5 from '../../assets/all product/dark choculate.avif'
import img6 from '../../assets/all product/milk choculate.avif'
import img7 from '../../assets/all product/spaghetti no.7.avif'
import img8 from '../../assets/all product/shaped pasta.avif'
import img9 from '../../assets/all product/floor cleaner.avif'
import img10 from '../../assets/all product/fruit puree.avif'
import img11 from '../../assets/all product/baby powder.avif'
import img12 from '../../assets/all product/milk powder.avif'
import img13 from '../../assets/all product/milk powder2.avif'
import img14 from '../../assets/all product/size5 diapper.avif'
import img15 from '../../assets/all product/size2 diapper.avif'
import img16 from '../../assets/all product/size1 diapper.avif'
import img17 from '../../assets/all product/baby wipes.avif'
import img18 from '../../assets/all product/make up.avif'
import img19 from '../../assets/all product/shaving gel.avif'
import img20 from '../../assets/all product/spary.avif'
import img21 from '../../assets/all product/shower gel.avif'
import img22 from '../../assets/all product/hair clr.avif'
import img23 from '../../assets/all product/hand cream.avif'
import img24 from '../../assets/all product/shampoo.avif'
import img25 from '../../assets/all product/shampoo2.avif'
import img26 from '../../assets/all product/hand sanitizer.avif'
import img27 from '../../assets/all product/cutting board.avif'
import img28 from '../../assets/all product/led.avif'
import img29 from '../../assets/all product/light bub.avif'
import img30 from '../../assets/all product/glass bowl.avif'
import img31 from '../../assets/all product/woodern kitchen.avif'
 import Button2 from '../../Components/Button2'


const AllproductFirst = () => {
 const [price, setPrice] = useState(27);


const products = [
  {
    id: 1,
    name: "Olive Oil",
    image: img1,
    price: "$4.99",
    badge: "Most Popular",
  },
  { id: 2, name: "White Rice",  price: "$4.99",image: img2 },
  { id: 3, name: "Black Rice", price: "$4.99", image: img3 },
  { id: 4, name: "Organic Brown Rice", price: "$4.99", image: img4 },
  { id: 5, name: "Dark Chocolate Bar 35%", price: "$4.99", image: img5 },
  { id: 6, name: "Milk Chocolate Bar 35%", price: "$4.99", image: img6 },
  { id: 7, name: "Spaghetti No. 7", price: "$4.99", image: img7 },
  { id: 8, name: "Orecchiette Shaped Pasta", price: "$4.99", image: img8 },
  { id: 9, name: "Floor Liquid Cleaner", price: "$4.99", image: img9 },
  { id: 10, name: "Fruit Puree Pouch 4 oz.", price: "$4.99", image: img10 },
  { id: 11, name: "Baby Body Powder", price: "$4.99", image: img11 },
  { id: 12, name: "Milk-Based Powder Formula With Iron 29 oz.", price: "$4.99", image: img12 },
  { id: 13, name: "Milk-Based Infant Formula Powder 12.5 oz.", price: "$4.99", image: img13 },
  { id: 14, name: "Size 5 Diapers Super Pack 66 ct.", price: "$4.99", image: img14 },
  { id: 15, name: "Size 2 Diapers Super Pack 66 ct.", price: "$4.99", image: img15 },
  { id: 16, name: "Size 1 Diapers Super Pack 66 ct.", price: "$4.99", image: img16 },
  { id: 17, name: "Unscented Baby Wipes 64 ct.", price: "$4.99", image: img17 },
  { id: 18, name: "Make Up", price: "$4.99", image: img18 },
  { id: 19, name: "Shaving Gel", price: "$4.99", image: img19 },
  { id: 20, name: "Spray Deodorant", price: "$4.99", image: img20 },
  { id: 21, name: "Shower Gel 350 ml.", price: "$4.99", image: img21 },
  { id: 22, name: "Hair Color", price: "$4.99", image: img22 },
  { id: 23, name: "Hand Cream", price: "$4.99", image: img23 },
  { id: 24, name: "Shampoo, Normal Hair 30 oz.", price: "$4.99", image: img24 },
  { id: 25, name: "Shampoo, Rebalancing Clay 30 oz.", price: "$4.99", image: img25 },
  { id: 26, name: "Hand Sanitizer", price: "$4.99", image: img26 },
  { id: 27, name: "Wooden Cutting Board", price: "$4.99", image: img27 },
  { id: 28, name: "Led Light Bulb 12W.", price: "$4.99", image: img28 },
  { id: 29, name: "Fluorescent Light Bulb 26W.", price: "$4.99", image: img29 },
  { id: 30, name: "Glass Bowl", price: "$4.99", image: img30 },
  { id: 31, name: "Wooden Kitchen Utensils", price: "$4.99", image: img31 },
];

return (
    <div className={Allprocss.container}>
         <div className={Allprocss.wrapper}>
      <div className={Allprocss.section12}>
      <div className={Allprocss.section1}>
        <h2>Filter by</h2>
        <hr />

        <div className={Allprocss.header}>
          <span>Category</span>
        </div>

        <div className={Allprocss.list}>
          <label><input type="checkbox" /> Babies</label>
          <label><input type="checkbox" /> Bakery</label>
          <label><input type="checkbox" /> Beer</label>
          <label><input type="checkbox" /> Beverages</label>
          <label><input type="checkbox" /> Cereals</label>
          <label><input type="checkbox"/>Cereals & Snacks</label>
          <label><input type="checkbox"/>Cleaning Supplies</label>
          <label><input type="checkbox"/>Coffee</label>
          <label><input type="checkbox"/>Dairy & Eggs</label>
          <label><input type="checkbox"/>Deals</label>
          <label><input type="checkbox"/>Fish & Seafood</label>
          <label><input type="checkbox"/>Food</label>
          <label><input type="checkbox"/>Fresh Finds</label>
          <label><input type="checkbox"/>Fruit</label>
          <label><input type="checkbox"/>Home & Kitchen</label>
          <label><input type="checkbox"/>Meat & Poultry</label>
          <label><input type="checkbox"/>Most Popular</label>
          <label><input type="checkbox"/>Pastas & Grains</label>
          <label><input type="checkbox"/>Personal Hygiene</label>
          <label><input type="checkbox"/>Soft Drinks</label>
          <label><input type="checkbox"/>Start Your Cart</label>
          <label><input type="checkbox"/>Tea</label>
          <label><input type="checkbox"/>Vegetables</label>
          <label><input type="checkbox"/>Wine</label>

             <div className={Allprocss.priceContainer}>
      <div className={Allprocss.priceHeader}>
        <h3>Price</h3>
        <span>—</span>
      </div>

      <input
        type="range"
        min="2"
        max="27"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="slider"
      />

      <div className={Allprocss.priceValues}>
        <span>$2</span>
        <span>${price}</span>
      </div>
    </div>
          

        </div>
      </div>
      <div className={Allprocss.section2}>
        
        <p className={Allprocss.count}>123 products</p>

                  <div className={Allprocss.grid}>
  {products.map((product) => (
    <div key={product.id} className={Allprocss.card}>
      
      {product.badge && (
        <span className={Allprocss.badge}>
          {product.badge}
        </span>
      )}

      <img src={product.image} alt={product.name} />

      <p className={Allprocss.title}>
        {product.name}
      </p>

      {product.price && (
        <p className={Allprocss.price}>
          {product.price}
        </p>
      )}

      <div className={Allprocss.qtyBox}>
        <span>-</span>
        <span>1</span>
        <span>+</span>
        
      </div>
      <Button2/>
    </div>
  ))}
</div>




      </div>
      </div>
      </div>
    </div>
  );
};

export default  AllproductFirst;