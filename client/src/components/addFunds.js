import React, { Component } from "react";
import "../component_css/addFunds.css";
import Header from "./header.js";
import db from "../helper/firebase.js";
import { collection, addDoc } from "firebase/firestore";
import Web3 from "web3";

class AddFunds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: Number,
    };
    console.log(this.state.amount);

    this.amountHandler = this.amountHandler.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  amountHandler(event) {
    event.preventDefault();
    this.setState({
      amount: event.target.value,
    });
    console.log(this.state.amount);
  }

  async onSubmit() {
    //creating contract instance
    if (isNaN(this.state.amount)) {
      alert("Enter a valid Number");
    } else {
      const Subsidy = new window.web3.eth.Contract(
        this.props.AbiAndAdd.abi,
        this.props.AbiAndAdd.add
      );
      console.log(this.props.account, this.state.name);
      await Subsidy.methods.addFunds().send(
        {
          from: this.props.account,
          value: Web3.utils.toWei(this.state.amount, "ether"),
        },
        (err, hash) => {
          if (err) {
            alert("Not Success");
          } else {
            alert("Successful!");
          }
        }
      );
    }
  }

  render() {
    return (
      <div>
        <div>
          <Header activeSection="admin" admin={this.props.admin} />
          <br></br>
          <br></br>
          <br></br>

          <div className="form-group" id="amount">
            <input
              id="amount"
              onChange={this.amountHandler}
              type="text"
              value={this.state.amount}
              className="form-control"
              placeholder="Enter amount in ETH"
            />
            <br></br>
          </div>
          <br></br>

          <div id="addAmountSection">
            <button onClick={this.onSubmit} id="addAmountButton">
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default AddFunds;
