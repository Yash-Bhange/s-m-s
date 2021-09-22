import React ,{Component} from 'react';
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom';
import '../component_css/shop.css';
import wheatImg from '../static/wheat.jpg'
import riceImg from '../static/rice.jpg'
import sugarImg from '../static/sugar.jpg'
import dalImg from '../static/dal.jpg'
import oilImg from '../static/oil.jpg'

import Header from './header.js'


class Shop extends Component {

constructor(props){
    super(props);
    this.state = {
        wheatCount:0,
        riceCount:0,
        sugarCount:0,
        dalCount:0,
        oilCount:0,
        wheatPrice:0,
        ricePrice:0,
        sugarPrice:0,
        dalPrice:0,
        oilPrice:0,
        totalPrice:0,
        totalPriceETH:0

      
    };
    this.minusButton=this.minusButton.bind(this);  
    this.plusButton=this.plusButton.bind(this); 
    this.increasePrice=this.increasePrice.bind(this); 
    this.decreasePrice=this.decreasePrice.bind(this); 
}

async increasePrice(item){

     switch(item){
        case 'wheat':
            var count=this.state.wheatCount;
            count++;
            await this.setState({
                wheatCount:count
            });
            this.setState({
                wheatPrice:count*40
            },()=>{
                this.setState({
                    totalPrice:this.state.wheatPrice+this.state.ricePrice+this.state.sugarPrice+this.state.dalPrice+this.state.oilPrice,
                },()=>{
                    this.setState({
                        totalPriceETH:(this.state.totalPrice*0.00000461).toFixed(6)
                    })
                })
            });
            break;
        case 'rice':
            var count=this.state.riceCount;
            count++;
            this.setState({
                riceCount:count
            });
            this.setState({
                ricePrice:count*40
            },()=>{
                this.setState({
                    totalPrice:this.state.wheatPrice+this.state.ricePrice+this.state.sugarPrice+this.state.dalPrice+this.state.oilPrice,
                
                },()=>{
                    this.setState({
                        totalPriceETH:(this.state.totalPrice*0.00000461).toFixed(6)
                    })
                })
            });
            break;
        case 'sugar':
            var count=this.state.sugarCount;
            count++;
            this.setState({
                sugarCount:count
            });
            this.setState({
                sugarPrice:count*40
            },()=>{
                this.setState({
                    totalPrice:this.state.wheatPrice+this.state.ricePrice+this.state.sugarPrice+this.state.dalPrice+this.state.oilPrice
                },()=>{
                    this.setState({
                        totalPriceETH:(this.state.totalPrice*0.00000461).toFixed(6)
                    })
                })
            });
            break;
        case 'dal':
            var count=this.state.dalCount;
            count++;
            this.setState({
                dalCount:count
            });
            this.setState({
                dalPrice:count*40
            },()=>{
                this.setState({
                    totalPrice:this.state.wheatPrice+this.state.ricePrice+this.state.sugarPrice+this.state.dalPrice+this.state.oilPrice
                },()=>{
                    this.setState({
                        totalPriceETH:(this.state.totalPrice*0.00000461).toFixed(6)
                    })
                })
            });
            break;
        case 'oil':
            var count=this.state.oilCount;
            count++;
            this.setState({
               oilCount:count
            });
            this.setState({
                oilPrice:count*40
            },()=>{
                this.setState({
                    totalPrice:this.state.wheatPrice+this.state.ricePrice+this.state.sugarPrice+this.state.dalPrice+this.state.oilPrice
                },()=>{
                    this.setState({
                        totalPriceETH:(this.state.totalPrice*0.00000461).toFixed(6)
                    })
                })
            });
            break;
    }

   
}


decreasePrice(item){

    switch(item){
        case 'wheat':
            var count=this.state.wheatCount;
            count--;
            this.setState({
                wheatCount:count
            });
            this.setState({
                wheatPrice:count*40
            },()=>{
                this.setState({
                    totalPrice:this.state.wheatPrice+this.state.ricePrice+this.state.sugarPrice+this.state.dalPrice+this.state.oilPrice
                },()=>{
                    this.setState({
                        totalPriceETH:(this.state.totalPrice*0.00000461).toFixed(6)
                    })
                })
            });
            break;
        case 'rice':
            var count=this.state.riceCount;
            count--;
            this.setState({
                riceCount:count
            });
            this.setState({
                ricePrice:count*40
            },()=>{
                this.setState({
                    totalPrice:this.state.wheatPrice+this.state.ricePrice+this.state.sugarPrice+this.state.dalPrice+this.state.oilPrice
                },()=>{
                    this.setState({
                        totalPriceETH:(this.state.totalPrice*0.00000461).toFixed(6)
                    })
                })
            });
            break;
        case 'sugar':
            var count=this.state.sugarCount;
            count--;
            this.setState({
                suagrCount:count
            });
            this.setState({
                sugarPrice:count*40
            },()=>{
                this.setState({
                    totalPrice:this.state.wheatPrice+this.state.ricePrice+this.state.sugarPrice+this.state.dalPrice+this.state.oilPrice
                },()=>{
                    this.setState({
                        totalPriceETH:(this.state.totalPrice*0.00000461).toFixed(6)
                    })
                })
            });
            break;
        case 'dal':
            var count=this.state.dalCount;
            count--;
            this.setState({
                dalCount:count
            });
            this.setState({
                dalPrice:count*40
            },()=>{
                this.setState({
                    totalPrice:this.state.wheatPrice+this.state.ricePrice+this.state.sugarPrice+this.state.dalPrice+this.state.oilPrice
                },()=>{
                    this.setState({
                        totalPriceETH:(this.state.totalPrice*0.00000461).toFixed(6)
                    })
                })
            });
            break;
        case 'oil':
            var count=this.state.oilCount;
            count--;
            this.setState({
               oilCount:count
            });
            this.setState({
                oilPrice:count*40
            },()=>{
                this.setState({
                    totalPrice:this.state.wheatPrice+this.state.ricePrice+this.state.sugarPrice+this.state.dalPrice+this.state.oilPrice
                },()=>{
                    this.setState({
                        totalPriceETH:(this.state.totalPrice*0.00000461).toFixed(6)
                    })
                })
            });
            break;
    }

    
}

minusButton(event){
    event.preventDefault();
    var item =event.target.name;
    switch(item){
        case 'wheatMinusButton':
            if(this.state.wheatCount>0){
                this.decreasePrice('wheat');
            }
            break;
        case 'riceMinusButton':
            if(this.state.riceCount>0){
                this.decreasePrice('rice');
            }
            break;
        case 'sugarMinusButton':
            if(this.state.sugarCount>0){
                this.decreasePrice('sugar');
            }
            break;
        case 'dalMinusButton':
            if(this.state.dalCount>0){
                this.decreasePrice('dal');
            }
            break;
        case 'oilMinusButton':
            if(this.state.oilCount>0){
                this.decreasePrice('oil');
            }
            break;

    }





}
plusButton(event){
    event.preventDefault();
    var item =event.target.name;
    switch(item){
        case 'wheatPlusButton':
            if(this.state.wheatCount<10){
                this.increasePrice('wheat');
            }
            break;
        case 'ricePlusButton':
            if(this.state.riceCount<10){
                this.increasePrice('rice');
            }
            break;
        case 'sugarPlusButton':
            if(this.state.sugarCount<10){
                this.increasePrice('sugar');
            }
            break;
        case 'dalPlusButton':
            if(this.state.dalCount<10){
                this.increasePrice('dal');
            }
            break;
        case 'oilPlusButton':
            if(this.state.oilCount<10){
                this.increasePrice('oil');
            }
            break;

    }
}




render(){

    return (

<div> 

    <Header activeSection='shop' />
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
                <button class="plus-btn" type="button" name="wheatMinusButton" onClick={this.minusButton}>-</button>
                <input type="text" name="name" value={this.state.wheatCount}></input>
                <button class="minus-btn" type="button" name="wheatPlusButton" onClick={this.plusButton}>+</button>
                <center><span><small>(Kg)</small></span></center>
            </div>

            <div class="total-price"> <b>{this.state.wheatPrice} ₹</b></div>

        </div>
        <hr></hr>

        <div class="item">
            <div class="image">
                <img src={riceImg}  alt="" />
            </div>
        
            <div class="description">
                <span><big><b>Rice</b></big></span>
            </div>
        
            <div class="quantity">
                <button class="plus-btn" type="button" name="riceMinusButton" onClick={this.minusButton}>-</button>
                <input type="text" name="name" value={this.state.riceCount}></input>
                <button class="minus-btn" type="button" name="ricePlusButton" onClick={this.plusButton}>+</button>
                <center><span><small>(Kg)</small></span></center>
            </div>
        
            <div class="total-price"><b>{this.state.ricePrice} ₹</b></div>

        </div>
        <hr></hr>

        <div class="item">
        
            <div class="image">
                <img src={sugarImg}   alt="" />
            </div>

            <div class="description">
                <span><big><b>Sugar</b></big></span>
            
            </div>

            <div class="quantity">
                <button class="plus-btn" type="button" name="sugarMinusButton" onClick={this.minusButton}>-</button>
                <input type="text" name="name" value={this.state.sugarCount}></input>
                <button class="minus-btn" type="button" name="sugarPlusButton" onClick={this.plusButton}>+</button>
                <center><span><small>(Kg)</small></span></center>
            </div>
            <div class="total-price"> <b>{this.state.sugarPrice} ₹</b></div>
            
        </div>
        <hr></hr>

        <div class="item">
        
            <div class="image">
                <img src={dalImg}   alt="" />
            </div>

            <div class="description">
                <span><big><b>Dal</b></big></span>
            
            </div>
            
            <div class="quantity">
                    <button class="plus-btn" type="button" name="dalMinusButton" onClick={this.minusButton}>-</button>
                    <input type="text" name="name" value={this.state.dalCount}></input>
                    <button class="minus-btn" type="button" name="dalPlusButton" onClick={this.plusButton}>+</button>
                    <center><span><small>(Kg)</small></span></center>
            </div>
            <div class="total-price"> <b>{this.state.dalPrice} ₹</b></div>
            
            
        
        </div>
        <hr></hr>

        <div class="item">
        
            <div class="image">
                <img src={oilImg}   alt="" />
            </div>

            <div class="description">
                <span><big><b>Oil</b></big></span>
            
            </div>

            <div class="quantity">
                <button class="plus-btn" type="button" name="oilMinusButton" onClick={this.minusButton}>-</button>
                <input type="text" name="name" value={this.state.oilCount}></input> 
                <button class="minus-btn" type="button" name="oilPlusButton" onClick={this.plusButton}>+</button>
                <center><span><small>(Litre)</small></span></center>
            </div>
            <div class="total-price"> <b>{this.state.oilPrice} ₹</b></div>
    
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
                <div id="headingSec">
                <span class="content"><b>Items </b></span> <span class="contentQuantity"><b>Quantity </b></span> <span class="contentPrice"><b>Price</b></span> 
                </div>
                
                <hr></hr>
                <div class="commodity">
                    <div id="commo">
                        <span class="commo-name">Wheat </span> <br></br>
                        <span class="commo-name">Rice </span>  <br></br>
                        <span class="commo-name">Sugar </span>  <br></br>
                        <span class="commo-name">dal </span> <br></br>
                        <span class="commo-name">oil </span>  <br></br>

                    </div>
                    <div id="commoQuantity">
                    <span class="commoQ">{this.state.wheatCount} </span><br></br>
                    <span class="commoQ">{this.state.riceCount} </span><br></br>
                    <span class="commoQ">{this.state.sugarCount} </span><br></br>
                    <span class="commoQ">{this.state.dalCount} </span><br></br>
                    <span class="commoQ">{this.state.oilCount} </span><br></br>

                    </div>

                    <div id="commoPrice">
                    <span class="commo-price"><b>{this.state.wheatPrice} ₹</b></span> <br></br>
                    <span class="commo-price"><b>{this.state.ricePrice} ₹</b></span> <br></br>
                    <span class="commo-price"><b>{this.state.sugarPrice} ₹</b></span> <br></br>
                    <span class="commo-price"><b>{this.state.dalPrice} ₹</b></span> <br></br>
                    <span class="commo-price"><b>{this.state.oilPrice} ₹</b></span> <br></br>

                    </div>
                  
                    
                </div>
                <hr></hr>
                <span class="totalIn" ><b>Total in Rs.</b></span> <span class="totalFull" id="totalPriceInRS">{this.state.totalPrice}</span><br></br>
                 <span class="totalIn"><b>Total in ETH</b></span><span class="totalFull">{this.state.totalPriceETH}</span><br></br>
                 <hr></hr>
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
