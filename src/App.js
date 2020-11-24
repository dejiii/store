// import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
// import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/details" component={Details} exact />
        <Route path="/product" component={ProductList} exact />
        <Route path="/cart" component={Cart} exact />
        <Route path="/" component={ProductList} exact />
        <Route component={Default} />
      </Switch>
    </>
  );
}

export default App;
