import React ,{Component} from 'react';
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom';
import '../component_css/admin.css';
import Header from './header.js'

class Admin extends Component {

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
                        <span class="commoQ"><input type="text" class="adminRatesInputBox" placeholder="in KG"></input></span><br></br> <br></br>
                        <span class="commoQ"><input type="text" class="adminRatesInputBox" placeholder="in KG"></input></span><br></br> <br></br>
                        <span class="commoQ"><input type="text" class="adminRatesInputBox" placeholder="in KG"></input></span><br></br> <br></br>
                        <span class="commoQ"><input type="text" class="adminRatesInputBox" placeholder="in KG"></input></span><br></br> <br></br>
                        <span class="commoQ"><input type="text" class="adminRatesInputBox" placeholder="in LT"></input></span><br></br> <br></br>

                        </div>

                        <div id="adminCommoPrice">
                        <span class="commo-price"><b><input type="text" class="adminSubInputBox" placeholder="%"></input></b></span> <br></br>  <br></br>
                        <span class="commo-price"><b><input type="text" class="adminSubInputBox" placeholder="%"></input></b></span> <br></br>  <br></br>
                        <span class="commo-price"><b><input type="text" class="adminSubInputBox" placeholder="%"></input></b></span> <br></br>  <br></br>
                        <span class="commo-price"><b><input type="text" class="adminSubInputBox" placeholder="%"></input></b></span> <br></br>  <br></br>
                        <span class="commo-price"><b><input type="text" class="adminSubInputBox" placeholder="%"></input></b></span> <br></br>  <br></br>

                        </div>
                       
                  
                    </div>
                    <hr></hr>
                    <br></br>
                    <br></br>

                    <div class="adminUpdateButtonSection">
                       <button id="adminUpdateButton"><b>Update</b></button>

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
