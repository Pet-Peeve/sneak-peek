import React from "react";

export default function CartItem({ item, value }) {
  const { id, img, title, price, total, count } = item;
  const { increment, decrement, removeItem } = value;

  return (
    <div className="row my-2 text-capitalize text-center">
      {/* image */}
      <div className="col-10 mx-auto col-lg-2">
        <img
          src={img}
          alt="image wont load"
          style={{ width: "5rem", height: "5rem" }}
          className="img-fluid"
        />
      </div>
      {/* title */}
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">product : </span>
        {title}
      </div>
      {/* price */}
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">price : </span>
        {price}
      </div>
      {/* buttons */}
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <span className="btn btn-black mt-1" onClick={() => decrement(id)}>
            -
          </span>
          <span className="btn btn-black mx-1">{count}</span>
          <span className="btn btn-black mt-1" onClick={() => increment(id)}>
            +
          </span>
        </div>
      </div>
      {/* remove */}
      <div className="col-10 mx-auto col-lg-2">
        <div className="cart-icon" onClick={() => removeItem(id)}>
          <i className="fas fa-trash"></i>
        </div>
      </div>
      {/* total */}
      <div className="col-10 mx-auto col-lg-2">
        <strong> item total : R {total}</strong>
      </div>
    </div>
  );
}
