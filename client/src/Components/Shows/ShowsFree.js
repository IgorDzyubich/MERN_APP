import React, { useEffect } from "react";
import mainClasses from "../../styles/main.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getShows } from "../../Redux/actions/shows";
import { addFavouritesShow } from "../../Redux/actions/favouritesShows";
import Pagination from "@material-ui/lab/Pagination";
import { Divider, fade, makeStyles } from "@material-ui/core";
import Loading from "../Loading/Loading";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import blueGrey from "@material-ui/core/colors/blueGrey";
import Popover from '../Popover/Popover'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const lightGreyColor = blueGrey[200];

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
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
    width: "95%",
    [theme.breakpoints.up("sm")]: {
      width: "95%",
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
  alert: {
    width: '280px'
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function ShowsFree(props) {
  const dispatch = useDispatch();
  const [shows, setShows] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  useEffect(() => dispatch(getShows()), [dispatch]);
  const storeShows = useSelector((state) => state.ShowsReducer?.shows);
  useEffect(() => setShows(storeShows), [storeShows]);

  const handleChangeSearch = (event) => {
    setShows(storeShows);
    setIsLoading(true)
    if (event.target.value) {
      setShows(
        storeShows.filter((show) => show.name.toLowerCase().includes(event.target.value.toLowerCase()))
      );
    }
  };

  const handleChangeSearchFilter = (event, filterValue) => {
  
    setShows(storeShows);
    setIsLoading(true)
    if (event.target.value) {
        switch (filterValue) {
          case 'Show Status':
            setShows(
              storeShows.filter((show) => show.status.toLowerCase().includes(event.target.value.toLowerCase()))
            );
              break;
          case 'Show Type':
            setShows(
              storeShows.filter((show) => show.type.toLowerCase().includes(event.target.value.toLowerCase()))
            );
              break;
          case 'Rating':
            setShows(
              storeShows.filter((show) => show.rating.average > parseInt(event.target.value))
            );
              break;
          case 'Language':
            setShows(
              storeShows.filter((show) => show.language.toLowerCase().includes(event.target.value.toLowerCase()))
            );
              break;
          default:
              break;
        }
    }
  };
  
  const addFavouritesShowHandler = (event) => {
    event.preventDefault()
    setOpen(true)
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const classes = useStyles();
  const itemsPerPage = 12;
  const [page, setPage] = React.useState(1);
  const noOfPages = Math.ceil(shows.length / itemsPerPage);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const showView = (event, showId) => {
    if (event.target.type !== 'button') {
      props.history.push(`app/shows/${showId}`);
    }
  };

  return (
    <div style={{width: '100%'}}>
      {!isLoading && shows.length === 0 ? (
        <Loading />
      ) : (
        <div>
          <div style={{display: 'flex', justifyContent: 'space-between' }}>
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
            <Popover handleChangeSearchFilter={handleChangeSearchFilter}/>
          </div>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 gutters-sm">
            {shows
              .slice((page - 1) * itemsPerPage, page * itemsPerPage)
              .map((show) => {
                return (
                  <div className={"col mb-3"} key={show.id}>
                    <div
                      className={"card " + mainClasses.card}
                      onClick={(e) => showView.call(null, e, show.id)}
                    >
                      <div
                        style={{ height: "80px", backgroundColor: "silver" }}
                        className={"card-img-top"}
                      />
                      <div className="card-body text-center">
                        <img
                          src={show.image.medium}
                          style={{ width: "100%", marginTop: "-65px" }}
                          alt="Show"
                          className={"img-fluid img-thumbnail border-0 mb-3"}
                        />
                        <h5 className={"card-title"}>{show.name}</h5>
                        <p className={"text-secondary mb-1"}>
                          <b>Type:</b> {show.type}
                        </p>
                        <p className={"text-secondary mb-1"}>
                          <b>Status:</b> {show.status}
                        </p>
                        <p className={"text-muted font-size-sm"}>
                          <b>Language:</b> {show.language}
                        </p>
                      </div>
                      <div className={"card-footer"}>
                        <button
                          className={
                            "btn btn-light btn-sm bg-white has-icon btn-block"
                          }
                          type="button"
                          onClick={(e) => addFavouritesShowHandler.call(null, e)}
                        >
                          <i className={"material-icons"}>add</i> Add to
                          favourites
                        </button>
                        <button
                          className={
                            "btn btn-light btn-sm bg-white has-icon ml-2"
                          }
                          type="button"
                          onClick={(e) => addFavouritesShowHandler.call(null, e)}
                        >
                          <i className={"material-icons"}>share</i> Share
                        </button>
                        
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}>
            <Alert onClose={handleClose} severity={'info'} className={classes.alert}>
              {'Log In Please for this action'}
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
