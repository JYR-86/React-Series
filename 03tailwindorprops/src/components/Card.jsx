import React from "react";
import "../App.css";

function Card() {
  return (
    <>
      <div>
        <img
          class="w-10"
          src="https://images.pexels.com/photos/17363224/pexels-photo-17363224/free-photo-of-mountain-in-snow.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Laptop"
        />
        <div>
          <h1>About Macbook</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            debitis?
          </p>
          <button type="button">Read</button>
        </div>
      </div>
    </>
  );
}

export default Card;
