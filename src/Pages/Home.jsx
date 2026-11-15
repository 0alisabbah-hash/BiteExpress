import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Home.css";
const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to BiteExpress</h1>
      <p>Fresh, hot meals delivered fast to your doorstep.</p>

      <div className="favorites">
        <h2>Popular Favorites</h2>
        <ul>
          <li>
            <strong>Cheeseburger</strong> Juicy beef patty with melted cheese
          </li>
          <li>
            <strong>Pepperoni Pizza</strong> Loaded with pepperoni
          </li>
          <li>
            <strong>Chicken Wings</strong> Crunchy wings with special sauces
          </li>
        </ul>
      </div>

      <div className="instructions">
        <h2>How to order</h2>
        <ol>
          <li>Browse the menu and pick your items</li>
          <li>Place your order online in seconds</li>
          <li>Track your delivery to your door</li>
        </ol>
      </div>
      <Link to="/menu">
        <button>Order Now</button>
      </Link>
    </div>
  );
};

export default Home;
