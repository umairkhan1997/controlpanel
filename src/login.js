import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import {submit} from './store/action/action';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {signIn} from './store/action/action';



class Login extends Component{
    constructor(props){
        super(props)
        this.state={
            password:"",
            email:"",
      
          }
    }

    formHandler(ev){
        this.setState({
          [ev.target.name]  : ev.target.value,
    
    })
    console.log(ev.target.value)
}

signIn(ev){
    ev.preventDefault();
    if(document.getElementById("email").value===""){
      alert("Please enter email first")
    }
    else if(document.getElementById("password").value===""){
      alert("Please enter Password aslo")
    }
    else{
    let data={
        password:this.state.password,
      email:this.state.email
    }
  
    this.props.signIn(data);
    console.log(data);
 
  }
  
  }

render(){
    return(
//         <div className="App">
//         <AppBar className="appbar"
//    title="Welcome To Blood Bank"
//    iconClassNameRight="muidocs-icon-navigation-expand-more"
//  />
     <div className="mainStart">
     <form className="mainForm" onSubmit={this.signIn.bind(this)}>
 <div className="form-group">
   <label for="exampleInputName1">Email :</label>
   <TextField
     hintText="Enter Email"
      id="email"  name="email" type="email"  onChange={this.formHandler.bind(this)}/>
 </div>
 <div className="form-group">
   <label for="exampleInputEmail1">Password :</label>
   <TextField
     hintText="Enter Password"
      id="password"  name="password" type="password" onChange={this.formHandler.bind(this)}/>
 </div>
 <div className="form-check">
 </div>
 <RaisedButton label="Sign In" type="submit" primary={true}    />
</form>
  </div> 
//   <h1>HI login</h1>
// </div>
    )
}

}


function mapStateToProp(state){
    console.log(state,'state')
    return({
        password: state.root.password,
        email: state.root.email,
    })
  }
  
  function mapDispatchToProp(dispatch){
    return({
        signIn:(data)=>dispatch(signIn(data))
    })
  }
  export default connect(mapStateToProp, mapDispatchToProp)(Login)  ;