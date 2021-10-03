import React ,{Component} from 'react';
import '../component_css/addShopKeeper.css';
import Header from './header.js'
import db from '../helper/firebase.js'
import { collection,doc, getDoc , addDoc } from "firebase/firestore"; 

class AddShopkeeper extends Component {

  constructor(props){
    super(props);
    this.state={
      shopKeeperAddress:null,
      name:null,
      location:null
    }
    this.shopKeeperNameHandler=this.shopKeeperNameHandler.bind(this);
    this.shopKeeperLocationHandler=this.shopKeeperLocationHandler.bind(this);
    this.shopKeeperIdhandler=this.shopKeeperIdhandler.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
  }

  shopKeeperIdhandler(event){
    event.preventDefault();
    this.setState({
      shopKeeperAddress:event.target.value
    })
    
  }
  shopKeeperNameHandler(event){
    event.preventDefault();
    this.setState({
      name:event.target.value
    })
    
  }
  shopKeeperLocationHandler(event){
    event.preventDefault();
    this.setState({
      location:event.target.value
    })
    
  }

  async onSubmit(){
   
    console.log(this.state.shopKeeperAddress);

    const docRef = await addDoc(collection(db, "shopkeepers"), {
      bcid: this.state.shopKeeperAddress,
      name:this.state.name,
      location:this.state.location
    });
    console.log("Document written with ID: ", docRef.id);
    alert("ShopKeeper added successfully !")

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
                 <input id="shopKeeperId" onChange={this.shopKeeperNameHandler}  type="text" value={this.state.name} className="form-control" placeholder="Enter ShopKeeper's Name"  /><br></br>
                 <input id="shopKeeperId" onChange={this.shopKeeperLocationHandler}  type="text" value={this.state.location} className="form-control" placeholder="Enter ShopKeeper's Location"  /> <br></br>
                 <input id="shopKeeperId" onChange={this.shopKeeperIdhandler}  type="text" value={this.state.shopKeeperAddress} className="form-control" placeholder="Enter ShopKeeper's Blockchain ID"  /> <br></br>
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
