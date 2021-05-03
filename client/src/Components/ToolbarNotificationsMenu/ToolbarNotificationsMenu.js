import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux'
import {getNotifications, changeNotifications} from '../../Redux/actions/notifications'
import Popover from '@material-ui/core/Popover';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap'
      },
}));

export default function SimplePopover(props) {
  const dispatch = useDispatch()
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  useEffect(()=> {dispatch(getNotifications())}, [dispatch]);
  const [notifications, setNotifications] = React.useState([]);
  const storeNotifications = useSelector(state => state.NotificationsReducer?.notifications)
  useEffect(()=> {setNotifications(storeNotifications)}, [storeNotifications]);

  const changeNotificationsHandler = (event, noteId) => {
    event.preventDefault()
    dispatch(changeNotifications(noteId, {statusNew: false}))
    dispatch(getNotifications())
    setNotifications(storeNotifications)
}

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <NotificationsActiveIcon onClick={handleClick}/>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
      >
        <Typography style={{padding: '10px'}} variant="h6" id="tableTitle" component="div">
          Notifications:
        </Typography>
        <Divider/>
            {notifications
                ?.map((note) => {
                  const labelId = `list-secondary-label-${note._id}`;
                    return <ListItem
                      key={note._id}
                      button
                      onClick={(e) => changeNotificationsHandler.call(null, e, note._id)}
                      className={note.statusNew ? classes.itemNew : classes.item}
                    >
                      <ListItemText
                        id={labelId}
                        primary={
                          note.message + ",  New:" + note.statusNew
                        }
                        secondary={note.created_date}
                        className={classes.item}
                      />
                    </ListItem>
                })}
        <Divider/>
      </Popover>
    </div>
  );
}
