import React ,{Component} from 'react';
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom';
import '../component_css/home.css';
import Header  from './header';

class Home extends Component {

  constructor(props){
    super(props);
  }


  render(){

    return (
        <div> 

            <Header/>

         
        </div>
    );

  }
  
}

export default Home;
