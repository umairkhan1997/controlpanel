import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import {submit} from './store/action/action';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { SignOut } from './store/action/action';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { next } from './store/action/action';

const styles = {
    button: {
      color:'white',
      fontSize:'18px',
    
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
        color:'white'
      },
      root:{
          flex:1
      },
      list: {
        width: 250,
      },
      fullList: {
        width: 'auto',
      },
      
}


class Main extends Component{
    constructor(props){
        super(props)
        this.state={
            password:"",
            email:"",
            top: false,
            left: false,
            bottom: false,
            right: false,
          }
    }

    toggleDrawer = (side, open) => () => {
        this.setState({
          [side]: open,
        });
      };

SignOut(){
  this.props.SignOut();
    //console.log(data); 
}

next(){
  this.props.history.push('/next');
}

render(){
    
    const sideList = (
        <div className={styles.list}>
          <List>hhh</List>
          <Divider />
          <List>sadkjs</List>
        </div>
      );
  
      const fullList = (
        <div className={styles.fullList}>
          <List>asdsaa</List>
          <Divider />
          <List>asdsad</List>
        </div>
      );
    return(
        <div className="App">
    {/* <AppBar position="static" color="default"
    
    title='welcome'> */}
        {/* <Toolbar>
          <IconButton className={styles.menuButton}  aria-label="Menu">
            <MenuIcon />
          </IconButton>
 <Button color="white" style={styles.button}>Log Out</Button>
        </Toolbar> */}
      {/* </AppBar> */}
      <div className={styles.root}>
      <AppBar position="static" color="default"
      title="welcome to control panel"
      >
        <Toolbar>
        <IconButton className={styles.menuButton} color="inherit" aria-label="Menu" onClick={this.toggleDrawer('left', true)}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
        <Button color="white" style={styles.button} onClick={this.SignOut.bind(this)}>Log Out</Button>
      </AppBar>
    </div>
    <div>
    <SwipeableDrawer
          anchor="left"
          open={this.state.left}
          onClose={this.toggleDrawer('left', false)}
          onOpen={this.toggleDrawer('left', true)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {fullList}
          </div>
        </SwipeableDrawer>
        </div>
    
  <h1>HI main</h1>
  <Button onClick={this.next.bind(this)}> next</Button>
</div>
    )
}

}


function mapStateToProp(state){
    console.log(state,'state')
    return({
        // password: state.root.password,
        // email: state.root.email,
        signData: state.root.signData,
    })
  }
  
  function mapDispatchToProp(dispatch){
      
    return({
        
        SignOut: () => { dispatch(SignOut()) },
       // next: () => { dispatch(next()) }
    })
  }
  export default connect(mapStateToProp, mapDispatchToProp)(Main)  ;