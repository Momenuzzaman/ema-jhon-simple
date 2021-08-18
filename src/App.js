import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import Review from './Components/Review/Review';
import Inventory from './Components/Inventory/Inventory';
import ProductDetail from './Components/ProductDetail/ProductDetail';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Switch>
          <Route path="/shop">
             <Shop></Shop>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route path="/manage">
            <Inventory></Inventory>
          </Route>
          <Route path="/product/:productKey">
            <ProductDetail></ProductDetail>

          </Route>
        </Switch>
      </Router>
     
     
    </div>
  )
}

export default App;
