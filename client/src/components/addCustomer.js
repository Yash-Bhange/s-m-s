import React ,{Component} from 'react';
import '../component_css/addCustomer.css';
import Header from './header.js'
import db from '../helper/firebase.js'
import { collection, addDoc } from "firebase/firestore"; 

class AddCustomer extends Component {

  constructor(props){
    super(props);
    this.state={
      customerAddress:null
    }
    this.customerIdhandler=this.customerIdhandler.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
  }


  customerIdhandler(event){
    event.preventDefault();
    this.setState({
      customerAddress:event.target.value
    })
    
  }


  async onSubmit(){
    var criteria=document.querySelector('input[name="radio1"]:checked').value;
    console.log(criteria,this.state.customerAddress)


    const docRef = await addDoc(collection(db, "customers"), {
      bcidid: this.state.customerAddress,
      category:criteria,
      name:"yash",
      location:"nagpur"
    });
    console.log("Document written with ID: ", docRef.id);

    /*db.collection('customers').add({
       bcid: this.state.customerAddress,
       category:criteria,
       name:"yash",
       location:"nagpur"
      })
      .then((result)=>{
        console.log("result : "+result)
        alert("successfully registerd !")

      })
      .catch((err)=>{
          console.log("error : "+err)
          alert("error occured")
      }) 
  
     collection(db,"customers").add({
      id: this.state.customerAddress,
      category:criteria,
      name:"yash",
      location:"nagpur"
      }).then((result)=>{
        console.log("result : "+result)
        alert("successfully registerd !")

      })
      .catch((err)=>{
          console.log("error : "+err)
          alert("error occured")
      })*/

  }


  render(){

    return (
       <div>  


    <div >
          <Header activeSection='admin' />
          <br></br>
          <br></br>
          <br></br>
          
          
          <form>
           
            
          <div className="form-group" id="customerIdSection">
                 <input id="customerId" onChange={this.customerIdhandler} type="text" value={this.state.customerAddress} className="form-control" placeholder="Enter customer's Blockchain ID"  />
          </div>
          <br></br>
          <div id="radioSection">

              <div id="radioSectionLeft">
                <input type="radio" name="radio1" value="refugee"></input>
                <label>&emsp; Refugee </label>  <br></br>
                <input type="radio" name="radio1" value="apl"></input>
                <label>&emsp; Above Poverty Line </label> <br></br>
                <input type="radio" name="radio1" value="bpl"></input>
                <label>&emsp; Below Poverty Line </label> <br></br>
              </div>
          
          </div>
          <br></br>


          <div id="addcustomerButtonSection">
              <a  className="btn  btn-block" id="addcustomerButton" onClick={this.onSubmit} >Submit</a>
          </div>

         </form>
         
   </div> 
            
         
        </div>
    );

  }
  
}

export default AddCustomer;
