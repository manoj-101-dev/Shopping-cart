import { useState } from "react";
import "./Productcard";

function Productcard({
  productImage,
  productName,
  productPrice,
  increaseCount,
  decreaseCount,
  index,
}) {
  const [show, setShow] = useState(true);
  const formatPrice = index === 1 || index === 3 || index === 6;
  const isSaleCard = [1, 3, 6, 7].includes(index);

  const handleAdd = () => {
    setShow(false);
    increaseCount();
  };

  const handleRemove = () => {
    setShow(true);
    decreaseCount();
  };

  return (
    <div className="card-component">
      {isSaleCard && (
        <h5 className="sale-badge">
          <span className="badge badge-dark">Sale</span>
        </h5>
      )}
      <img src={productImage} alt={productName} />
      <h3 className="product-name">{productName}</h3>
      {formatPrice ? (
        <div className="price">
          <span className="original-price">{productPrice}</span>
          <span className="discounted-price">$40</span>
        </div>
      ) : (
        <div className="price">
          <span className="single-price">${productPrice}</span>
        </div>
      )}
      {show ? (
        <button onClick={handleAdd}>Add to cart</button>
      ) : (
        <button onClick={handleRemove}>Remove from cart</button>
      )}
    </div>
  );
}

export default Productcard;
