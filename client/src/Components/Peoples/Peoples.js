import React, { useEffect } from "react";
import mainClasses from "../../styles/main.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getPeoples } from "../../Redux/actions/peoples";
import Pagination from "@material-ui/lab/Pagination";
import { Divider, makeStyles } from "@material-ui/core";
import Loading from '../Loading/Loading'

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
}));

export default function Friends(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPeoples());
  }, [dispatch]);
  
  const peoples = useSelector((state) => {
    return state.PeoplesReducer?.peoples
  });
  const classes = useStyles();
  const itemsPerPage = 8;
  const [page, setPage] = React.useState(1);
  const noOfPages = Math.ceil(peoples.length / itemsPerPage);

  const handleChange = (event, value) => {
    setPage(value);
  };
  
  const changeUser = (userId) => {
    props.history.push(`${props.match.path}/userProfile/${userId}`);
  };

  return (
    <div>
      {
        peoples.length === 0 ? <Loading />
        :
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 gutters-sm">
        {peoples
          .slice((page - 1) * itemsPerPage, page * itemsPerPage)
          .map((people) => {
            return (
              <div className={"col mb-3"} key={people._id}>
                <div
                  className={"card " + mainClasses.card}
                  onClick={changeUser.bind(null, people._id)}
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
                    <h5 className={"card-title"}>
                      {people.first_name} 
                    </h5>
                    <p className={"text-secondary mb-1"}>{people.email}</p>
                  </div>
                  <div className={"card-footer"}>
                    <button
                      className={
                        "btn btn-light btn-sm bg-white has-icon btn-block"
                      }
                      type="button"
                    >
                      <i className={"material-icons"}>add</i>Follow
                    </button>
                    <button
                      className={"btn btn-light btn-sm bg-white has-icon ml-2"}
                      type="button"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-message-circle"
                      >
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      }
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
