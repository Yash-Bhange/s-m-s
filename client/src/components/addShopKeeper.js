import React ,{Component} from 'react';
import '../component_css/addShopKeeper.css';
import Header from './header.js'

class AddShopkeeper extends Component {

  constructor(props){
    super(props);
    this.state={
      shopKeeperAddress:null
    }
    this.shopKeeperIdhandler=this.shopKeeperIdhandler.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
  }

  shopKeeperIdhandler(event){
    event.preventDefault();
    this.setState({
      shopKeeperAddress:event.target.value
    })
    
  }
  onSubmit(){
   
    console.log(this.state.shopKeeperAddress)

  }



  render(){

    return (
        <div>  


    <div >
          <Header activeSection='admin' />
          <br></br>
          <br></br>
          <br></br>
          
          
          <form >
           
            
          <div className="form-group" id="shopKeeperIdSection">
                 <input id="shopKeeperId" onChange={this.shopKeeperIdhandler}  type="text" value={this.state.shopKeeperAddress} className="form-control" placeholder="Enter ShopKeeper's Blockchain ID"  />
          </div>
          <br></br>

          <div id="addShopKeeperButtonSection">
              <a onClick={this.onSubmit} className="btn  btn-block" id="addShopKeeperButton" >Submit</a>
          </div>
          
             
             
             
         </form>
         
   </div> 
            
         
        </div>
    );

  }
  
}

export default AddShopkeeper;
