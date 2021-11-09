// eslint-disable
import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/home.js";
import Shop from "./components/shop.js";
import Admin from "./components/admin.js";
import Rates from "./components/rates.js";
import AddCustomer from "./components/addCustomer.js";
import AddShopkeeper from "./components/addShopKeeper.js";
import AddFunds from "./components/addFunds";

import "./App.css";

import Web3 from "web3";

import subsidy from "./abis/contracts/subsidy.json";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: ["rates_BPL", "rates_APL", "rates_REFUGEE"],
      currentAccount: "",
      account: "",
      AbiAndAdd: {
        abi: "",
        add: "",
      },
      web3: null,
      verified_user: false,
      admin: false,
      category: "",
    };
  }

  async componentWillMount() {
    await this.loadWeb3();
    await this.loadBlockchainData();
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum); //new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));   //
      window.web3.eth.handleRevert = true;

      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert("MetaMask not detected");
    }
  }

  async loadBlockchainData() {
    // console.log("loading....");
    try {
      const web3 = window.web3;
      this.setState({ web3: web3 });
      const accounts = await web3.eth.getCoinbase();

      this.setState({
        currentAccount: accounts,
      });

      const networkId = await web3.eth.net.getId();
      const networkData = subsidy.networks[networkId];
      // console.log(networkData);
      console.log("current_account:" + this.state.currentAccount);
      if (networkData) {
        const Subsidy = new web3.eth.Contract(subsidy.abi, networkData.address);
        // console.log(Subsidy);
        this.setState({
          AbiAndAdd: {
            abi: subsidy.abi,
            add: networkData.address,
          },
        });

        var isUser = await Subsidy.methods
          .isUser(this.state.currentAccount)
          .call();
        var isAdmin = await Subsidy.methods
          .isAdmin(this.state.currentAccount)
          .call();

        if (isUser) {
          await this.setState({ verified_user: true });
        } else if (isAdmin) {
          await this.setState({ admin: true });
        }

        // console.log(this.state);
        if (isUser) {
          console.log("Verified User");
          let cat = await Subsidy.methods
            .showCcatergory(this.state.currentAccount)
            .call();
          await this.setState({ category: this.state.categories[cat] });
          console.log(this.state.category);
        } else if (isAdmin) {
          // console.log("Admin");
        } else {
          window.alert("Unverified User");
        }
        // console.log(this.state.verified_user, this.state.admin);
      } else {
        window.alert("Cannot find the contract on selected  network.");
      }
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/home"
              component={() => (
                <Home
                  verified_user={this.state.verified_user}
                  admin={this.state.admin}
                  account={this.state.currentAccount}
                />
              )}
            />
            <Route
              exact
              path="/shop"
              component={() => (
                <Shop
                  category={this.state.category}
                  verified_user={this.state.verified_user}
                  admin={this.state.admin}
                  web3={this.state.web3}
                  AbiAndAdd={this.state.AbiAndAdd}
                  account={this.state.currentAccount}
                />
              )}
            />
            <Route
              exact
              path="/admin"
              component={() => (
                <Admin
                  // verified_user={this.state.verified_user}
                  admin={this.state.admin}
                  web3={this.state.web3}
                  AbiAndAdd={this.state.AbiAndAdd}
                  account={this.state.currentAccount}
                />
              )}
            />
            <Route
              exact
              path="/rates"
              component={() => (
                <Rates
                  category={this.state.category}
                  verified_user={this.state.verified_user}
                  admin={this.state.admin}
                  account={this.state.currentAccount}
                />
              )}
            />
            <Route
              exact
              path="/add-shopkeeper"
              component={() => (
                <AddShopkeeper
                  admin={this.state.admin}
                  web3={this.state.web3}
                  AbiAndAdd={this.state.AbiAndAdd}
                  account={this.state.currentAccount}
                />
              )}
            />
            <Route
              exact
              path="/add-customer"
              component={() => (
                <AddCustomer
                  admin={this.state.admin}
                  web3={this.state.web3}
                  AbiAndAdd={this.state.AbiAndAdd}
                  account={this.state.currentAccount}
                />
              )}
            />
            <Route
              exact
              path="/add-Funds"
              component={() => (
                <AddFunds
                  admin={this.state.admin}
                  web3={this.state.web3}
                  AbiAndAdd={this.state.AbiAndAdd}
                  account={this.state.currentAccount}
                />
              )}
            />

            <Redirect to="/home" />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
