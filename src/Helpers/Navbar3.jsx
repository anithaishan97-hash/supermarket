import React, { useState } from "react";
import navcss from '../Helpers/Navbar3.module.css'
import { Link } from 'react-router-dom'

const menuItems = {
  Food: [
    "Vegetables",
    "Fruit",
    "Meat & Poultry",
    "Fish & Seafood",
    "Bakery",
  ],
  Beverages: ["Coffee", "Tea", "Juice", "Soft Drinks"],
  Household: ["Cleaning", "Laundry", "Kitchen", "Storage"],
  "Personal Care": ["Soap", "Shampoo", "Skincare", "Hair Care"],
};

function Navbar3() {
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <nav className={navcss.navbar}>
      <ul className={navcss.navLinks}>
        <Link to='/Deals'>
        <li>Deals</li>
        </Link>

        {Object.keys(menuItems).map((item) => (
          <li
            key={item}
            className={navcss.dropdown}
            onMouseEnter={() => setActiveMenu(item)}
            onMouseLeave={() => setActiveMenu(null)}
          >
            {item}

            {activeMenu === item && (
              <ul className={navcss.dropdownMenu}>
                {menuItems[item].map((subItem, index) => (
                  <li key={index}>{subItem}</li>
                ))}
              </ul>
            )}
          </li>
        ))}

        
         <Link to='/'>
        <li className={navcss.orders}>My Orders</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar3;