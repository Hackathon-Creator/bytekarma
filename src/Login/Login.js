import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import React, { Component } from 'react';
// import injectTapEventPlugin from 'react-tap-event-plugin';
import '../Login/Login.css' ;
// injectTapEventPlugin();
import Navigation from '../components/Navbar';
// import Routes from './Routes';
import loginDetails from '../Data/loginDetails.json';
import { cloneDeep } from 'lodash';
export default class Login extends Component {
  constructor(props){
    super(props);
    this.state={
    username:'',
    password:'',
    authorized:true,
    loginDetails: [
      {
        "username":"Abhishek",
        "password":"1234",
        "name":"Abhishek Tripathi"
      },
        {
        "username":"Bipil",
        "password":"1234",
        "name":"Bipil Raut"
      },
       {
        "username":"Manish",
        "password":"1234",
        "name":"Manish Thete"
      }
      
    ]

    }
   }

   handleClick(event){
    console.log(this.state.data);
    
    if(this.isAuthorized()){
      
      window.location.pathname="/home";
    }else{
    
      this.setState({authorized:false});
      return;
      
    }
    var apiBaseUrl = "http://localhost:4000/api/";
    var self = this;
    var payload={
    "username":this.state.username,
    "password":this.state.password
    }
    axios.post(apiBaseUrl+'login', payload)
    .then(function (response) {
    console.log(response);
    if(response.data.code == 200 || true){
    console.log("Login successfull");
    var uploadScreen=[];
    uploadScreen.push(<Navigation appContext={self.props.appContext}/>)
    self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
    // <Route exact path ="/Nav" component={Navigation}/>
    // <Route exact path="/Routes" component={Routes}/>
    }
    else if(response.data.code == 204){
    console.log("Username password do not match");
    alert("username password do not match")
    }
    else{
    console.log("Username does not exists");
    alert("Username does not exist");
    }
    })
    .catch(function (error) {
    console.log(error);
    });
    }
    isAuthorized(){
      for (let index = 0; index < this.state.loginDetails.length; index++) {
        const element = this.state.loginDetails[index];
        if(element.username==this.state.username && element.password==this.state.password){
        
        this.setState({name:element.name});
        localStorage.setItem("name",element.name);
        return true;
      }
     }
     return false;
    }
  render() {
    
      return (
          <form className="loginPage">
              <h3>Sign In</h3>

              <MuiThemeProvider>
          <div>
          
           <TextField
             hintText="Enter your Username"
             floatingLabelText="Username"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
         </div>
         </MuiThemeProvider>
         {!this.state.authorized  &&  <div class="alert alert-danger" role="alert">
  Invalid credentials! Please enter correct username and password.
</div>} 
        
          </form>
      );
  }
  
}
const style = {
  margin: 15,
 };