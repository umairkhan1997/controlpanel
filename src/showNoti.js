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
import { getData, deleteOne } from './store/action/action'
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';


const drawerWidth = 240;
const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100%',
  },
  appFrame: {
    height: 430,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
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
  avatar: {
    backgroundColor: 'red[500]',
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
    getData: [],
    expanded: false,
    anchorEl: null,
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

  main() {
    this.props.history.push('/main')

  }
  addNoti() {
    this.props.history.push('/notification')
  }
  showNoti() {
    this.props.history.push('/showNoti')
  }
  fileInput(){
    this.props.history.push('/fileInput');
  }
  componentWillMount() {
    this.props.getData();
  }
  componentDidMount(){
    this.props.getData();
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };
  6
  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  deleteOne = (id,index) => {
     this.props.deleteOne(id,index);
    console.log(id,index)
    //this.props.history.push('/showNoti')
    // window.location.reload(); 
  }

  render() {
    const { anchorEl } = this.state;

    console.log(this.state.getData);

    const { classes, theme } = this.props;
    const { anchor, open } = this.state;

    const drawer = (
      <Drawer
        variant="persistent"
        anchor={anchor}
        open={open}
        classes={{
          paper: styles.drawerPaper,
        }}
      >
        <div className={styles.drawerHeader}>
          {/* <IconButton onClick={this.handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton> */}
        </div>
        <div>
        <Divider />
        <List onClick={this.main.bind(this)}>Main</List>
        <Divider />
        <List onClick={this.addNoti.bind(this)}>Add Notification</List>
        <Divider />
        <List onClick={this.showNoti.bind(this)}> Show Notification</List>
        <Divider />
        <List onClick={this.fileInput.bind(this)}> Add File</List>
        </div>
        </Drawer>
    );

    let before = null;
    let after = null;

    if (anchor === 'left') {
      before = drawer;
    } else {
      after = drawer;
    }
    let data = this.props.getDataa[0];
    console.log(data);
    return (
      // <div className={styles.root}>
      <div className={styles.root}>
        <div className={styles.appFrame}>
          <AppBar
            className={classNames(styles.appBar, {
              [styles.appBarShift]: open,
              [styles[`appBarShift-${anchor}`]]: open,
            })}
          >
            <Toolbar disableGutters={!open}>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleDrawerOpen}
                className={classNames(styles.menuButton, open && styles.hide)}
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
            className={classNames(styles.content, styles[`content-${anchor}`], {
              [styles.contentShift]: open,
              [styles[`contentShift-${anchor}`]]: open,
            })}
          >
            <div className={styles.drawerHeader} />

            <h1>HI show notification</h1>

          </main>
          {after}
        </div>
        {/* <Drawers > */}
        <h1>hey show noti</h1>


        <ul className="list-group">
          <div>{data !== undefined ? Object.keys(data).map((key,index) => {
            let oneObjNew = data[key]
             oneObjNew.index=index
            return(<div> 
              {/* <button onClick={()=>this.deleteOne(key)}>{key}</button> */}
              <Card >

<CardHeader

  action={

    <IconButton>
      <MoreVertIcon />

    </IconButton>

  } onClick={this.handleClick}
  title={oneObjNew.name}
  subheader="September 14, 2016"

/>
<Menu
  id="simple-menu"
  anchorEl={anchorEl}
  open={Boolean(anchorEl)}
  onClose={this.handleClose}
  style={{ float: "right" }}
>
  <MenuItem onClick={this.handleClose}>Edit</MenuItem>
  {/* <MenuItem onClick={this.editTodo.bind(this,oneObj.key,index)}>Delete</MenuItem> */}
  <MenuItem onClick={() => this.deleteOne(key)}>Delete</MenuItem>
  
</Menu>
<Typography gutterBottom variant="h5" component="h2">
  {oneObjNew.name}
</Typography>
{/* <Typography gutterBottom variant="h5" component="h2">
{oneObj.uri}
</Typography> */}
{oneObjNew.file !== undefined ?
  <img src={oneObjNew.file} style={{ width: 20, height: 20 }} />
  :
  <img src={require('./image/clock.jpeg')} style={{ width: 20, height: 20 }} />
}

<Typography gutterBottom variant="h5" component="h2">
  {oneObjNew.textfield}
</Typography>
<button onClick={()=>this.deleteOne(key,index)}>Delete</button>
</Card>
          
          </div>
          )
          }) : null
        
        }
        
          </div>
          
          {/* {data !== undefined ? Object.keys(data).map((x, index) => {
            console.log(x)
            let oneObj = data[x];
            oneObj.key = x
            oneObj.index = index
            console.log(oneObj.key)
            console.log(oneObj.index)
            console.log(oneObj)
            return (
              <div>
               
                <Card >

                  <CardHeader
                  
                    action={

                      <IconButton>
                        <MoreVertIcon />

                      </IconButton>

                    } onClick={this.handleClick}
                    title={oneObj.name}
                    subheader="September 14, 2016"

                  />
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                    style={{ float: "right" }}
                  >
                    <MenuItem onClick={this.handleClose}>Edit</MenuItem>
                   
                    <MenuItem onClick={() => this.deleteOne(x)}>Delete</MenuItem>
                  </Menu>
                  <Typography gutterBottom variant="h5" component="h2">
                    {oneObj.name}
                  </Typography>
                
                  {oneObj.file !== undefined ?
                    <img src={oneObj.file} style={{ width: 20, height: 20 }} />
                    :
                    <img src={require('./image/clock.jpeg')} style={{ width: 20, height: 20 }} />
                  }
              
                  <Typography gutterBottom variant="h5" component="h2">
                    {oneObj.textfield}
                  </Typography>
                </Card>
              </div>
            )
          }) : null} */}
        </ul>
        
      </div>
    );
  }
}

// showNoti.propTypes = {
//   classes: PropTypes.object.isRequired,
//   theme: PropTypes.object.isRequired,
// };

function mapStateToProp(state) {
  console.log(state, 'state')
  return ({
    // password: state.root.password,
    // email: state.root.email,
    // signData: state.root.signData,
    getDataa: state.root.getData
  })
}

function mapDispatchToProp(dispatch) {

  return ({

    // SignOut: () => { dispatch(SignOut()) },
    getData: () => { dispatch(getData()) },
    deleteOne: (id,index) => { dispatch(deleteOne(id,index)) },

  })
}

// export default withStyles(styles, { withTheme: true })(showNoti);
//export default connect(mapStateToProp, mapDispatchToProp)(withStyles(styles,{ withTheme: true })(showNoti));
export default connect(mapStateToProp, mapDispatchToProp)(showNoti);

