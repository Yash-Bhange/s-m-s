import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect, Link } from "react-router-dom";
import "../component_css/header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.activeSection);
    console.log(this.props);
  }

  componentDidMount() {
    switch (this.props.activeSection) {
      case "home":
        document.getElementById("homeBar").className = "active";
        break;
      case "shop":
        document.getElementById("shopBar").className = "active";
        break;
      case "admin":
        document.getElementById("adminBar").className = "active";
        break;
      case "rates":
        document.getElementById("rateBar").className = "active";
        break;
      case "admin":
        document.getElementById("adminBar").className = "active";
        break;
    }
  }

  render() {
    if (this.props.verified_user) {
      return (
        <div>
          <ul class="header">
            <li>
              <Link id="homeBar" to="/home">
                {" "}
                <i class="fa fa-home"></i> Home
              </Link>
            </li>
            <li>
              <Link to="/shop" id="shopBar">
                <i class="fa fa-shopping-cart"></i> Shop
              </Link>
            </li>
            <li>
              <Link to="/rates" id="rateBar">
                <i class="fa fa-percent"></i>Info
              </Link>
            </li>
            <li>
              <Link to="/contact" id="aboutBar">
                Transactions
              </Link>
            </li>
            <li class="right">
              <Link id="adminBar">
                <i class="fa fa-user-check"></i>
                {this.props.account}
              </Link>
            </li>
          </ul>
        </div>
      );
    } else if (this.props.admin) {
      return (
        <div>
          <ul class="header">
            <li>
              <Link id="homeBar" to="/home">
                {" "}
                <i class="fa fa-home"></i> Home
              </Link>
            </li>
            <li>
              <Link to="/shop" id="shopBar">
                <i class="fa fa-shopping-cart"></i> Shop
              </Link>
            </li>
            <li>
              <Link to="/rates" id="rateBar">
                <i class="fa fa-percent"></i>Info
              </Link>
            </li>
            <li>
              <Link to="/contact" id="aboutBar">
                Transactions
              </Link>
            </li>
            <li class="right">
              <Link to="/admin" id="adminBar">
                <i class="fa fa-unlock"></i> Admin
              </Link>
            </li>
          </ul>
        </div>
      );
    } else {
      return (
        <div>
          <ul class="header">
            <li>
              <Link id="homeBar" to="/home">
                {" "}
                <i class="fa fa-home"></i> Home
              </Link>
            </li>
            <li>
              <Link to="/shop" id="shopBar">
                <i class="fa fa-shopping-cart"></i> Shop
              </Link>
            </li>
            <li>
              <Link to="/rates" id="rateBar">
                <i class="fa fa-percent"></i>Info
              </Link>
            </li>
            <li>
              <Link to="/contact" id="aboutBar">
                Transactions
              </Link>
            </li>
            <li class="right">
              <Link id="adminBar">
                <i class="fa fa-user-slash"></i>Unverified
              </Link>
            </li>
          </ul>
        </div>
      );
    }
  }
}

export default Header;