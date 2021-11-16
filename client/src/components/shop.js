import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "../component_css/shop.css";
import wheatImg from "../static/wheat.jpg";
import riceImg from "../static/rice.jpg";
import sugarImg from "../static/sugar.jpg";
import dalImg from "../static/dal.jpg";
import oilImg from "../static/oil.jpg";
import Header from "./header.js";
import db from "../helper/firebase.js";
import {
  Firestore,
  collection,
  setDoc,
  doc,
  getDocs,
  addDoc,
} from "firebase/firestore";
import Web3 from "web3";

class Shop extends Component {
  constructor(props) {
    super(props);
    //  console.log(this.props);

    this.state = {
      wheatCount: 0,
      riceCount: 0,
      sugarCount: 0,
      dalCount: 0,
      oilCount: 0,
      wheatPrice: 0,
      ricePrice: 0,
      sugarPrice: 0,
      dalPrice: 0,
      oilPrice: 0,
      wheatPriceFirebase: 0,
      ricePriceFirebase: 0,
      sugarPriceFirebase: 0,
      dalPriceFirebase: 0,
      oilPriceFirebase: 0,
      wheatSubsidy: null,
      riceSubsidy: null,
      oilSubsidy: null,
      sugarSubsidy: null,
      dalSubsidy: null,
      subsized_total_inr: 0,
      subsized_total_eth: 0,
      totalPrice_inr: 0,
      totalPrice_eth: 0,
      shop_address: "",
      category: this.props.category,
    };
    this.minusButton = this.minusButton.bind(this);
    this.plusButton = this.plusButton.bind(this);
    this.increasePrice = this.increasePrice.bind(this);
    this.decreasePrice = this.decreasePrice.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handlePay = this.handlePay.bind(this);
  }

  async componentWillMount() {
    const querySnapshot = await getDocs(collection(db, this.state.category));
    querySnapshot.forEach((doc) => {
      // console.log(doc.id, " => ", doc.data());
      switch (doc.data().item) {
        case "wheat":
          this.setState({
            wheatPriceFirebase: doc.data().valuePerKg,
            wheatSubsidy: doc.data().subsidy,
          });
          break;
        case "rice":
          this.setState({
            ricePriceFirebase: doc.data().valuePerKg,
            riceSubsidy: doc.data().subsidy,
          });
          break;
        case "sugar":
          this.setState({
            sugarPriceFirebase: doc.data().valuePerKg,
            sugarSubsidy: doc.data().subsidy,
          });
          break;
        case "dal":
          this.setState({
            dalPriceFirebase: doc.data().valuePerKg,
            dalSubsidy: doc.data().subsidy,
          });
          break;
        case "oil":
          this.setState({
            oilPriceFirebase: doc.data().valuePerKg,
            oilSubsidy: doc.data().subsidy,
          });
          break;
      }
    });
  }

  async increasePrice(item) {
    switch (item) {
      case "wheat":
        var count = this.state.wheatCount;
        count++;
        await this.setState({
          wheatCount: count,
        });
        this.setState(
          {
            wheatPrice:
              count *
              (this.state.wheatPriceFirebase -
                (this.state.wheatSubsidy / 100) *
                  this.state.wheatPriceFirebase),
          },
          () => {
            this.setState(
              {
                subsized_total_inr:
                  this.state.wheatPrice +
                  this.state.ricePrice +
                  this.state.sugarPrice +
                  this.state.dalPrice +
                  this.state.oilPrice,
                totalPrice_inr:
                  this.state.wheatCount *
                    parseInt(this.state.wheatPriceFirebase) +
                  this.state.riceCount *
                    parseInt(this.state.ricePriceFirebase) +
                  this.state.sugarCount *
                    parseInt(this.state.sugarPriceFirebase) +
                  this.state.dalCount * parseInt(this.state.dalPriceFirebase) +
                  this.state.oilCount * parseInt(this.state.oilPriceFirebase),
              },
              () => {
                this.setState({
                  subsized_total_eth: (
                    this.state.subsized_total_inr * 0.00000461
                  ).toFixed(6),
                  totalPrice_eth: (
                    this.state.totalPrice_inr * 0.00000461
                  ).toFixed(6),
                });
              }
            );
          }
        );
        break;
      case "rice":
        var count = this.state.riceCount;
        count++;
        this.setState({
          riceCount: count,
        });
        this.setState(
          {
            ricePrice:
              count *
              (this.state.ricePriceFirebase -
                (this.state.riceSubsidy / 100) * this.state.ricePriceFirebase),
          },
          () => {
            this.setState(
              {
                subsized_total_inr:
                  this.state.wheatPrice +
                  this.state.ricePrice +
                  this.state.sugarPrice +
                  this.state.dalPrice +
                  this.state.oilPrice,
                totalPrice_inr:
                  this.state.wheatCount *
                    parseInt(this.state.wheatPriceFirebase) +
                  this.state.riceCount *
                    parseInt(this.state.ricePriceFirebase) +
                  this.state.sugarCount *
                    parseInt(this.state.sugarPriceFirebase) +
                  this.state.dalCount * parseInt(this.state.dalPriceFirebase) +
                  this.state.oilCount * parseInt(this.state.oilPriceFirebase),
              },
              () => {
                this.setState({
                  subsized_total_eth: (
                    this.state.subsized_total_inr * 0.00000461
                  ).toFixed(6),
                  totalPrice_eth: (
                    this.state.totalPrice_inr * 0.00000461
                  ).toFixed(6),
                });
              }
            );
          }
        );
        break;
      case "sugar":
        var count = this.state.sugarCount;
        count++;
        this.setState({
          sugarCount: count,
        });
        this.setState(
          {
            sugarPrice:
              count *
              (this.state.sugarPriceFirebase -
                (this.state.sugarSubsidy / 100) *
                  this.state.sugarPriceFirebase),
          },
          () => {
            this.setState(
              {
                subsized_total_inr:
                  this.state.wheatPrice +
                  this.state.ricePrice +
                  this.state.sugarPrice +
                  this.state.dalPrice +
                  this.state.oilPrice,
                totalPrice_inr:
                  this.state.wheatCount *
                    parseInt(this.state.wheatPriceFirebase) +
                  this.state.riceCount *
                    parseInt(this.state.ricePriceFirebase) +
                  this.state.sugarCount *
                    parseInt(this.state.sugarPriceFirebase) +
                  this.state.dalCount * parseInt(this.state.dalPriceFirebase) +
                  this.state.oilCount * parseInt(this.state.oilPriceFirebase),
              },
              () => {
                this.setState({
                  subsized_total_eth: (
                    this.state.subsized_total_inr * 0.00000461
                  ).toFixed(6),
                  totalPrice_eth: (
                    this.state.totalPrice_inr * 0.00000461
                  ).toFixed(6),
                });
              }
            );
          }
        );
        break;
      case "dal":
        var count = this.state.dalCount;
        count++;
        this.setState({
          dalCount: count,
        });
        this.setState(
          {
            dalPrice:
              count *
              (this.state.dalPriceFirebase -
                (this.state.dalSubsidy / 100) * this.state.dalPriceFirebase),
          },
          () => {
            this.setState(
              {
                subsized_total_inr:
                  this.state.wheatPrice +
                  this.state.ricePrice +
                  this.state.sugarPrice +
                  this.state.dalPrice +
                  this.state.oilPrice,
                totalPrice_inr:
                  this.state.wheatCount *
                    parseInt(this.state.wheatPriceFirebase) +
                  this.state.riceCount *
                    parseInt(this.state.ricePriceFirebase) +
                  this.state.sugarCount *
                    parseInt(this.state.sugarPriceFirebase) +
                  this.state.dalCount * parseInt(this.state.dalPriceFirebase) +
                  this.state.oilCount * parseInt(this.state.oilPriceFirebase),
              },
              () => {
                this.setState({
                  subsized_total_eth: (
                    this.state.subsized_total_inr * 0.00000461
                  ).toFixed(6),
                  totalPrice_eth: (
                    this.state.totalPrice_inr * 0.00000461
                  ).toFixed(6),
                });
              }
            );
          }
        );
        break;
      case "oil":
        var count = this.state.oilCount;
        count++;
        this.setState({
          oilCount: count,
        });
        this.setState(
          {
            oilPrice:
              count *
              (this.state.oilPriceFirebase -
                (this.state.oilSubsidy / 100) * this.state.oilPriceFirebase),
          },
          () => {
            this.setState(
              {
                subsized_total_inr:
                  this.state.wheatPrice +
                  this.state.ricePrice +
                  this.state.sugarPrice +
                  this.state.dalPrice +
                  this.state.oilPrice,
                totalPrice_inr:
                  this.state.wheatCount *
                    parseInt(this.state.wheatPriceFirebase) +
                  this.state.riceCount *
                    parseInt(this.state.ricePriceFirebase) +
                  this.state.sugarCount *
                    parseInt(this.state.sugarPriceFirebase) +
                  this.state.dalCount * parseInt(this.state.dalPriceFirebase) +
                  this.state.oilCount * parseInt(this.state.oilPriceFirebase),
              },
              () => {
                this.setState({
                  subsized_total_eth: (
                    this.state.subsized_total_inr * 0.00000461
                  ).toFixed(6),
                  totalPrice_eth: (
                    this.state.totalPrice_inr * 0.00000461
                  ).toFixed(6),
                });
              }
            );
          }
        );
        break;
    }
  }

  decreasePrice(item) {
    switch (item) {
      case "wheat":
        var count = this.state.wheatCount;
        count--;
        this.setState({
          wheatCount: count,
        });
        this.setState(
          {
            wheatPrice:
              count *
              (this.state.wheatPriceFirebase -
                (this.state.wheatSubsidy / 100) *
                  this.state.wheatPriceFirebase),
          },
          () => {
            this.setState(
              {
                subsized_total_inr:
                  this.state.wheatPrice +
                  this.state.ricePrice +
                  this.state.sugarPrice +
                  this.state.dalPrice +
                  this.state.oilPrice,
                totalPrice_inr:
                  this.state.wheatCount *
                    parseInt(this.state.wheatPriceFirebase) +
                  this.state.riceCount *
                    parseInt(this.state.ricePriceFirebase) +
                  this.state.sugarCount *
                    parseInt(this.state.sugarPriceFirebase) +
                  this.state.dalCount * parseInt(this.state.dalPriceFirebase) +
                  this.state.oilCount * parseInt(this.state.oilPriceFirebase),
              },
              () => {
                this.setState({
                  subsized_total_eth: (
                    this.state.subsized_total_inr * 0.00000461
                  ).toFixed(6),
                  totalPrice_eth: (
                    this.state.totalPrice_inr * 0.00000461
                  ).toFixed(6),
                });
              }
            );
          }
        );
        break;
      case "rice":
        var count = this.state.riceCount;
        count--;
        this.setState({
          riceCount: count,
        });
        this.setState(
          {
            ricePrice:
              count *
              (this.state.ricePriceFirebase -
                (this.state.riceSubsidy / 100) * this.state.ricePriceFirebase),
          },
          () => {
            this.setState(
              {
                subsized_total_inr:
                  this.state.wheatPrice +
                  this.state.ricePrice +
                  this.state.sugarPrice +
                  this.state.dalPrice +
                  this.state.oilPrice,
                totalPrice_inr:
                  this.state.wheatCount *
                    parseInt(this.state.wheatPriceFirebase) +
                  this.state.riceCount *
                    parseInt(this.state.ricePriceFirebase) +
                  this.state.sugarCount *
                    parseInt(this.state.sugarPriceFirebase) +
                  this.state.dalCount * parseInt(this.state.dalPriceFirebase) +
                  this.state.oilCount * parseInt(this.state.oilPriceFirebase),
              },
              () => {
                this.setState({
                  subsized_total_eth: (
                    this.state.subsized_total_inr * 0.00000461
                  ).toFixed(6),
                  totalPrice_eth: (
                    this.state.totalPrice_inr * 0.00000461
                  ).toFixed(6),
                });
              }
            );
          }
        );
        break;
      case "sugar":
        var count = this.state.sugarCount;
        count--;
        this.setState({
          suagrCount: count,
        });
        this.setState(
          {
            sugarPrice:
              count *
              (this.state.sugarPriceFirebase -
                (this.state.sugarSubsidy / 100) *
                  this.state.sugarPriceFirebase),
          },
          () => {
            this.setState(
              {
                subsized_total_inr:
                  this.state.wheatPrice +
                  this.state.ricePrice +
                  this.state.sugarPrice +
                  this.state.dalPrice +
                  this.state.oilPrice,
                totalPrice_inr:
                  this.state.wheatCount *
                    parseInt(this.state.wheatPriceFirebase) +
                  this.state.riceCount *
                    parseInt(this.state.ricePriceFirebase) +
                  this.state.sugarCount *
                    parseInt(this.state.sugarPriceFirebase) +
                  this.state.dalCount * parseInt(this.state.dalPriceFirebase) +
                  this.state.oilCount * parseInt(this.state.oilPriceFirebase),
              },
              () => {
                this.setState({
                  subsized_total_eth: (
                    this.state.subsized_total_inr * 0.00000461
                  ).toFixed(6),
                  totalPrice_eth: (
                    this.state.totalPrice_inr * 0.00000461
                  ).toFixed(6),
                });
              }
            );
          }
        );
        break;
      case "dal":
        var count = this.state.dalCount;
        count--;
        this.setState({
          dalCount: count,
        });
        this.setState(
          {
            dalPrice:
              count *
              (this.state.dalPriceFirebase -
                (this.state.dalSubsidy / 100) * this.state.dalPriceFirebase),
          },
          () => {
            this.setState(
              {
                subsized_total_inr:
                  this.state.wheatPrice +
                  this.state.ricePrice +
                  this.state.sugarPrice +
                  this.state.dalPrice +
                  this.state.oilPrice,
                totalPrice_inr:
                  this.state.wheatCount *
                    parseInt(this.state.wheatPriceFirebase) +
                  this.state.riceCount *
                    parseInt(this.state.ricePriceFirebase) +
                  this.state.sugarCount *
                    parseInt(this.state.sugarPriceFirebase) +
                  this.state.dalCount * parseInt(this.state.dalPriceFirebase) +
                  this.state.oilCount * parseInt(this.state.oilPriceFirebase),
              },
              () => {
                this.setState({
                  subsized_total_eth: (
                    this.state.subsized_total_inr * 0.00000461
                  ).toFixed(6),
                  totalPrice_eth: (
                    this.state.totalPrice_inr * 0.00000461
                  ).toFixed(6),
                });
              }
            );
          }
        );
        break;
      case "oil":
        var count = this.state.oilCount;
        count--;
        this.setState({
          oilCount: count,
        });
        this.setState(
          {
            oilPrice:
              count *
              (this.state.oilPriceFirebase -
                (this.state.oilSubsidy / 100) * this.state.oilPriceFirebase),
          },
          () => {
            this.setState(
              {
                subsized_total_inr:
                  this.state.wheatPrice +
                  this.state.ricePrice +
                  this.state.sugarPrice +
                  this.state.dalPrice +
                  this.state.oilPrice,
                totalPrice_inr:
                  this.state.wheatCount *
                    parseInt(this.state.wheatPriceFirebase) +
                  this.state.riceCount *
                    parseInt(this.state.ricePriceFirebase) +
                  this.state.sugarCount *
                    parseInt(this.state.sugarPriceFirebase) +
                  this.state.dalCount * parseInt(this.state.dalPriceFirebase) +
                  this.state.oilCount * parseInt(this.state.oilPriceFirebase),
              },
              () => {
                this.setState({
                  subsized_total_eth: (
                    this.state.subsized_total_inr * 0.00000461
                  ).toFixed(6),
                  totalPrice_eth: (
                    this.state.totalPrice_inr * 0.00000461
                  ).toFixed(6),
                });
              }
            );
          }
        );
        break;
    }
  }

  minusButton(event) {
    event.preventDefault();
    var item = event.target.name;
    switch (item) {
      case "wheatMinusButton":
        if (this.state.wheatCount > 0) {
          this.decreasePrice("wheat");
        }
        break;
      case "riceMinusButton":
        if (this.state.riceCount > 0) {
          this.decreasePrice("rice");
        }
        break;
      case "sugarMinusButton":
        if (this.state.sugarCount > 0) {
          this.decreasePrice("sugar");
        }
        break;
      case "dalMinusButton":
        if (this.state.dalCount > 0) {
          this.decreasePrice("dal");
        }
        break;
      case "oilMinusButton":
        if (this.state.oilCount > 0) {
          this.decreasePrice("oil");
        }
        break;
    }
  }
  plusButton(event) {
    event.preventDefault();
    var item = event.target.name;
    switch (item) {
      case "wheatPlusButton":
        if (this.state.wheatCount < 10) {
          this.increasePrice("wheat");
        }
        break;
      case "ricePlusButton":
        if (this.state.riceCount < 10) {
          this.increasePrice("rice");
        }
        break;
      case "sugarPlusButton":
        if (this.state.sugarCount < 10) {
          this.increasePrice("sugar");
        }
        break;
      case "dalPlusButton":
        if (this.state.dalCount < 10) {
          this.increasePrice("dal");
        }
        break;
      case "oilPlusButton":
        if (this.state.oilCount < 10) {
          this.increasePrice("oil");
        }
        break;
    }
  }

  handleChange(event) {
    this.setState({ shop_address: event.target.value });
  }
  handlePay(event) {
    // console.log("Address is :s"+this.state.shop_address)
    // console.log(this.state)

    try {
      if (Web3.utils.isAddress(this.state.shop_address)) {
        console.log("Valid address:" + this.state.shop_address);
        //   console.log(
        //     this.state.totalPrice_inr,
        //     this.state.subsized_total_inr,
        //     this.state.subsized_total_eth
        //   );
        console.log(this.props.AbiAndAdd.abi);
        const Subsidy = new window.web3.eth.Contract(
          this.props.AbiAndAdd.abi,
          this.props.AbiAndAdd.add
        );
        var totalPrice_wei = (
          this.state.totalPrice_inr *
          0.00000461 *
          1000000000000000000
        ).toString();
        var subsized_wei = (
          this.state.subsized_total_eth * 1000000000000000000
        ).toString();
        // console.log(subsized_wei, totalPrice_wei);
        Subsidy.methods.payment(this.state.shop_address, totalPrice_wei).send(
          {
            from: this.props.account,
            value: subsized_wei,
          },
          (err, hash) => {
            if (err) {
              alert(err);
            } else {
              alert("Succes !");
            }
          }
        );
      } else {
        window.alert("Enter a valid address");
      }
    } catch (err) {
      console.log(err);
      window.alert(err);
    }
  }

  render() {
    return (
      <div>
        <Header
          verified_user={this.props.verified_user}
          admin={this.props.admin}
          account={this.props.account}
          activeSection="shop"
        />
        <br></br>
        <br></br>
        <div class="shopping-cart">
          <div class="title">
            <b>Shopping Bag </b>{" "}
            <small>(below mentioned is subsidized price)</small>
          </div>
          <br></br>

          <div class="item">
            <div class="image">
              <img src={wheatImg} alt="" />
            </div>

            <div class="description">
              <span>
                <big>
                  <b>Wheat</b>
                </big>
              </span>
            </div>

            <div class="quantity">
              <button
                class="plus-btn"
                type="button"
                name="wheatMinusButton"
                onClick={this.minusButton}
              >
                -
              </button>
              <input
                type="text"
                name="name"
                value={this.state.wheatCount}
              ></input>
              <button
                class="minus-btn"
                type="button"
                name="wheatPlusButton"
                onClick={this.plusButton}
              >
                +
              </button>
              <center>
                <span>
                  <small>(Kg)</small>
                </span>
              </center>
            </div>

            <div class="total-price">
              {" "}
              <b>{this.state.wheatPrice} ₹</b>
            </div>
          </div>
          <hr></hr>

          <div class="item">
            <div class="image">
              <img src={riceImg} alt="" />
            </div>

            <div class="description">
              <span>
                <big>
                  <b>Rice</b>
                </big>
              </span>
            </div>

            <div class="quantity">
              <button
                class="plus-btn"
                type="button"
                name="riceMinusButton"
                onClick={this.minusButton}
              >
                -
              </button>
              <input
                type="text"
                name="name"
                value={this.state.riceCount}
              ></input>
              <button
                class="minus-btn"
                type="button"
                name="ricePlusButton"
                onClick={this.plusButton}
              >
                +
              </button>
              <center>
                <span>
                  <small>(Kg)</small>
                </span>
              </center>
            </div>

            <div class="total-price">
              <b>{this.state.ricePrice} ₹</b>
            </div>
          </div>
          <hr></hr>

          <div class="item">
            <div class="image">
              <img src={sugarImg} alt="" />
            </div>

            <div class="description">
              <span>
                <big>
                  <b>Sugar</b>
                </big>
              </span>
            </div>

            <div class="quantity">
              <button
                class="plus-btn"
                type="button"
                name="sugarMinusButton"
                onClick={this.minusButton}
              >
                -
              </button>
              <input
                type="text"
                name="name"
                value={this.state.sugarCount}
              ></input>
              <button
                class="minus-btn"
                type="button"
                name="sugarPlusButton"
                onClick={this.plusButton}
              >
                +
              </button>
              <center>
                <span>
                  <small>(Kg)</small>
                </span>
              </center>
            </div>
            <div class="total-price">
              {" "}
              <b>{this.state.sugarPrice} ₹</b>
            </div>
          </div>
          <hr></hr>

          <div class="item">
            <div class="image">
              <img src={dalImg} alt="" />
            </div>

            <div class="description">
              <span>
                <big>
                  <b>Dal</b>
                </big>
              </span>
            </div>

            <div class="quantity">
              <button
                class="plus-btn"
                type="button"
                name="dalMinusButton"
                onClick={this.minusButton}
              >
                -
              </button>
              <input
                type="text"
                name="name"
                value={this.state.dalCount}
              ></input>
              <button
                class="minus-btn"
                type="button"
                name="dalPlusButton"
                onClick={this.plusButton}
              >
                +
              </button>
              <center>
                <span>
                  <small>(Kg)</small>
                </span>
              </center>
            </div>
            <div class="total-price">
              {" "}
              <b>{this.state.dalPrice} ₹</b>
            </div>
          </div>
          <hr></hr>

          <div class="item">
            <div class="image">
              <img src={oilImg} alt="" />
            </div>

            <div class="description">
              <span>
                <big>
                  <b>Oil</b>
                </big>
              </span>
            </div>

            <div class="quantity">
              <button
                class="plus-btn"
                type="button"
                name="oilMinusButton"
                onClick={this.minusButton}
              >
                -
              </button>
              <input
                type="text"
                name="name"
                value={this.state.oilCount}
              ></input>
              <button
                class="minus-btn"
                type="button"
                name="oilPlusButton"
                onClick={this.plusButton}
              >
                +
              </button>
              <center>
                <span>
                  <small>(Litre)</small>
                </span>
              </center>
            </div>
            <div class="total-price">
              {" "}
              <b>{this.state.oilPrice} ₹</b>
            </div>
          </div>
          <hr></hr>
        </div>

        <div class="summarySection">
          <div class="summary-header">
            <br></br>
            <center>
              {" "}
              <big>
                <b> Summary </b>
              </big>
            </center>
          </div>
          <br></br>

          <div class="summary-total">
            <div class="content">
              <hr></hr>
              <div id="headingSec">
                <span class="content">
                  <b>Items </b>
                </span>{" "}
                <span class="contentQuantity">
                  <b>Quantity </b>
                </span>{" "}
                <span class="contentPrice">
                  <b>Price</b>
                </span>
              </div>
              <hr></hr>
              <div class="commodity">
                <div id="commo">
                  <span class="commo-name">Wheat </span> <br></br>
                  <span class="commo-name">Rice </span> <br></br>
                  <span class="commo-name">Sugar </span> <br></br>
                  <span class="commo-name">dal </span> <br></br>
                  <span class="commo-name">oil </span> <br></br>
                </div>
                <div id="commoQuantity">
                  <span class="commoQ">{this.state.wheatCount} </span>
                  <br></br>
                  <span class="commoQ">{this.state.riceCount} </span>
                  <br></br>
                  <span class="commoQ">{this.state.sugarCount} </span>
                  <br></br>
                  <span class="commoQ">{this.state.dalCount} </span>
                  <br></br>
                  <span class="commoQ">{this.state.oilCount} </span>
                  <br></br>
                </div>

                <div id="commoPrice">
                  <span class="commo-price">
                    <b>{this.state.wheatPrice} ₹</b>
                  </span>{" "}
                  <br></br>
                  <span class="commo-price">
                    <b>{this.state.ricePrice} ₹</b>
                  </span>{" "}
                  <br></br>
                  <span class="commo-price">
                    <b>{this.state.sugarPrice} ₹</b>
                  </span>{" "}
                  <br></br>
                  <span class="commo-price">
                    <b>{this.state.dalPrice} ₹</b>
                  </span>{" "}
                  <br></br>
                  <span class="commo-price">
                    <b>{this.state.oilPrice} ₹</b>
                  </span>{" "}
                  <br></br>
                </div>
              </div>
              <hr></hr>
              <span class="totalIn">
                <b>Total price(₹)</b>
              </span>{" "}
              <span class="totalFull" id="subsized_total_inrInRS">
                {this.state.totalPrice_inr}
              </span>
              <br></br>
              <span class="totalIn">
                <b>Subsized price(₹)</b>
              </span>{" "}
              <span class="totalFull" id="subsized_total_inrInRS">
                {this.state.subsized_total_inr}
              </span>
              <br></br>
              <span class="totalIn">
                <b>Total price(ETH)</b>
              </span>{" "}
              <span class="totalFull" id="subsized_total_inrInRS">
                {this.state.totalPrice_eth}
              </span>
              <br></br>
              <span class="totalIn">
                <b>Subsized price(ETH)</b>
              </span>
              <span class="totalFull">{this.state.subsized_total_eth}</span>
              <br></br>
              <hr></hr>
            </div>
            <br></br>
            <br></br>

            <div class="sendSection">
              <form>
                <input
                  class="sendInputBox"
                  placeholder="Enter Shopkeeper Acc address..."
                  type="text"
                  onChange={this.handleChange}
                ></input>
              </form>
              <br></br>
              <div class="sendReqSection">
                <button id="sendReqButton" onClick={this.handlePay}>
                  Pay
                </button>
              </div>
              <br></br>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Shop;
