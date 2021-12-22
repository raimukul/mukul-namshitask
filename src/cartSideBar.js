import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "./components/cartItem";

const CartSidebar = ({ cartItems, clearItems }) => {
  let total = 0;
  let totalItems = 0;
  return (
    <div>
      <div
        className="p-3 pb-0 d-flex"
        style={{ justifyContent: "space-between" }}
      >
        <h5 className="d-inline">My cart </h5>
        <button className="btn border" onClick={() => clearItems()}>
          {" "}
          Clear
        </button>
      </div>
      <hr />
      {cartItems.length ? (
        <>
          {cartItems.map((item, i) => {
            total += item.quantity * item.price;
            totalItems += item.quantity;
            return <CartItem item={item} key={i} />;
          })}
          <hr />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h5 className="py-2">
              Item Total <sub>({totalItems})</sub>
            </h5>
            <p>${total}</p>
          </div>
          <Link to="/cart" className="btn btn-warning w-100 py-2 text-white">
            Check Out
          </Link>
        </>
      ) : (
        <div
          className="w-100 d-flex text-center"
          style={{
            justifyContent: "center",
            minHeight: "60vh",
            flexDirection: "column",
            backgroundImage:
              "src(https://www.pngplay.com/wp-content/uploads/7/Cart-Transparent-Free-PNG.png)",
          }}
        >
          <img
            src="https://www.pngplay.com/wp-content/uploads/7/Cart-Transparent-Free-PNG.png"
            alt="..."
          />
          <h3 className="display-6">Your Cart is Empty</h3>
        </div>
      )}
    </div>
  );
};
const mapStatToProps = (state) => ({
  cartItems: state.cart,
});
export default connect(mapStatToProps, (dispatch) => ({
  clearItems: () => dispatch({ type: "CLARE_CART" }),
}))(CartSidebar);
