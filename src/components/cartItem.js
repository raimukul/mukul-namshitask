import React from "react";
import { connect } from "react-redux";

const CartItem = ({ item, addItem, removeItem }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <div className="p-2">
        <h6 style={{ fontSize: "0.8rem" }}>{item.title}</h6>
        <p>${item.price}</p>
      </div>
      <div>
        <div style={{ display: "flex" }}>
          <button className="btn border mx-2" onClick={() => removeItem(item)}>
            -
          </button>
          <h3>{item.quantity}</h3>
          <button className="btn border mx-2" onClick={() => addItem(item)}>
            +
          </button>
        </div>
        <p>
          <b>${item.price * item.quantity}</b>
        </p>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch({ type: "REMOVE_TO_CART", payload: item }),
  addItem: (item) => dispatch({ type: "ADD_TO_CART", payload: item }),
});
export default connect(null, mapDispatchToProps)(CartItem);
