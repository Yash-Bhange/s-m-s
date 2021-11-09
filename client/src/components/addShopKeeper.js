import React, { Component } from "react";
import "../component_css/addShopKeeper.css";
import Header from "./header.js";
import db from "../helper/firebase.js";
import { collection, addDoc } from "firebase/firestore";
import Web3 from "web3";

class AddShopkeeper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shopKeeperAddress: null,
      name: null,
      location: null,
    };
    this.shopKeeperNameHandler = this.shopKeeperNameHandler.bind(this);
    this.shopKeeperLocationHandler = this.shopKeeperLocationHandler.bind(this);
    this.shopKeeperIdhandler = this.shopKeeperIdhandler.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  shopKeeperIdhandler(event) {
    event.preventDefault();
    this.setState({
      shopKeeperAddress: event.target.value,
    });
  }
  shopKeeperNameHandler(event) {
    event.preventDefault();
    this.setState({
      name: event.target.value,
    });
  }
  shopKeeperLocationHandler(event) {
    event.preventDefault();
    this.setState({
      location: event.target.value,
    });
  }

  async onSubmit() {
    //creating contract instance
    const Subsidy = new window.web3.eth.Contract(
      this.props.AbiAndAdd.abi,
      this.props.AbiAndAdd.add
    );
    console.log(Subsidy);
    console.log(this.props.account, this.state.name);
    await Subsidy.methods
      .addShopkeeper(this.state.shopKeeperAddress, this.state.name)
      .send({ from: this.props.account }, (err, hash) => {
        if (err) {
          alert("Not a Admin");
        } else {
          alert("SuccesS !");
        }
      });
  }

  render() {
    return (
      <div>
        <div>
          <Header activeSection="admin" admin={this.props.admin} />
          <br></br>
          <br></br>
          <br></br>

          <div className="form-group" id="shopKeeperIdSection">
            <input
              id="shopKeeperId"
              onChange={this.shopKeeperNameHandler}
              type="text"
              value={this.state.name}
              className="form-control"
              placeholder="Enter ShopKeeper's Name"
            />
            <br></br>
            <input
              id="shopKeeperId"
              onChange={this.shopKeeperLocationHandler}
              type="text"
              value={this.state.location}
              className="form-control"
              placeholder="Enter ShopKeeper's Location"
            />{" "}
            <br></br>
            <input
              id="shopKeeperId"
              onChange={this.shopKeeperIdhandler}
              type="text"
              value={this.state.shopKeeperAddress}
              className="form-control"
              placeholder="Enter ShopKeeper's Blockchain ID"
            />{" "}
            <br></br>
          </div>
          <br></br>

          <div id="addShopKeeperButtonSection">
            <button
              onClick={this.onSubmit}
              className="btn  btn-block"
              id="addShopKeeperButton"
            >
              Submit{" "}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default AddShopkeeper;
