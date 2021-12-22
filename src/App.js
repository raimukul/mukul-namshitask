import { Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/navbar";
import Cart from "./components/cart";
import Header from "./components/header";
import "./App.css";
import { Col, Row } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <div className="container-fluid">
          <Row>
            <Col md="2">
              <Navbar />
            </Col>
            <Route exact path="/" component={Home} />
            <Route path="/cart" component={Cart} />
          </Row>
        </div>
      </Switch>
    </div>
  );
}

export default App;
