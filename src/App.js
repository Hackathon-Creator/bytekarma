import React from 'react';
import './App.css';
import Navigation from './components/Navbar';
import Routes from './Routes';
import Login from './Login/Login';
import DataUpload from "./DataUpload/DataUpload";
import Home from "./Home/Home";
import history from './history';
import PrivacyPolicy from "./PrivacyPolicy/PrivacyPolicy";
import Help from "./Help/Help";
import PieChart from "./RiskUserData/PieChart";
import MasterSearch from "./Search/MasterSearch";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";


import {
  BrowserRouter,
  Link,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

const DefaultContainer = () => (
  <div>
  {/* <Header toggleAlert={this.toggleAlert} /> */}
  <div className="container">
    <Navigation />
    <Route path="/Home" exact component={PieChart} />
                    <Route path="/MasterSearch" component={MasterSearch} />
                    <Route path="/DataUpload" component={DataUpload} />
                    <Route path="/PrivacyPolicy" component={PrivacyPolicy} />
                    <Route path="/Help" component={Help} />
    {/* {this.state.isAlertOpen ? <Alert /> : null} */}
  </div>
  </div>
)

const LoginContainer = () => (
  <div>
    <Route exact path="/" render={() => <Redirect to="/login" /> } component={Login} />
    <Route path="/login" component={Login} />
  </div>
)
function App() {
  console.log(window.location.protocol);
  console.log(window.location.pathname);
  console.log(window.location.hostname);

  if(window.location.pathname == "/"){
    return (
      // <div className="App">
        
      //   {/* <Navigation /> */}
      //   <Login></Login>
      //   {/* <Routes /> */}
      <div>
        <BrowserRouter>
    <Switch>
    <div className="App">
      
      
      
    <Route exact path="/" component={LoginContainer}/>      
    </div>
    </Switch>
  </BrowserRouter>
      </div>
    );
    
  }else{
    return (
      // <div className="App">
        
      //   {/* <Navigation /> */}
      //   <Login></Login>
      //   {/* <Routes /> */}
      <div>
        <BrowserRouter>
    <Switch>
    <div className="App">
      
      
      
      <Navigation>
       
      </Navigation>
      <Routes></Routes>
    </div>
    </Switch>
  </BrowserRouter>
      </div>
    );
  }
  
}

export default App;
