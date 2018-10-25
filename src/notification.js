import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
//import { mailFolderListItems, otherMailFolderListItems } from './tileData';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from '@material-ui/core/Paper';
import FilledInput from '@material-ui/core/FilledInput';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import {addNotifi} from './store/action/action'

const drawerWidth = 240;

const inputProps = {
  step: 300,
};
const styles = theme => ({
  root: {
    flexGrow: 1,
    height:'100%',
    
  },
  appFrame: {
    height: 430,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
    height:'100%',
  },
  appBar: {
    position: 'absolute',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  'appBarShift-left': {
    marginLeft: drawerWidth,
  },
  'appBarShift-right': {
    marginRight: drawerWidth,
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  button:{
margin:5,marginTop:50
  },
  hide: {
    display: 'none',
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  'content-left': {
    marginLeft: -drawerWidth,
  },
  'content-right': {
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  'contentShift-left': {
    marginLeft: 0,
  },
  'contentShift-right': {
    marginRight: 0,
  },
  'h1':{
    textAlign: 'center', 
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
  },
  roots: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width:'50%',
    marginLeft:'25%',
    Height:'50%'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
    borderWidth:'1px',
    
  },
  button1:{
    marginLeft:"80%",
  }
});



class notification extends React.Component {
  state = {
    open: false,
    anchor: 'left',
    name:'',
    textfield:'',
    notifi:{},
    file: '',
    imagePreviewUrl: '',
    file:'',
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleChangeAnchor = event => {
    this.setState({
      anchor: event.target.value,
    });
  };

  main(){
    this.props.history.push('/main')
    
    }
    addNoti(){
      this.props.history.push('/notification')
    }
    showNoti(){
      this.props.history.push('/showNoti')
    }
    formHandler(ev){
      this.setState({
        inputValue  : ev.target.value,
        // name:ev.target.value,
        // textfield:ev.target.value,
        [ev.target.name]: ev.target.value
  
  })
  console.log(ev.target.value)
}
submit(){
  if(this.state.name==="" && this.state.textfield==="" ){
    alert("Enter the fields");
}
else if(this.state.name===""  ){
  alert("Enter the name field");
}
else if(this.state.textfield==="")
{
  alert("Enter the text Field")
}
else{  
// this.setState({})

let notifi={ name : this.state.name,textfield:this.state.textfield,file:this.state.file}
console.log(notifi,"notifivation file")
this.props.addNotifi(notifi)
this.setState({name:'',textfield:''})
}
}
_handleImageChange(e) {
  e.preventDefault();

  let reader = new FileReader();
  let file = e.target.files[0];
console.log(file);
this.setState({file:file})
console.log(this.state.file);
  // reader.onloadend = () => {
  //   this.setState({
  //     file: file,
  //     imagePreviewUrl: reader.result
  //   });
  // }

  // reader.readAsDataURL(file)
}
  render() {
    console.log(this.state.file);
    const { classes, theme } = this.props;
    const { anchor, open } = this.state;

    const drawer = (
      <Drawer
        variant="persistent"
        anchor={anchor}
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={this.handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List onClick={this.main.bind(this)}>Main</List>
        <Divider />
        <List onClick={this.addNoti.bind(this)}>Add Notification</List>
        <Divider />
        <List onClick={this.showNoti.bind(this)}> Show Notification</List>
      </Drawer>
    );

    let before = null;
    let after = null;

    if (anchor === 'left') {
      before = drawer;
    } else {
      after = drawer;
    }
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }
    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <AppBar
            className={classNames(classes.appBar, {
              [classes.appBarShift]: open,
              [classes[`appBarShift-${anchor}`]]: open,
            })}
          >
            <Toolbar disableGutters={!open}>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleDrawerOpen}
                className={classNames(classes.menuButton, open && classes.hide)}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="title" color="inherit" noWrap>
                Control panel
              </Typography>
            </Toolbar>
          </AppBar>
          {before}
          <main
            className={classNames(classes.content, classes[`content-${anchor}`], {
              [classes.contentShift]: open,
              [classes[`contentShift-${anchor}`]]: open,
            })}
          >
            <div className={classes.drawerHeader} />
           
            <h1 className={classes.h1}>Add Notification</h1>
            <div>
            <Paper className={classes.roots} elevation={1}>
        <Typography variant="h5" component="h3">
          Note :
        </Typography>
        <Typography component="p">
         Please fill all inputs and check before submit
        </Typography>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="component-simple">Name</InputLabel>
          <Input id="component-simple" type="text" name="name" value={this.state.name} onChange={this.formHandler.bind(this)} />
        </FormControl>
        <br />
        <TextField
          id="standard-multiline-static"
          label="Description"
          multiline
          rows="4"
          defaultValue="Enter description here"
          className={classes.textField}
          margin="normal"
          type="text"
          name="textfield"
          value={this.state.textfield} onChange={this.formHandler.bind(this)}
        />
        <br />
          <Button variant="contained" color="primary" className={classes.button}   type="file" 
            >
        Selet Picture
      </Button>
      <Button variant="contained" color="primary" className={classes.button1} onClick={this.submit.bind(this)}>
        Add Notification
      </Button>
      <div className="previewComponent">
        <form onSubmit={(e)=>this._handleSubmit(e)}>
          <input className="fileInput" 
            type="file" 
            onChange={(e)=>this._handleImageChange(e)} />
          {/* <button className="submitButton" 
            type="submit" 
            onClick={(e)=>this._handleSubmit(e)}>Upload Image</button> */}
        </form>
        <div className="imgPreview">
          {$imagePreview}
          
        </div>
        </div>
      </Paper>
      </div>
          </main>
          {after}
        </div>
      </div>
    );
  }
}

notification.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

function mapStateToProp(state){
  console.log(state,'state')
  return({
      // password: state.root.password,
      // email: state.root.email,
      // signData: state.root.signData,
  })
}

function mapDispatchToProp(dispatch){
    
  return({
      
      // SignOut: () => { dispatch(SignOut()) },
     // next: () => { dispatch(next()) }
     addNotifi:(notifi)=>{dispatch(addNotifi(notifi))}
     
  })
  
}


// export default withStyles(styles, { withTheme: true })(notification);
export default connect(mapStateToProp, mapDispatchToProp)(withStyles(styles,{ withTheme: true })(notification));


