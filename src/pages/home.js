import React, { useEffect } from "react";
import { connect } from "react-redux";
import ProductItem from "../components/productItem";
import CartSidebar from "../cartSideBar";
import { Card, Col } from "react-bootstrap";
import Banner from "../components/assets/Banner.jpg";

const Home = ({ getProducts, products }) => {
  useEffect(() => {
    if (!products?.length) {
      getProducts();
    }
  }, []);
  return (
    <>
      <div className="col-7">
        {" "}
        <Card>
          <Card.Img variant="top" src={Banner} />
        </Card>
        {products.map((item, i) => (
          <ProductItem key={i} item={item} />
        ))}
      </div>
      <Col md="3">
        <CartSidebar />{" "}
      </Col>
    </>
  );
};

const MapDispatchToProps = (dispatch) => ({
  getProducts: () => dispatch({ type: "ADD_TO_PRODUCT_START" }),
});

const mapStateToProps = (state) => ({
  products: state.products,
});

export default connect(mapStateToProps, MapDispatchToProps)(Home);
