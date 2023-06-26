import React from "react";
import pizza from "../../assets/pizza.png";
import "./pizza.css";
import sushi from "../../assets/sushi (2).png"
const Pizza = () => {
  return (
    <>
      <div className="foody-app_pizza container ">
        <div className="foody-app_pizza">
          <img src={pizza}  alt="pizza" />
        </div>
        <div className="foody-app_pizza">
          
          <p>
          <strong>Pizza</strong>
            Welcome to URAQ Restaurant - Home of Delicious Pizzas! At URAQ
            Restaurant, we take pride in serving mouthwatering pizzas that are
            sure to satisfy your cravings. Our pizzas are crafted with love,
            using only the finest ingredients and traditional recipes that have
            been perfected over time. Whether you're a fan of classic flavors or
            adventurous combinations, we have something to delight every pizza
            lover's palate. Hand-Tossed Perfection: Each pizza at URAQ is
            hand-tossed to perfection, creating a light and airy crust that is
            both crispy and chewy.<br/>
             <br/>Our talented chefs pay attention to every
            detail, ensuring that each pizza is made with precision and care.
            From the first bite to the last, you'll experience the deliciousness
            that comes from our dedication to quality. Irresistible Toppings:
            Our menu boasts an array of tantalizing toppings that will take your
            pizza experience to the next level. From the traditional favorites
            like pepperoni, mushrooms,<br/> <br/> and olives to unique options like grilled
            chicken, artichokes, and sun-dried tomatoes, there's something to
            suit every taste bud. 
          </p>
        </div>
      </div>


      <div className="foody-app_sushi container d-flex justify-content-center align-items-center  ">
        
        <div className="foody-app_sushi"> 
        <p>
        <strong>California Roll Gimbap Sushi  </strong>
            Welcome to URAQ Restaurant - Home of Delicious Pizzas! At URAQ
            Restaurant, we take pride in serving mouthwatering pizzas that are
            sure to satisfy your cravings. Our pizzas are crafted with love,
            using only the finest ingredients and traditional recipes that have
            been perfected over time. Whether you're a fan of classic flavors or
            adventurous combinations, we have something to delight every pizza
            lover's palate. Hand-Tossed Perfection: Each pizza at URAQ is
            hand-tossed to perfection, creating a light and airy crust that is
            both crispy and chewy.<br/>
             <br/>Our talented chefs pay attention to every
            detail, ensuring that each pizza is made with precision and care.
            From the first bite to the last, you'll experience the deliciousness
            that comes from our dedication to quality. Irresistible Toppings:
            Our menu boasts an array of tantalizing toppings that will take your
            pizza experience to the next level. From the traditional favorites
            like pepperoni, mushrooms,<br/> <br/> and olives to unique options like grilled
            chicken, artichokes, and sun-dried tomatoes, there's something to
            suit every taste bud. 
          </p>
        </div>
        <div className="foody-app_sushi">
          <img src={sushi} alt="pizza" />
        </div>
      </div>
      
      
    </>
  );
};

export default Pizza;
