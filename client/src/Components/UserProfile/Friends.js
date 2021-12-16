import React, { useEffect } from "react";
import mainClasses from "../../styles/main.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getFriends, deleteFriends } from "../../Redux/actions/friends";
import Pagination from "@material-ui/lab/Pagination";
import { Divider, fade, makeStyles } from "@material-ui/core";
import Loading from "../Loading/Loading";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import blueGrey from "@material-ui/core/colors/blueGrey";

const lightGreyColor = blueGrey[200];

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  alert: {
    width: '250px'
  },
  item: {
    padding: theme.spacing(1.2),
    height: "40px",
    fontSize: "1.5rem",
  },
  paginator: {
    justifyContent: "center",
    padding: "10px",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    border: "1px solid",
    borderColor: lightGreyColor,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: 0,
    marginLeft: 0,
    marginBottom: "15px",
    marginTop: "8px",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "100%",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: lightGreyColor,
  },
  inputRoot: {
    color: "inherit",
    width: "100%",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Friends(props) {
  const dispatch = useDispatch();
  const [friends, setFriends] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  useEffect(() => {
    dispatch(getFriends());
  }, [dispatch]);


  const storeFriends = useSelector((state) => {
    return state.FriendsReducer?.friends;
  });

  useEffect(() => setFriends(storeFriends), [storeFriends]);

  const classes = useStyles();
  const itemsPerPage = 8;
  const [page, setPage] = React.useState(1);
  const noOfPages = Math.ceil(friends.length / itemsPerPage);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const handleChangeSearch = (event) => {
    setFriends(storeFriends);
    setIsLoading(true)
    if (event.target.value) {
      setFriends(
        storeFriends.filter((friend) => friend.name.toLowerCase().includes(event.target.value.toLowerCase()))
      );
    }
  };

  const changeUser = (event, userId) => {
    if (event.target.type !== "button") {
      props.history.push(`${props.match.path}/friends/${userId}`);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const deleteFriendsHandler = (event, friendId) => {
    event.preventDefault();
    dispatch(deleteFriends(friendId));
    setOpen(true);
    setFriends(friends.filter((el) => el._id !== friendId));
  };

  return (
    <div style={{width: '100%'}}>
      {!isLoading && friends.length === 0 ? (
        <Loading />
      ) : (
        <div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search by name…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
                onChange={handleChangeSearch}
              />
            </div>
          </div>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 gutters-sm">
            {friends
              .slice((page - 1) * itemsPerPage, page * itemsPerPage)
              .map((friend) => {
                return (
                  <div className={"col mb-3"} key={friend._id}>
                    <div
                      className={"card " + mainClasses.card}
                      onClick={(e) => changeUser.call(null, e, friend.id)}
                    >
                      <img
                        src="https://via.placeholder.com/340x120/90caf9/000000"
                        alt="Cover"
                        className={"card-img-top"}
                      />
                      <div className="card-body text-center">
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar7.png"
                          style={{ width: "100px", marginTop: "-65px" }}
                          alt="User"
                          className={
                            "img-fluid img-thumbnail rounded-circle border-0 mb-3"
                          }
                        />
                        <h5 className={"card-title"}>{friend.name}</h5>
                        <p className={"text-secondary mb-1"}>{friend.email}</p>
                      </div>
                      <div className={"card-footer"}>
                        <button
                          className={
                            "btn btn-light btn-sm bg-white has-icon btn-block"
                          }
                          type="button"
                          onClick={(e) =>
                            deleteFriendsHandler.call(null, e, friend._id)
                          }
                        >
                          <i className={"material-icons"}>delete</i>Delete
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}>
            <Alert onClose={handleClose} severity={'info'} className={classes.alert}>
              {'Show deleted'}
            </Alert>
          </Snackbar>
        </div>
      )}
      <Divider />
      <Pagination
        count={noOfPages}
        page={page}
        onChange={handleChange}
        defaultPage={1}
        color="primary"
        size="large"
        showFirstButton
        showLastButton
        classes={{ ul: classes.paginator }}
      />
    </div>
  );
}
