import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import { isAuthenticated } from "./repository";
import Customer from "./Components/Customer";
import FoodMenu from "./Components/FoodMenu";
import Checkout from "./Components/Checkout";
import Payment from "./Components/Payment";
import OrderSummary from "./Components/OrderSummary";

export default class App extends Component {

  state = {
    loggedIn: false
  }

  loginHandle = () => {
    this.setState(prevState => ({
      loggedIn: !prevState.loggedIn
    }))
  }

  logout() {
    localStorage.removeItem('username');
  }


  render() {
    const auth = isAuthenticated();
    return (
      <div className="container">
        <Router>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/'} className="navbar-brand">Food Box</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  {auth ?
                    <Link to={'/customer'} className="nav-link">Order History</Link> : null}
                </li>
                <li>
                  {auth ?
                    <Link to="/">
                    <a onClick={this.logout} className="btn btn-secondary">Log Out</a>
                    </Link>:<Link to={'/login'} className="btn btn-secondary">Login</Link>}
                </li>
              </ul>
            </div>
          </nav> <br />

          <div>
            <Route path='/' exact render={Home} />
            <Route path='/home' render={Home} />
            <Route path='/customer' component={Customer} />
            <Route path='/login' component={Login} />
            <Route path='/foodmenu' component={FoodMenu} />
            <Route path='/checkout' component={Checkout} />
            <Route path='/payment' component={Payment} />
            <Route path='/ordersummary' component={OrderSummary} />

          </div>
        </Router>
      </div>
    );
  }

}

