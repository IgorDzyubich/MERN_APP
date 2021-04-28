import React, { useEffect } from "react";
import mainClasses from "../../styles/main.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getFavouritesShows, deleteFavouritesShow } from "../../Redux/actions/favouritesShows";
import Pagination from "@material-ui/lab/Pagination";
import { Divider, fade, makeStyles } from "@material-ui/core";
import Loading from "../Loading/Loading";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import blueGrey from "@material-ui/core/colors/blueGrey";
import Popover from '../Popover/Popover'

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
}));

export default function Shows(props) {
  const dispatch = useDispatch();
  const [shows, setShows] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  useEffect(() => {
    dispatch(getFavouritesShows())
    }, [dispatch]);
  const storeFavouritesShows = useSelector((state) => state.FavouritesShowsReducer?.shows);

  useEffect(() => setShows(storeFavouritesShows), [storeFavouritesShows]);
  
  const handleChangeSearch = (event) => {
    setShows(storeFavouritesShows);
    setIsLoading(true)
    if (event.target.value) {
      setShows(
        storeFavouritesShows.filter((show) => show.name.toLowerCase().includes(event.target.value.toLowerCase()))
      );
    }
  };

  const handleChangeSearchFilter = (event, filterValue) => {
  
    setShows(storeFavouritesShows);
    setIsLoading(true)
    if (event.target.value) {
        switch (filterValue) {
          case 'Show Status':
            setShows(
              storeFavouritesShows.filter((show) => show.status.toLowerCase().includes(event.target.value.toLowerCase()))
            );
              break;
          case 'Show Type':
            setShows(
              storeFavouritesShows.filter((show) => show.type.toLowerCase().includes(event.target.value.toLowerCase()))
            );
              break;
          case 'Rating':
            setShows(
              storeFavouritesShows.filter((show) => show.rating.average > parseInt(event.target.value))
            );
              break;
          case 'Language':
            setShows(
              storeFavouritesShows.filter((show) => show.language.toLowerCase().includes(event.target.value.toLowerCase()))
            );
              break;
          default:
              break;
        }
    }
  };

  const classes = useStyles();
  const itemsPerPage = 10;
  const [page, setPage] = React.useState(1);
  const noOfPages = Math.ceil(shows.length / itemsPerPage);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const deleteFavouritesShowHandler = (event, id) => {
    event.preventDefault()
    dispatch(deleteFavouritesShow(id))
    setShows(shows.filter(el => el.id !== id));
  }

  const showView = (event, showId) => {
    if (event.target.type !== 'button') {
      props.history.push(`${props.match.path}/shows/${showId}`);
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
                  <div className={"col mb-3"} key={show._id}>
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
                          onClick={(e) => deleteFavouritesShowHandler.call(null, e, show.id)}
                        >
                          <i className={"material-icons"}>delete</i> Delete from
                          favourites
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
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
