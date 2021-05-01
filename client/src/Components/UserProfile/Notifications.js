import React, {useEffect} from 'react';
import mainClasses from '../../styles/main.module.css';
import { useSelector, useDispatch } from 'react-redux'
import {getNotifications} from '../../Redux/actions/notifications'
import Pagination from '@material-ui/lab/Pagination';
import { Divider, makeStyles } from "@material-ui/core";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
        backgroundColor: theme.palette.background.paper
    },
    item: {
        padding: theme.spacing(1.2),
        height: "max-content",
        fontSize: "1.5rem"
    },
    paginator: {
        justifyContent: "center",
        padding: "10px"
    }
}));

export default function Notifications(props) {
    const dispatch = useDispatch()
    useEffect(()=> {dispatch(getNotifications())}, [dispatch]);
    const notifications = useSelector(state => {
      console.log('State ', state)
      return state.NotificationsReducer?.notifications
    })
    const classes = useStyles();
    const itemsPerPage = 10;
    const [page, setPage] = React.useState(1);
    const noOfPages = Math.ceil(notifications?.length / itemsPerPage);
    
    const handleChange = (event, value) => {
        setPage(value);
    };

    const changeUser = (userId) => {
        props.history.push(`${props.match.path}/userProfile/${userId}`);
    }
    
    return (
      <div>
        <div className={mainClasses.content}>
          <List dense compoent="span">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 gutters-sm">
              {notifications
                ?.slice((page - 1) * itemsPerPage, page * itemsPerPage)
                ?.map((contract) => {
                  const labelId = `list-secondary-label-${contract._id}`;
                  return (
                    <ListItem
                      key={contract._id}
                      button
                      onClick={changeUser.bind(null, contract._id)}
                      className={classes.item}
                    >
                      <ListItemText
                        id={labelId}
                        primary={
                          contract.message + ",  New:" + contract.statusNew
                        }
                        secondary={contract.created_date}
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