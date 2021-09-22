import React ,{Component} from 'react';
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom';
import Home from './components/home.js'
import Shop from './components/shop.js'
import Admin from './components/admin.js'
import Rates from './components/rates.js'

import './App.css';

class App extends Component {

  constructor(props){
    super(props);
  }


  render(){

    return (
        <div> 
            <BrowserRouter>
            
            <Switch>
                  <Route exact path="/home" component={()=><Home />} />
                  <Route exact path="/shop" component={()=><Shop />} />
                  <Route exact path="/admin" component={()=><Admin />} />
                  <Route exact path="/rates" component={()=><Rates />} />
                  
                  <Redirect to="/home" />
                  
                    
            </Switch>
            
            </BrowserRouter>
         
        </div>
    );

  }
  
}

export default App;
