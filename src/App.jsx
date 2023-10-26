import React, { useState } from "react";
import Productcard from "./Productcard";
import "./App.css";

function App() {
  const data = [
    {
      productImage:
        "https://www.skechers.in/on/demandware.static/-/Sites-skechers_india/default/dw17940ed5/images/large/195969748763-1.jpg",
      productName: "Popular Item",
      productPrice: "30.00 - 65.00",
    },
    {
      productImage:
        "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0Y2h8ZW58MHx8MHx8fDA%3D",
      productName: "Fancy item",
      productPrice: "$75.00 - 85.00",
    },
    {
      productImage:
        "https://media.istockphoto.com/id/476801528/photo/black-foading-thumb-drive-with-clipping-path.webp?b=1&s=170667a&w=0&k=20&c=Vs989YV17tRdQIPokZeMfaqpp2BSxWnbh0ocxnYU0UQ=",
      productName: "Popular Item",
      productPrice: "75.00 - 85.00",
    },
    {
      productImage:
        "https://images.unsplash.com/photo-1587145820098-23e484e69816?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlbmRyaXZlfGVufDB8fDB8fHww",
      productName: "Special Item",
      productPrice: "$60.00",
    },
    {
      productImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQQH_Yymcmx0DCEKUHX7QFsoOkgUOfwICaaQ&usqp=CAU",
      productName: "Sale Item",
      productPrice: "75.00- 85.00",
    },
    {
      productImage:
        "https://plus.unsplash.com/premium_photo-1683141486694-4aa9d60803b6?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      productName: "Expensive Item",
      productPrice: "130.00 - 185.00",
    },
    {
      productImage:
        "https://media.istockphoto.com/id/1185463126/photo/blank-promotional-wireless-earbuds-with-box-package-3d-render-illustration.webp?b=1&s=170667a&w=0&k=20&c=2LnkAfoh7ZQ0GQK9lpUmjcDZtnUrvPcXu8bGWCt9Gr0=",
      productName: "Branded Item",
      productPrice: "$75.00 - 85.00",
    },
    {
      productImage:
        "https://media.istockphoto.com/id/1097427238/photo/blank-wireless-bluetooth-earphone-or-earbud-or-headphone-3d-render-illustration.webp?b=1&s=170667a&w=0&k=20&c=mA2qPechx9iHWA_NOPEBg_3vAA6MCNVEtiYrArxxJP0=",
      productName: "Popular Item",
      productPrice: "19.00",
    },
  ];
  const [product] = useState(data);
  const [cartCount, setCartCount] = useState(0);

  const increaseCount = () => {
    setCartCount(cartCount + 1);
  };

  const decreaseCount = () => {
    if (cartCount > 0) {
      setCartCount(cartCount - 1);
    }
  };

  return (
    <div className="app">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Start Bootstrap
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                Shop
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">
                  All Products
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Popular Items
                </a>
                <a className="dropdown-item" href="#">
                  New Arrivals
                </a>
              </div>
            </li>
          </ul>
          <div className="cart-comp">
            <h2>Cart {cartCount}</h2>
          </div>
        </div>
      </nav>
      <div className="title">
        <a>Shop In Style</a>
      </div>
      <div className="cart-area">
        {product.map((product, index) => (
          <Productcard
            key={index}
            index={index}
            productImage={product.productImage}
            productName={product.productName}
            productPrice={product.productPrice}
            increaseCount={increaseCount}
            decreaseCount={decreaseCount}
          />
        ))}
      </div>
      <div className="footer">
        <h6>Copyright C Your Website 2023</h6>
      </div>
    </div>
  );
}

export default App;
