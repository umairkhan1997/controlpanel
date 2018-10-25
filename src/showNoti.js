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
import Drawers from './drawer';
import {getData} from './store/action/action'
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
const drawerWidth = 240;


const styles = theme => ({
  root: {
    flexGrow: 1,
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
});



class showNoti extends React.Component {
  state = {
    open: false,
    anchor: 'left',
    getData:[],
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
  componentWillMount(){
    this.props.getData();
  }
  
  render() {
    console.log(this.state.getData);
    
    const { classes, theme } = this.props;
    const { anchor, open } = this.state;

    // const drawer = (
      //   <Drawer
      //     variant="persistent"
    //     anchor={anchor}
    //     open={open}
    //     classes={{
    //       paper: classes.drawerPaper,
    //     }}
    //   >
    //     <div className={classes.drawerHeader}>
    //       <IconButton onClick={this.handleDrawerClose}>
    //         {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
    //       </IconButton>
    //     </div>
    //     <Divider />
    //     <List onClick={this.main.bind(this)}>Main</List>
    //     <Divider />
    //     <List onClick={this.addNoti.bind(this)}>Add Notification</List>
    //     <Divider />
    //     <List onClick={this.showNoti.bind(this)}> Show Notification</List>
    //   </Drawer>
    // );

    // let before = null;
    // let after = null;

    // if (anchor === 'left') {
    //   before = drawer;
    // } else {
    //   after = drawer;
    // }
let data=this.props.getDataa[0];
console.log(data);
    return (
      <div>
       {/* <div className={classes.root}> */}
        {/* <div className={classes.appFrame}>
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
           
            <h1>HI show notification</h1>
           
          </main>
          {after}
        </div> */}
        <Drawers >
          <h1>hey show noti</h1>


 <ul className="list-group">

 {data !== undefined ? Object.keys(data).map((x)=>{
   let oneObj = data[x];
   console.log(oneObj.name)
   return(
   <div>
   {/* <li className="travelcompany-input" >
   <span className="input-label">{ oneObj.name }</span>
 </li> */}
 <Card>
 <Typography gutterBottom variant="h5" component="h2">
            {oneObj.name}
          </Typography>
 <CardMedia
          className={oneObj.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <Typography gutterBottom variant="h5" component="h2">
            {oneObj.textfield}
          </Typography>
   </Card>
 </div>
)
 }) : null}
 </ul>
          </Drawers>
      </div>
    );
  }
}

// showNoti.propTypes = {
//   classes: PropTypes.object.isRequired,
//   theme: PropTypes.object.isRequired,
// };

function mapStateToProp(state){
    console.log(state,'state')
    return({
        // password: state.root.password,
        // email: state.root.email,
        // signData: state.root.signData,
        getDataa:state.root.getData
    })
  }
  
  function mapDispatchToProp(dispatch){
      
    return({
        
        // SignOut: () => { dispatch(SignOut()) },
        getData: () => { dispatch(getData()) }
       
    })
  }
  
// export default withStyles(styles, { withTheme: true })(showNoti);
//export default connect(mapStateToProp, mapDispatchToProp)(withStyles(styles,{ withTheme: true })(showNoti));
export default connect(mapStateToProp, mapDispatchToProp)(showNoti);

