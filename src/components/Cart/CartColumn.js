import React from "react";

export default function CartColumn() {
  return (
    <div className="container-fluid text-center d-none d-lg-block">
      <div className="row">
        {/* products */}
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">products</p>
        </div>

        {/* name of product */}
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">name of product</p>
        </div>

        {/* price */}
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">price</p>
        </div>

        {/* quantity */}
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">quantity</p>
        </div>

        {/* remove */}
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">remove</p>
        </div>

        {/* total */}
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">total</p>
        </div>
      </div>
    </div>
  );
}
