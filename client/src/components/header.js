import React ,{Component} from 'react';
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom';
import '../component_css/header.css';

class Header extends Component {

  render(){

    return (
        <div>
            <ul class="header">
                <li><a class="active" href="/home"> <i class="fa fa-home"></i> Home</a></li>
                <li><a href="/shop"><i class="fa fa-shopping-cart"></i> Shop</a></li>
                <li><a href="#news">Request</a></li>
                <li><a href="#news"><i class="fa fa-percent"></i> Rate</a></li>
                <li><a href="#contact">About</a></li>
                <li class="right"><a href="#about"><i class="fa fa-lock"></i> Admin</a></li>
            </ul>
         
        </div>
    );

  }
  
}

export default Header;
