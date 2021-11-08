import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "../component_css/home.css";
import Header from "./header";
import Footer from "./footer";
import Cards from "./cards";

class Home extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props);
  }

  render() {
    return (
      <div>
        <Header
          admin={this.props.admin}
          verified_user={this.props.verified_user}
          account={this.props.account}
          activeSection="home"
        />
        <Cards />
        <Footer />
      </div>
    );
  }
}

export default Home;
