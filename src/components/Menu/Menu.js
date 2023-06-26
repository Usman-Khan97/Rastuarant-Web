import React, { useState } from "react";
import "./menu.css";
import card1 from "../../assets/card1 (1).png";
import card2 from "../../assets/card1 (2).png";
import card3 from "../../assets/card1 (3).png";
import card4 from "../../assets/card1 (4).png";
import card5 from "../../assets/card1 (5).png";
import card6 from "../../assets/card1 (6).png";
import { FaRegStar, FaPlusSquare } from "react-icons/fa";

const Menu = (props) => {
  const cardsData = [
    {
      Id: 0,
      img: card1,
      rating: 4.5,
      title: "Chicken Noodles",
      calories: 60,
      category: "breakfast",
      name: "Non-Veg",
      person: 2,
      price: 379,
    },
    {
      Id: 1,
      img: card2,
      rating: 5,
      calories: 40,
      category: "breakfast",
      title: "Bred Boiled egg",
      name: "Non-Veg",
      person: 1,
      price: 99,
    },
    {
      Id: 2,
      img: card3,
      rating: 4.5,
      category: "dinner",
      calories: 50,
      title: "Chicken Noodles",
      name: "Non-Veg",
      person: 1,
      price: 119,
    },
    {
      Id: 3,
      img: card4,
      rating: 4.5,
      calories: 80,
      category: "dinner",
      title: "Chicken Noodles",
      name: "Non-Veg",
      person: 2,
      price: 499,
    },
    {
      Id: 4,
      img: card5,
      rating: 4.5,
      calories: 20,
      category: "lunch",
      title: "Chicken Noodles",
      name: "Non-Veg",
      person: 1,
      price: 79,
    },
    {
      Id: 5,
      img: card6,
      rating: 4.5,
      calories: 100,
      category: "lunch",
      title: "Chicken Noodles",
      name: "Non-Veg",
      person: 3,
      price: 239,
    },
    // Add more card objects here...
  ];
  const [items, setItems] = useState(cardsData);

  const filterItems = (categItem) => {
    const updatedItems = cardsData.filter((currElem) => {
      return currElem.category === categItem;
    });
    setItems(updatedItems);
  };

  return (
    <>
      <div id="Menu" className="container">
        <div className="foody-app_menu-content d-flex flex-column justify-content-center align-items-center">
          <p>OUR MENU</p>
          <h1>
            Wake Up Early,
            <br /> Eat Fresh 🥗 Healthy
          </h1>
        </div>

        <div className="foody-app_menu d-flex justify-content-center align-items-center gap-3">
          <p onClick={() => setItems(cardsData)}>All</p>
          <p onClick={() => filterItems("breakfast")}>Breakfast</p>
          <p onClick={() => filterItems("lunch")}>Lunch</p>
          <p onClick={() => filterItems("dinner")}>Dinner</p>
        </div>

        <div className="foody-app_menus">
          {items.map((x) => (
            <div className="d-flex" key={x.Id}>
              <div className="foody-app_menu-cards" >
                <img src={x.img} alt="card" />
                <div className="foody-app-menu-items d-flex flex-column justify-content-center align-items-center">
                  <p>
                    {x.rating}{" "}
                    <span>
                      {" "}
                      <FaRegStar />{" "}
                    </span>
                  </p>
                  <h4 className="fw-bold">{x.title}</h4>
                  <p className="content pt-3">{x.calories} Calories</p>
                  <div className="type">
                    <p>Type</p>
                    <p>Person</p>
                  </div>
                  <div className="type1">
                    <p>{x.name}</p>
                    <p>{x.person}</p>
                  </div>
                  <div className="price">
                    <h4>Rs. {x.price}</h4>
                    <p>
                     <FaPlusSquare onClick={props.onClick} /> 
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Menu;
