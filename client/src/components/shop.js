import React ,{Component} from 'react';
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom';
import '../component_css/shop.css';
import wheatImg from '../static/wheat.jpg'
import riceImg from '../static/rice.jpg'

import Header from './header.js'


class Shop extends Component {

  constructor(props){
    super(props);
  }


  render(){

    return (

<div> 

    <Header/>
    <br></br>
    <br></br>
    <div class="shopping-cart">

        <div class="title">
            <b>Shopping Bag</b>
        </div>
        <br></br>
        
        <div class="item">
            <div class="image">
                <img src={wheatImg}    alt="" />
            </div>
        
            <div class="description">
                <span><big><b>Wheat</b></big></span>
            </div>
        
            <div class="quantity">
                <button class="plus-btn" type="button" name="button">-</button>
                <input type="text" name="name" value="1"></input>
                <button class="minus-btn" type="button" name="button">+</button>
            </div>

            <div class="total-price"> <b>549 ₹</b></div>

        </div>
        <hr></hr>

        <div class="item">
            <div class="image">
                <img src={riceImg}  alt="" />
            </div>
        
            <div class="description">
                <span><big><b>Wheat</b></big></span>
            </div>
        
            <div class="quantity">
                <button class="plus-btn" type="button" name="button">-</button>
                <input type="text" name="name" value="1"></input>
                <button class="minus-btn" type="button" name="button">+</button>
            </div>
        
            <div class="total-price"><b>549 ₹</b></div>

        </div>
        <hr></hr>

        <div class="item">
        
            <div class="image">
                <img src={wheatImg}   alt="" />
            </div>

            <div class="description">
                <span><big><b>Wheat</b></big></span>
            
            </div>

            <div class="quantity">
                <button class="plus-btn" type="button" name="button">-</button>
                <input type="text" name="name" value="1"></input>
                <button class="minus-btn" type="button" name="button">+</button>
            </div>
            
        </div>
        <hr></hr>

    </div>



    <div class="summarySection">
    
        <div class="summary-header">
            <br></br>
            <center> <big><b> Summary </b></big></center>
        </div>
        <br></br>

        <div class="summary-total">
            <div class="content">
                <hr></hr>
                <span class="content"><b>Content </b></span> <span class="contentPrice"><b>Price </b></span> 
                <hr></hr>
                <div class="commodity">
                    <span class="commo-name">wheat </span> <span class="commo-price"><b>549 ₹</b></span> <br></br> 
                    <span class="commo-name">wheat </span> <span class="commo-price"><b>549 ₹</b></span><br></br>
                    <span class="commo-name">wheat </span> <span class="commo-price"><b>549 ₹</b></span><br></br>
                    <hr></hr>
                    <span class="commo-name"><b>Total in Rs.</b></span> <span class="commo-price"><b>549 ₹</b></span><br></br>
                    <span class="commo-name"><b>Total in ETH</b></span> <span class="commo-price"><b>549 </b></span><br></br>
                </div>
            </div>
            <br></br>
            <br></br>

            <div class="sendSection">
                <form>
                    <input class="sendInputBox" placeholder="Enter Customer Acc address..." type="text"></input>
                </form>
                <br></br>
                <div class="sendReqSection">
                    <button id="sendReqButton">Send Request</button>
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
