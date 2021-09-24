import Header from "./Components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import ProductComponent from "./Components/ProductComponent";
import ProductListing from "./Components/ProductListing";
import ProductDetail from "./Components/ProductDetail";

function App() {
  return (
    <div className="App">

      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/product/:productId" exact component={ProductDetail} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
