import React, { Component } from "react";
import "../component_css/admin.css";
import Header from "./header.js";
import db from "../helper/firebase.js";
import { collection, setDoc, doc, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import Web3 from "web3";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wheatPrice: null,
      ricePrice: null,
      sugarPrice: null,
      oilPrice: null,
      dalPrice: null,
      wheatSubsidy: null,
      riceSubsidy: null,
      oilSubsidy: null,
      sugarSubsidy: null,
      dalSubsidy: null,
      Funds: "***",
      category: "rates_BPL",
    };

    this.rateHandler = this.rateHandler.bind(this);
    this.updateHandler = this.updateHandler.bind(this);
    this.seeFunds = this.seeFunds.bind(this);
    this.rateSelectHandler = this.rateSelectHandler.bind(this);
    this.loadData = this.loadData.bind(this);
  }

  async componentWillMount() {
    this.loadData(this.state.category);
  }

  async loadData(rate) {
    // console.log("yash Bhange");
    const querySnapshot = await getDocs(collection(db, rate));
    querySnapshot.forEach((doc) => {
      // console.log(doc.id, " => ", doc.data());
      switch (doc.data().item) {
        case "wheat":
          this.setState({
            wheatPrice: doc.data().valuePerKg,
            wheatSubsidy: doc.data().subsidy,
          });
          break;
        case "rice":
          this.setState({
            ricePrice: doc.data().valuePerKg,
            riceSubsidy: doc.data().subsidy,
          });
          break;
        case "sugar":
          this.setState({
            sugarPrice: doc.data().valuePerKg,
            sugarSubsidy: doc.data().subsidy,
          });
          break;
        case "dal":
          this.setState({
            dalPrice: doc.data().valuePerKg,
            dalSubsidy: doc.data().subsidy,
          });
          break;
        case "oil":
          this.setState({
            oilPrice: doc.data().valuePerKg,
            oilSubsidy: doc.data().subsidy,
          });
          break;
        default:
          break;
      }
    });
  }
  async rateSelectHandler(event) {
    event.preventDefault();
    await this.setState({
      category: event.target.value,
    });
    this.loadData(this.state.category);
  }
  rateHandler(event) {
    event.preventDefault();
    switch (event.target.name) {
      case "wheatPrice":
        this.setState({
          wheatPrice: event.target.value,
        });

        break;
      case "ricePrice":
        this.setState({
          ricePrice: event.target.value,
        });
        break;
      case "sugarPrice":
        this.setState({
          sugarPrice: event.target.value,
        });
        break;
      case "dalPrice":
        this.setState({
          dalPrice: event.target.value,
        });
        break;
      case "oilPrice":
        this.setState({
          oilPrice: event.target.value,
        });
        break;
      case "wheatSubsidy":
        this.setState({
          wheatSubsidy: event.target.value,
        });
        break;
      case "oilSubsidy":
        this.setState({
          oilSubsidy: event.target.value,
        });
        break;
      case "riceSubsidy":
        this.setState({
          riceSubsidy: event.target.value,
        });
        break;
      case "sugarSubsidy":
        this.setState({
          sugarSubsidy: event.target.value,
        });
        break;
      case "dalSubsidy":
        this.setState({
          dalSubsidy: event.target.value,
        });
        break;
      default:
        break;
    }
  }

  async updateHandler(event) {
    if (this.state.category == "rates_BPL") {
      await setDoc(doc(db, "rates_BPL", "fvuP5gS8hDbmpA3A0kV9S"), {
        valuePerKg: this.state.oilPrice,
        subsidy: this.state.oilSubsidy,
        item: "oil",
      });
      console.log("end1");
      //for whaet
      await setDoc(doc(db, "rates_BPL", "TFaYXdaYWrQglJjKFJlt"), {
        valuePerKg: this.state.wheatPrice,
        subsidy: this.state.wheatSubsidy,
        item: "wheat",
      });
      //for rice
      await setDoc(doc(db, "rates_BPL", "ovCbYmoiQGMhdLtBNDss"), {
        valuePerKg: this.state.ricePrice,
        subsidy: this.state.riceSubsidy,
        item: "rice",
      });
      //for sugar
      await setDoc(doc(db, "rates_BPL", "TfKXaCtBaiadBIMDu2yj"), {
        valuePerKg: this.state.sugarPrice,
        subsidy: this.state.sugarSubsidy,
        item: "sugar",
      });
      //fordal
      await setDoc(doc(db, "rates_BPL", "4Syso0uamWopqj1AcFV6"), {
        valuePerKg: this.state.dalPrice,
        subsidy: this.state.dalSubsidy,
        item: "dal",
      });

      alert("successfully updated BPL rates !");
    } else if (this.state.category == "rates_APL") {
      await setDoc(doc(db, "rates_APL", "g7omuEMjJAG5uElqEDhe"), {
        valuePerKg: this.state.oilPrice,
        subsidy: this.state.oilSubsidy,
        item: "oil",
      });
      console.log("end1");
      //for whaet
      await setDoc(doc(db, "rates_APL", "Zf02gCQ7T8t9rqvqkvjM"), {
        valuePerKg: this.state.wheatPrice,
        subsidy: this.state.wheatSubsidy,
        item: "wheat",
      });
      //for rice
      await setDoc(doc(db, "rates_APL", "kIS9NJBOytKLA6eld4M9"), {
        valuePerKg: this.state.ricePrice,
        subsidy: this.state.riceSubsidy,
        item: "rice",
      });
      //for sugar
      await setDoc(doc(db, "rates_APL", "xAi647vslfV4oW51Zknq"), {
        valuePerKg: this.state.sugarPrice,
        subsidy: this.state.sugarSubsidy,
        item: "sugar",
      });
      //fordal
      await setDoc(doc(db, "rates_APL", "bANFHXJcKscxdqlDZMto"), {
        valuePerKg: this.state.dalPrice,
        subsidy: this.state.dalSubsidy,
        item: "dal",
      });

      alert("successfully updated APL rates!");
    } else if (this.state.category == "rates_REFUGEE") {
      await setDoc(doc(db, "rates_REFUGEE", "wYUugSGmsIq5Qbs8ldqq"), {
        valuePerKg: this.state.oilPrice,
        subsidy: this.state.oilSubsidy,
        item: "oil",
      });
      console.log("end1");
      //for whaet
      await setDoc(doc(db, "rates_REFUGEE", "aEIjXiRjqa9eq1ajaytc"), {
        valuePerKg: this.state.wheatPrice,
        subsidy: this.state.wheatSubsidy,
        item: "wheat",
      });
      //for rice
      await setDoc(doc(db, "rates_REFUGEE", "RCXbFod1Lyct2p689sGB"), {
        valuePerKg: this.state.ricePrice,
        subsidy: this.state.riceSubsidy,
        item: "rice",
      });
      //for sugar
      await setDoc(doc(db, "rates_REFUGEE", "l9jcsqiaeXkKUHdZpwni"), {
        valuePerKg: this.state.sugarPrice,
        subsidy: this.state.sugarSubsidy,
        item: "sugar",
      });
      //fordal
      await setDoc(doc(db, "rates_REFUGEE", "Y7Cv2rQZ5GekAZpn0wHc"), {
        valuePerKg: this.state.dalPrice,
        subsidy: this.state.dalSubsidy,
        item: "dal",
      });

      alert("successfully updated REFUGEE rates!");
    }
  }

  async seeFunds(event) {
    const Subsidy = new window.web3.eth.Contract(
      this.props.AbiAndAdd.abi,
      this.props.AbiAndAdd.add
    );
    var funds = await Subsidy.methods.showBalance().call();

    funds = Web3.utils.fromWei(funds, "ether");
    this.setState({ Funds: funds });
  }

  render() {
    if (this.props.admin) {
      return (
        <div>
          <Header activeSection="admin" admin={this.props.admin} />
          <br></br>
          <br></br>

          <div id="addUserSection">
            <div id="totalMoney" class="adminButtons">
              <span>Total Amount Remaining : </span>{" "}
              <b>{this.state.Funds} ETH</b>
            </div>

            <div id="addCustomer" class="adminButtons">
              <Link to="/add-customer">
                {" "}
                <button class="adminButton1">Add Customer</button>
              </Link>
            </div>
            <div id="addShopkeeper" class="adminButtons">
              <Link to="/add-shopkeeper">
                <button class="adminButton1">Add ShopKepper</button>
              </Link>
            </div>

            <div id="addShopkeeper" class="adminButtons">
              <Link to="/add-Funds">
                <button class="adminButton1">Add Funds</button>
              </Link>
            </div>
            <div id="addShopkeeper" class="adminButtons">
              <button onClick={this.seeFunds} class="adminButton1">
                See Funds
              </button>
            </div>
          </div>

          <br></br>
          <br></br>
          <br></br>

          <div id="adminContainer">
            <div id="adminRates">
              <div class="headingColor">
                <hr></hr>
                <b>
                  <big>
                    <center>
                      <span>Rates </span>
                      <select onChange={this.rateSelectHandler}>
                        <option value="rates_BPL">BPL</option>
                        <option value="rates_APL">APL</option>
                        <option value="rates_REFUGEE">REFUGEE</option>
                      </select>
                    </center>
                  </big>
                </b>{" "}
                <hr></hr>
              </div>
              <br></br>
              <br></br>
              <hr></hr>
              <div id="adminHeadingSec">
                <span class="adminContent">
                  <b>Items</b>
                </span>{" "}
                <span class="adminContentQuantity">
                  <b>Rates In RS.</b>
                </span>{" "}
                <span class="adminContentPrice">
                  <b>Subsidy in % </b>
                </span>
              </div>
              <hr></hr>
              <br></br>

              <div class="adminCommodity">
                <div id="adminCommo">
                  <span class="commo-name">Wheat </span> <br></br> <br></br>
                  <span class="commo-name">Rice </span> <br></br> <br></br>
                  <span class="commo-name">Sugar </span> <br></br> <br></br>
                  <span class="commo-name">dal </span> <br></br> <br></br>
                  <span class="commo-name">oil </span> <br></br> <br></br>
                </div>
                <div id="adminCommoQuantity">
                  <span class="commoQ">
                    <input
                      type="text"
                      onChange={this.rateHandler}
                      value={this.state.wheatPrice}
                      class="adminRatesInputBox"
                      name="wheatPrice"
                      placeholder="in KG"
                    ></input>
                  </span>
                  <br></br> <br></br>
                  <span class="commoQ">
                    <input
                      type="text"
                      onChange={this.rateHandler}
                      value={this.state.ricePrice}
                      class="adminRatesInputBox"
                      name="ricePrice"
                      placeholder="in KG"
                    ></input>
                  </span>
                  <br></br> <br></br>
                  <span class="commoQ">
                    <input
                      type="text"
                      onChange={this.rateHandler}
                      value={this.state.sugarPrice}
                      class="adminRatesInputBox"
                      name="sugarPrice"
                      placeholder="in KG"
                    ></input>
                  </span>
                  <br></br> <br></br>
                  <span class="commoQ">
                    <input
                      type="text"
                      onChange={this.rateHandler}
                      value={this.state.dalPrice}
                      class="adminRatesInputBox"
                      name="dalPrice"
                      placeholder="in KG"
                    ></input>
                  </span>
                  <br></br> <br></br>
                  <span class="commoQ">
                    <input
                      type="text"
                      onChange={this.rateHandler}
                      value={this.state.oilPrice}
                      class="adminRatesInputBox"
                      name="oilPrice"
                      placeholder="in LT"
                    ></input>
                  </span>
                  <br></br> <br></br>
                </div>

                <div id="adminCommoPrice">
                  <span class="commo-price">
                    <b>
                      <input
                        onChange={this.rateHandler}
                        value={this.state.wheatSubsidy}
                        type="text"
                        class="adminSubInputBox"
                        name="wheatSubsidy"
                        placeholder="%"
                      ></input>
                    </b>
                  </span>{" "}
                  <br></br> <br></br>
                  <span class="commo-price">
                    <b>
                      <input
                        onChange={this.rateHandler}
                        value={this.state.riceSubsidy}
                        type="text"
                        class="adminSubInputBox"
                        name="riceSubsidy"
                        placeholder="%"
                      ></input>
                    </b>
                  </span>{" "}
                  <br></br> <br></br>
                  <span class="commo-price">
                    <b>
                      <input
                        onChange={this.rateHandler}
                        value={this.state.sugarSubsidy}
                        type="text"
                        class="adminSubInputBox"
                        name="sugarSubsidy"
                        placeholder="%"
                      ></input>
                    </b>
                  </span>{" "}
                  <br></br> <br></br>
                  <span class="commo-price">
                    <b>
                      <input
                        onChange={this.rateHandler}
                        value={this.state.dalSubsidy}
                        type="text"
                        class="adminSubInputBox"
                        name="dalSubsidy"
                        placeholder="%"
                      ></input>
                    </b>
                  </span>{" "}
                  <br></br> <br></br>
                  <span class="commo-price">
                    <b>
                      <input
                        onChange={this.rateHandler}
                        value={this.state.oilSubsidy}
                        type="text"
                        class="adminSubInputBox"
                        name="oilSubsidy"
                        placeholder="%"
                      ></input>
                    </b>
                  </span>{" "}
                  <br></br> <br></br>
                </div>
              </div>
              <hr></hr>
              <br></br>
              <br></br>

              <div class="adminUpdateButtonSection">
                <button onClick={this.updateHandler} id="adminUpdateButton">
                  <b>Update</b>
                </button>
              </div>
              <br></br>
              <br></br>
            </div>
            <div id="adminRequest">
              <div class="headingColor">
                <hr></hr>
                <b>
                  <big>
                    <center>
                      <span>Pending Request</span>
                    </center>
                  </big>
                </b>{" "}
                <hr></hr>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <h1>403 Forbidden</h1>;
    }
  }
}

export default Admin;
