import React ,{Component} from 'react';
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom';
import '../component_css/rates.css';
import Header from './header.js'
import db from '../helper/firebase.js'
import {Firestore,collection,setDoc,doc,getDocs,addDoc} from "firebase/firestore"; 
class Rates extends Component {

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

  render(){

    return (
        <div>  
            <Header activeSection='rates' />
            <br></br>
            <br></br>

            <div id="adminContainer">

                <div id="adminRates1">
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
                        <span class="commoQ"><input readOnly value={this.state.wheatPrice} type="text" class="adminRatesInputBox" placeholder="in KG"></input></span><br></br> <br></br>
                        <span class="commoQ"><input readOnly value={this.state.ricePrice} type="text" class="adminRatesInputBox" placeholder="in KG"></input></span><br></br> <br></br>
                        <span class="commoQ"><input readOnly value={this.state.sugarPrice} type="text" class="adminRatesInputBox" placeholder="in KG"></input></span><br></br> <br></br>
                        <span class="commoQ"><input readOnly value={this.state.dalPrice} type="text" class="adminRatesInputBox" placeholder="in KG"></input></span><br></br> <br></br>
                        <span class="commoQ"><input readOnly value={this.state.oilPrice} type="text" class="adminRatesInputBox" placeholder="in LT"></input></span><br></br> <br></br>

                        </div>

                        <div id="adminCommoPrice">
                        <span class="commo-price"><b><input readOnly value={this.state.wheatSubsidy} type="text" class="adminSubInputBox" placeholder="%"></input></b></span> <br></br>  <br></br>
                        <span class="commo-price"><b><input readOnly value={this.state.riceSubsidy} type="text" class="adminSubInputBox" placeholder="%"></input></b></span> <br></br>  <br></br>
                        <span class="commo-price"><b><input readOnly value={this.state.sugarSubsidy} type="text" class="adminSubInputBox" placeholder="%"></input></b></span> <br></br>  <br></br>
                        <span class="commo-price"><b><input readOnly value={this.state.dalSubsidy}  type="text" class="adminSubInputBox" placeholder="%"></input></b></span> <br></br>  <br></br>
                        <span class="commo-price"><b><input readOnly value={this.state.oilSubsidy} type="text" class="adminSubInputBox" placeholder="%"></input></b></span> <br></br>  <br></br>

                        </div>
                       
                  
                    </div>
                    <hr></hr>
                    
                    <br></br><br></br>
                    
                </div>
            
            </div>
            
            
         
        </div>
    );

  }
  
}

export default Rates;
