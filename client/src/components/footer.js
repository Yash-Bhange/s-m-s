import React ,{Component} from 'react';
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom';
import '../component_css/footer.css';

class Footer extends Component {

  render(){

    return (
        <footer class="footer-distributed">
 
                <div class="footer-left">
                
                <h3>Subsidiary Management <span>Using Blockchain</span></h3>
                
                
                <p class="footer-company-name">Walchand College Of Engineering ,Sangli <br></br> Mini-Project | SEM 7 | &copy; 2021</p>
                </div>
                
                <div class="footer-center">
                
                <div>
                <i class="fa fa-map-marker"></i>
                <p><span>21 Revolution Street</span> Delhi, India</p>
                </div>
                
                <div>
                <i class="fa fa-phone"></i>
                <p>+1 555 123456</p>
                </div>
                
                <div>
                <i class="fa fa-envelope"></i>
                <p>yashbhange888@gmail.com</p>
                </div>
                
                </div>
                
                <div class="footer-right">
                
                <p class="footer-company-about">
                <span><b>About the project</b></span>
               Subsidiary Management System using Blockchain for easy and Safe Allocation of Commodities !
                </p>
                
                <div class="footer-icons">
                
                <a href="#"><i class="fa fa-facebook-f"></i></a>
                <a href="#"><i class="fa fa-twitter-square"></i></a>
                <a href="#"><i class="fa fa-instagram"></i></a>
                <a href="#"><i class="fa fa-github"></i></a>
                
                </div>
                
                </div>
 
        </footer>
    );

  }
  
}

export default Footer;
