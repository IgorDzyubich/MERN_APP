import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Route, Switch, NavLink, useRouteMatch } from "react-router-dom";
import { useSelector } from "react-redux";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import PeopleIcon from "@material-ui/icons/People";
import DashboardIcon from "@material-ui/icons/Dashboard";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MovieIcon from "@material-ui/icons/Movie";
import ToolbarMenu from "../ToolbarMenu/ToolbarMenu";
import Tooltip from "@material-ui/core/Tooltip";
import Hidden from "@material-ui/core/Hidden";
import User from "../User/User";
import UserProfile from "../UserProfile/UserProfile";
import Shows from "../Shows/Shows";
import Show from "../Shows/Show";
import Peoples from "../Peoples/Peoples";
import People from "../Peoples/People";
import Friend from "../Friend/Friend";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import ToolbarNotificationsMenu from "../ToolbarNotificationsMenu/ToolbarNotificationsMenu";
import ToolbarMessagesMenu from "../ToolbarMessagesMenu/ToolbarMessagesMenu";

const drawerWidth = 180;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",
    height: "100%",
  },
  appBar: {
    backgroundColor: "#b0bec5",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  flex: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  addMenu: {
    width: "max-content",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  arrow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function MiniDrawer(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  let match = useRouteMatch();

  const user = useSelector((state) => state.AuthReducer.user);

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
                <NavLink
                  to="/dashboard"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Mern-App
                </NavLink>
              </Typography>
            </Tooltip>
            <div className={classes.addMenu}>
              <Hidden only="xs">
                <h6 style={{ marginBottom: "0" }}>
                  Welcome, <b style={{ color: "#111" }}>{user.email}</b> !{" "}
                </h6>
              </Hidden>
              <ToolbarNotificationsMenu />
              <ToolbarMessagesMenu />
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
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </Tooltip>
        </div>
        <Divider />
        <List>
          <ListItem
            button
            key={"Dashboard"}
            onClick={() => props.history.push(`${match.url}`)}
          >
            <Tooltip title="Dashboard">
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
            </Tooltip>
            <ListItemText primary={"Dashboard"} />
          </ListItem>
          <Divider />
          <ListItem
            button
            key={"Shows"}
            onClick={() => props.history.push(`${match.url}/shows`)}
          >
            <Tooltip title="Shows">
              <ListItemIcon>
                <MovieIcon />
              </ListItemIcon>
            </Tooltip>
            <ListItemText primary={"Shows"} />
          </ListItem>
          <ListItem
            button
            key={"Peoples"}
            onClick={() => props.history.push(`${match.url}/peoples`)}
          >
            <Tooltip title="Peoples">
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
            </Tooltip>
            <ListItemText primary={"Peoples"} />
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar}>
          <Switch>
            <Route exact path={`${match.url}`} component={UserProfile} />
            <Route path={`${match.url}/friends/:id`} component={Friend} />
            <Route exact path={`${match.url}/peoples`} component={Peoples} />
            <Route path={`${match.url}/peoples/:id`} component={People} />
            <Route exact path={`${match.url}/shows`} component={Shows} />
            <Route path={`${match.url}/shows/:id`} component={Show} />
            <Route path={`${match.url}/loginUser`} component={User} />
            <Route path={`${match.url}/*`} component={NotFoundPage} />
          </Switch>
        </div>
      </main>
    </div>
  );
}
