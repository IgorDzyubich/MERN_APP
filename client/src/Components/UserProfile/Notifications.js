import React, { useEffect } from "react";
import mainClasses from "../../styles/main.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  getNotifications,
  changeNotifications,
} from "../../Redux/actions/notifications";
import Pagination from "@material-ui/lab/Pagination";
import { Divider, makeStyles } from "@material-ui/core";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  item: {
    padding: theme.spacing(1.2),
    height: "max-content",
    fontSize: "1.5rem",
  },
  itemNew: {
    padding: theme.spacing(1.2),
    height: "max-content",
    fontSize: "1.5rem",
    backgroundColor: "#DEE1DD",
  },
  paginator: {
    justifyContent: "center",
    padding: "10px",
  },
}));

export default function Notifications(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNotifications());
  }, [dispatch]);
  const [notifications, setNotifications] = React.useState([]);
  const storeNotifications = useSelector(
    (state) => state.NotificationsReducer?.notifications
  );
  useEffect(() => {
    setNotifications(storeNotifications);
  }, [storeNotifications]);
  const classes = useStyles();
  const itemsPerPage = 10;
  const [page, setPage] = React.useState(1);
  const noOfPages = Math.ceil(notifications?.length / itemsPerPage);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const changeNotificationsHandler = (event, noteId) => {
    event.preventDefault();
    dispatch(changeNotifications(noteId, { statusNew: false }));
    dispatch(getNotifications());
    setNotifications(storeNotifications);
  };

  return (
    <div>
      <div className={mainClasses.content}>
        <List dense compoent="span">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 gutters-sm">
            {notifications
              ?.slice((page - 1) * itemsPerPage, page * itemsPerPage)
              ?.map((note) => {
                const labelId = `list-secondary-label-${note._id}`;
                return (
                  <ListItem
                    key={note._id}
                    button
                    onClick={(e) =>
                      changeNotificationsHandler.call(null, e, note._id)
                    }
                    className={note.statusNew ? classes.itemNew : classes.item}
                  >
                    <ListItemText
                      id={labelId}
                      primary={note.message + ",  New:" + note.statusNew}
                      secondary={note.created_date}
                      className={classes.item}
                    />
                  </ListItem>
                );
              })}
          </div>
        </List>
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
    </div>
  );
}
