import React ,{Component} from 'react';
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom';
import '../component_css/admin.css';
import Header from './header.js'
import db from '../helper/firebase.js'
import {Firestore,collection,setDoc,doc,getDocs,addDoc} from "firebase/firestore"; 


class Admin extends Component {

    constructor(props){
        super(props);
        this.state={
            wheatPrice:null,
            ricePrice:null,
            sugarPrice:null,
            oilPrice:null,
            dalPrice:null,
            wheatSubsidy:null,
            riceSubsidy:null,
            oilSubsidy:null,
            sugarSubsidy:null,
            dalSubsidy:null,
          }

          this.rateHandler=this.rateHandler.bind(this);
          this.updateHandler=this.updateHandler.bind(this);

    }

    async componentWillMount(){
        console.log("yash Bhange");
        const querySnapshot = await getDocs(collection(db, "rates"));
        querySnapshot.forEach((doc) => {
          console.log(doc.id, " => ", doc.data());
          switch(doc.data().item){
              case 'wheat':
                  this.setState({
                      wheatPrice:doc.data().valuePerKg,
                      wheatSubsidy:doc.data().subsidy

                  });
                  break;
               case 'rice':
                  this.setState({
                      ricePrice:doc.data().valuePerKg,
                      riceSubsidy:doc.data().subsidy

                  });
                  break;
                case 'sugar':
                  this.setState({
                      sugarPrice:doc.data().valuePerKg,
                      sugarSubsidy:doc.data().subsidy

                  });
                  break;
                case 'dal':
                  this.setState({
                      dalPrice:doc.data().valuePerKg,
                      dalSubsidy:doc.data().subsidy

                  });
                  break;
                case 'oil':
                    this.setState({
                        oilPrice:doc.data().valuePerKg,
                        oilSubsidy:doc.data().subsidy
  
                    });
                    break;
          }

        

        });


    }



    rateHandler(event){
        event.preventDefault();
        switch(event.target.name){
            case 'wheatPrice':
                this.setState({
                    wheatPrice:event.target.value
                })
                
                break;
            case 'ricePrice':
                this.setState({
                    ricePrice:event.target.value
                })
                break;
            case 'sugarPrice':
                this.setState({
                    sugarPrice:event.target.value
                })
                break;
            case 'dalPrice':
                this.setState({
                    dalPrice:event.target.value
                })
                break;
            case 'oilPrice':
                this.setState({
                    oilPrice:event.target.value
                })
                break;
            case 'wheatSubsidy':
                this.setState({
                    wheatSubsidy:event.target.value
                })
                break;
            case 'oilSubsidy':
                this.setState({
                    oilSubsidy:event.target.value
                })
                break;
            case 'riceSubsidy':
                this.setState({
                    riceSubsidy:event.target.value
                })
                break;
            case 'sugarSubsidy':
                this.setState({
                    sugarSubsidy:event.target.value
                })
                break;
            case 'dalSubsidy':
                this.setState({
                    dalSubsidy:event.target.value
                })
                break;

        }
    }


    async updateHandler(event){
         //for oil
        await setDoc(doc(db, "rates", "2LyiEeHU5SvVcLN8akP7"), {
            valuePerKg:this.state.oilPrice,
            subsidy:this.state.oilSubsidy,
            item:"oil"
        
        });
        console.log("end1")
        //for whaet
        await setDoc(doc(db, "rates", "hlo1tyui4grQwAzqYzDP"), {
            valuePerKg:this.state.wheatPrice,
            subsidy:this.state.wheatSubsidy,
            item:"wheat"
        
        });
        //for rice
        await setDoc(doc(db, "rates", "Vz55PP8U4iIf9slozQfF"), {
            valuePerKg:this.state.ricePrice,
            subsidy:this.state.riceSubsidy,
            item:"rice"
        
        });
        //for sugar
        await setDoc(doc(db, "rates", "l650Eb1orpdThwQiVXZe"), {
            valuePerKg:this.state.sugarPrice,
            subsidy:this.state.sugarSubsidy,
            item:"sugar"
        
        });
        //fordal
        await setDoc(doc(db, "rates", "HcK4CInBqQxs7Y0Y77eb"), {
            valuePerKg:this.state.dalPrice,
            subsidy:this.state.dalSubsidy,
            item:"dal"
        
        });

        alert("successfully updated !");


    }


  render(){

    return (
        <div>
            <Header activeSection='admin' />
            <br></br>
            <br></br>

            <div id="addUserSection">
                <div id="totalMoney" class="adminButtons">
                    <span>Total Amount Remaining : </span> <b>12.43 ETH</b>

                </div>

                <div id="addCustomer" class="adminButtons">
                    <a href="/add-customer"> <button class="adminButton1">Add Customer</button></a>

                </div>
                <div id="addShopkeeper" class="adminButtons">
                    <a href="/add-shopkeeper"><button class="adminButton1">Add ShopKepper</button></a>

                </div>
               

            </div>

            <br></br>
            <br></br>
            <br></br>



    

            <div id="adminContainer">

                <div id="adminRates">
                    <div class="headingColor">
                        <hr></hr>
                        <b><big><center><span>Rates</span></center></big></b> <hr></hr>
                    </div>
                    <br></br>
                    <br></br>
                    <hr></hr>
                    <div id="adminHeadingSec">
                        <span class="adminContent"><b>Items</b></span> <span class="adminContentQuantity"><b>Rates In RS.</b></span> <span class="adminContentPrice"><b>Subsidy in % </b></span> 
                    </div>
                    <hr></hr>
                    <br></br>

                    <div class="adminCommodity">
                        <div id="adminCommo">
                            <span class="commo-name">Wheat </span> <br></br> <br></br>
                            <span class="commo-name">Rice </span>  <br></br> <br></br>
                            <span class="commo-name">Sugar </span>  <br></br> <br></br>
                            <span class="commo-name">dal </span> <br></br> <br></br>
                            <span class="commo-name">oil </span>  <br></br> <br></br>

                        </div>
                        <div id="adminCommoQuantity">
                        <span class="commoQ"><input type="text" onChange={this.rateHandler} value={this.state.wheatPrice} class="adminRatesInputBox" name="wheatPrice" placeholder="in KG"></input></span><br></br> <br></br>
                        <span class="commoQ"><input type="text" onChange={this.rateHandler} value={this.state.ricePrice} class="adminRatesInputBox" name="ricePrice" placeholder="in KG"></input></span><br></br> <br></br>
                        <span class="commoQ"><input type="text" onChange={this.rateHandler} value={this.state.sugarPrice} class="adminRatesInputBox" name="sugarPrice" placeholder="in KG"></input></span><br></br> <br></br>
                        <span class="commoQ"><input type="text" onChange={this.rateHandler} value={this.state.dalPrice} class="adminRatesInputBox" name="dalPrice" placeholder="in KG"></input></span><br></br> <br></br>
                        <span class="commoQ"><input type="text" onChange={this.rateHandler} value={this.state.oilPrice} class="adminRatesInputBox" name="oilPrice" placeholder="in LT"></input></span><br></br> <br></br>

                        </div>

                        <div id="adminCommoPrice">
                        <span class="commo-price"><b><input onChange={this.rateHandler} value={this.state.wheatSubsidy} type="text" class="adminSubInputBox" name="wheatSubsidy" placeholder="%"></input></b></span> <br></br>  <br></br>
                        <span class="commo-price"><b><input onChange={this.rateHandler} value={this.state.riceSubsidy} type="text" class="adminSubInputBox" name="riceSubsidy" placeholder="%"></input></b></span> <br></br>  <br></br>
                        <span class="commo-price"><b><input onChange={this.rateHandler} value={this.state.sugarSubsidy} type="text" class="adminSubInputBox" name="sugarSubsidy" placeholder="%"></input></b></span> <br></br>  <br></br>
                        <span class="commo-price"><b><input onChange={this.rateHandler} value={this.state.dalSubsidy} type="text" class="adminSubInputBox" name="dalSubsidy" placeholder="%"></input></b></span> <br></br>  <br></br>
                        <span class="commo-price"><b><input onChange={this.rateHandler} value={this.state.oilSubsidy} type="text" class="adminSubInputBox" name="oilSubsidy" placeholder="%"></input></b></span> <br></br>  <br></br>

                        </div>
                       
                  
                    </div>
                    <hr></hr>
                    <br></br>
                    <br></br>

                    <div class="adminUpdateButtonSection">
                       <button onClick={this.updateHandler} id="adminUpdateButton"><b>Update</b></button>

                    </div>
                    <br></br><br></br>
                    





                </div>
                <div id="adminRequest">
                    <div class="headingColor">
                        <hr></hr>
                        <b><big><center><span>Pending Request</span></center></big></b> <hr></hr>
                    </div>


                </div>

            </div>

            
         
        </div>
    );

  }
  
}

export default Admin;
