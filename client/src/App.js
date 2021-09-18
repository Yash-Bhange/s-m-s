import React ,{Component} from 'react';
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom';
import Home from './components/home.js'
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
                  
                  <Redirect to="/home" />
                  
                    
            </Switch>
            
            </BrowserRouter>
         
        </div>
    );

  }
  
}

export default App;
