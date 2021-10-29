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
      currentAccount: "",
      account: "",
      AbiAndAdd: {
        abi: "",
        add: "",
      },
      web3: null,
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
    console.log("loading....");
    try {
      const web3 = window.web3;
      this.setState({ web3: web3 });
      const accounts = await web3.eth.getCoinbase();

      this.setState({
        currentAccount: accounts,
      });

      const networkId = await web3.eth.net.getId();
      const networkData = subsidy.networks[networkId];
      console.log(networkData);
      console.log("current_account:" + this.state.currentAccount);
      if (networkData) {
        const Subsidy = new web3.eth.Contract(subsidy.abi, networkData.address);
        console.log(Subsidy);
        this.setState({
          AbiAndAdd: {
            abi: subsidy.abi,
            add: networkData.address,
          },
        });
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
            <Route exact path="/home" component={() => <Home />} />
            <Route
              exact
              path="/shop"
              component={() => (
                <Shop
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
                  web3={this.state.web3}
                  AbiAndAdd={this.state.AbiAndAdd}
                  account={this.state.currentAccount}
                />
              )}
            />
            <Route exact path="/rates" component={() => <Rates />} />
            <Route
              exact
              path="/add-shopkeeper"
              component={() => (
                <AddShopkeeper
                  web3={this.state.web3}
                  AbiAndAdd={this.state.AbiAndAdd}
                  account={this.state.currentAccount}
                />
              )}
            />
            <Route
              exact
              path="/add-customer"
              component={() => <AddCustomer />}
            />
            <Route
              exact
              path="/add-Funds"
              component={() => (
                <AddFunds
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
