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
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route path="/" component={ProductList} />
        <Route component={Default} />
      </Switch>
    </>
  );
}

export default App;