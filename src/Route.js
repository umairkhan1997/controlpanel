import React,{Component} from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,Redirect ,Switch
  } from 'react-router-dom'   
import createBrowserHistory from 'history/createBrowserHistory'
import App from './App'
import Main from './main'
import Login from './login'
import login from './login';
import firebase from 'firebase';
import Next from './next';
import notification from './notification';
import Drawers from './drawer';
import showNoti from './showNoti';
import fileInput from './fileinput';
const customHistory=createBrowserHistory()


function PrivateRoute ({component: Component, authed, ...rest}) {
    return (
      <Route
        {...rest}
        render={(props) => authed === true
          ? <Component {...props} />
          : <Redirect to={{pathname: '/', state: {from: props.location}}} />}
      />
    )
  }
  function PublicRoute ({component: Component, authed, ...rest}) {
    return (
      <Route
        {...rest}
        render={(props) => authed === false
          ? <Component {...props} />
          : <Redirect to='/notification' />}
      />
    )
  }


  
class CustomRoutes extends Component{
    constructor(props) {
        super(props)
        this.state = {
            authed: false
        }

    }

    componentDidMount() {
      let that = this
      firebase.auth().onAuthStateChanged(function (user) {
          if (user) {
              that.setState({
                  authed: true
              })
          } else {
              that.setState({
                  authed: false
              })
          }
      });
  }
    
    render(){
    return(
<Router history={customHistory}>
    
    <Switch>
        <PublicRoute authed={this.state.authed} exact path='/' component={login} />
        <PrivateRoute authed={this.state.authed}  path='/next' component={Next} />
        <PrivateRoute authed={this.state.authed}  path='/main' component={Main} />
        <PrivateRoute authed={this.state.authed}  path='/notification' component={notification} />
        <PrivateRoute authed={this.state.authed}  path='/drawer' component={Drawers} />
        <PrivateRoute authed={this.state.authed}  path='/showNoti' component={showNoti} />
        <PrivateRoute authed={this.state.authed}  path='/fileInput' component={fileInput} />
        {/* <PrivateRoute  authed={this.state.authed} path="/select" component={Select} />
        {/* <Route  path='/select' component={Select} /> */}
        {/* <PrivateRoute  authed={this.state.authed}  path='/donateForm' component={DonateForm} />  */}
        <hr />
        </Switch>
  
    
</Router>
    )
}
}

export default CustomRoutes;