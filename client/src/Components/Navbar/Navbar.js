import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Route, Switch, NavLink, useRouteMatch } from 'react-router-dom';
import { useSelector } from 'react-redux'
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import PeopleIcon from '@material-ui/icons/People';
import Badge from '@material-ui/core/Badge';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AssignmentIcon from '@material-ui/icons/Assignment';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MovieIcon from '@material-ui/icons/Movie';
import MailIcon from '@material-ui/icons/Mail';
import ToolbarMenu from "../ToolbarMenu/ToolbarMenu";
import Tooltip from '@material-ui/core/Tooltip';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import Hidden from '@material-ui/core/Hidden';
import User from '../User/User'; 
import UserProfile from '../UserProfile/UserProfile'; 
import SubscriberDepartment from '../SubscriberDepartment/SubscriberDepartment';
import ContractsTable from '../Contracts/ContractsTable'; 
import Contract from '../Contracts/Contract/Contract';
import NewContract from '../Contracts/Contract/NewContract'
import Item2 from '../Item2/Item2'; 
import Item3 from '../Item3/Item3'; 
import Login from '../Login/Login';
import NewUser from '../NewUser/NewUser';
import ChangeUser from '../ChangeUser/ChangeUser';
import AllUsers from '../AllUsers/AllUsers';
import Shows from '../Shows/Shows';
import Show from '../Shows/Show';
import InputField from '../InputField/InputField';
import NotFoundPage from '../NotFoundPage/NotFoundPage'
import Dashboard from '../Dashboard/Dashboard'

const drawerWidth = 180;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    height: '100%'
  },
  appBar: {
    backgroundColor: '#b0bec5',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  flex: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  addMenu: {
    width: 'max-content',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  arrow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  }
}));

export default function MiniDrawer(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  let match = useRouteMatch();
  const user = useSelector(state => state.AuthReducer.user);
  // console.log('User', user)
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
        <Tooltip title="Show Menu">
          <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: open,
              })}
            >
              <MenuIcon />
            </IconButton>
        </Tooltip>
          <div className={classes.flex}>
          <Tooltip title="Home Page">
            <Typography variant="h6" noWrap>
              <NavLink to="/dashboard" style={{textDecoration: 'none', color: 'white'}}>Mern-App</NavLink>
            </Typography>
          </Tooltip>
            <div className={classes.addMenu}>
              <Hidden only="xs">
                <h6 style={{marginBottom:'0'}}>Welcome,  <b style={{color:'#111'}}>{user.email}</b> !</h6>
              </Hidden>
                <Tooltip title="Notifications">
                  <IconButton>
                      <Badge badgeContent={2} color="primary">
                      <NotificationsActiveIcon className={classes.cursor}/>
                      </Badge>
                  </IconButton>
                </Tooltip>
                <Tooltip title="Messages">
                  <IconButton>
                      <Badge badgeContent={4} color="primary">
                      <MailIcon className={classes.cursor}/>
                      </Badge>
                  </IconButton>
                </Tooltip>
                <ToolbarMenu />
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.arrow}>
        <Tooltip title="Hide Menu">
          <IconButton 
              onClick={handleDrawerClose}
            >
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
        </Tooltip>
        </div>
        <Divider/>
        <List>
            <ListItem button key={'Dashboard'} onClick={() => props.history.push(`${match.url}`) }>
              <Tooltip title="Dashboard">
                <ListItemIcon><DashboardIcon /></ListItemIcon>
              </Tooltip>
              <ListItemText primary={'Dashboard'} />
            </ListItem>
            {/* <ListItem button key={'All Users'} onClick={() => props.history.push(`${match.url}/allUsers`) }>
              <Tooltip title="All Users"><ListItemIcon><PeopleIcon /></ListItemIcon></Tooltip>
              <ListItemText primary={'All Users'} />
            </ListItem> */}
            <ListItem button key={'Shows'} onClick={() => props.history.push(`${match.url}/shows`) }>
              <Tooltip title="Shows"><ListItemIcon><MovieIcon /></ListItemIcon></Tooltip>
              <ListItemText primary={'Shows'} />
            </ListItem>
            {/* <ListItem button onClick={() => props.history.push(`${match.url}/contracts`) }>
              <Tooltip title="Contracts"><ListItemIcon><AssignmentIcon /></ListItemIcon></Tooltip>
              <ListItemText primary={'Contracts'} />
            </ListItem>
            <ListItem button onClick={() => props.history.push(`${match.url}/item1`) }>
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary='Item 1' />
            </ListItem>
            <ListItem button onClick={() => props.history.push(`${match.url}/item2`) }>
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary='Item 2' />
            </ListItem>
            <ListItem button onClick={() => props.history.push(`${match.url}/item3`) }>
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary='Item 3' />
            </ListItem> */}
          
        </List>
        <Divider/>
        <List>
          {['Friends', 'Best shows', 'Notifications', 'Messages'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar}>
            <Switch>
            <Route exact path='/logOut' render={ () => <Login /> } />
            <Route exact path={`${match.url}`} component={UserProfile} />
            <Route path={`${match.url}/allUsers/userProfile/:id`} component={UserProfile} />
            <Route path={`${match.url}/userProfile/:id`} component={User} />
            <Route path={`${match.url}/changeUserProfile`} component={ChangeUser} />
            <Route path={`${match.url}/newUser`} component={NewUser} />
            <Route exact path={`${match.url}/contracts`} component={ContractsTable} />
            {/* <Route exact path={`${match.url}/contracts`} component={Contracts} /> */}
            <Route path={`${match.url}/contracts/contract/:id`} component={Contract} />
            <Route path={`${match.url}/contracts/contract`} component={NewContract} />
            <Route path={`${match.url}/item1`} component={SubscriberDepartment} />
            <Route path={`${match.url}/item2`} component={Item2} />
            <Route path={`${match.url}/item3`} component={Item3} />
            <Route path={`${match.url}/allUsers`} component={AllUsers} />
            <Route exact path={`${match.url}/shows`} component={Shows} />
            <Route path={`${match.url}/shows/:id`} component={Show} />
            <Route path={`${match.url}/inputField`} component={InputField} />
            <Route path={`${match.url}/loginUser`} component={User} />
            <Route path={`${match.url}/*`} component={NotFoundPage} />
            </Switch>
        </div>
      </main>
    </div>
  );
}
