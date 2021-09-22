import React ,{Component} from 'react';
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom';
import '../component_css/header.css';

class Header extends Component {

  constructor(props){
    super(props);
    console.log(this.props.activeSection)
  }

  componentDidMount(){

    switch(this.props.activeSection){
      case 'home':
        document.getElementById('homeBar').className='active'
        break;
      case 'shop':
        document.getElementById('shopBar').className='active'
        break;
      case 'admin':
        document.getElementById('adminBar').className='active'
        break;
      case 'request':
        document.getElementById('requestBar').className='active'
        break;
      case 'rates':
        document.getElementById('rateBar').className='active'
        break;
      case 'admin':
        document.getElementById('adminBar').className='active'
        break;
    }

  }


  render(){

    return (
        <div>
            <ul class="header">
                <li><a id="homeBar" href="/home"> <i class="fa fa-home"></i> Home</a></li>
                <li><a href="/shop" id="shopBar"><i class="fa fa-shopping-cart"></i> Shop</a></li>
                <li><a href="/news" id="requestBar">Request</a></li>
                <li><a href="/rates" id="rateBar"><i class="fa fa-percent"></i> Rate</a></li>
                <li><a href="/contact" id="aboutBar">About</a></li>
                <li class="right"><a href="/admin" id="adminBar"><i class="fa fa-lock"></i> Admin</a></li>
            </ul>
         
        </div>
    );

  }
  
}

export default Header;
