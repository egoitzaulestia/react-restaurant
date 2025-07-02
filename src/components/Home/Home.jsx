import React from "react";

const Home = ({ dishes }) => {
  return (
    <main className="home">
      <h2>Menu</h2>
      <ul className="dish-list">
        {dishes.map((dish) => (
          <li key={dish.id} className="dish-item">
            <h3>{dish.name}</h3>
            <p>{dish.description}</p>
            <span className="price">{dish.price.toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Home;
