import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { getMessages, changeMessages } from "../../Redux/actions/messages";
import Popover from "@material-ui/core/Popover";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import MailIcon from "@material-ui/icons/Mail";
import Badge from "@material-ui/core/Badge";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
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
}));

export default function ToolbarMessagesMenu(props) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  useEffect(() => {
    dispatch(getMessages());
  }, [dispatch]);
  const [messages, setMessages] = React.useState([]);
  const storeMessages = useSelector((state) => state.MessagesReducer?.messages);
  useEffect(() => {
    setMessages(storeMessages);
  }, [storeMessages]);
  const newMessage = storeMessages.filter((el) => el.statusNew === true).length;

  const changeMessagesHandler = (event, messageId) => {
    event.preventDefault();
    dispatch(changeMessages(messageId, { statusNew: false }));
    dispatch(getMessages());
    setMessages(storeMessages);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Tooltip title="Messages">
        <IconButton>
          <Badge badgeContent={newMessage} color="primary">
            <MailIcon onClick={handleClick} />
          </Badge>
        </IconButton>
      </Tooltip>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Typography
          style={{ padding: "10px" }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Messages:
        </Typography>
        <Divider />
        {messages?.map((message) => {
          const labelId = `list-secondary-label-${message._id}`;
          return (
            <ListItem
              key={message._id}
              button
              onClick={(e) => changeMessagesHandler.call(null, e, message._id)}
              className={message.statusNew ? classes.itemNew : classes.item}
            >
              <ListItemText
                id={labelId}
                primary={
                  "Author: " + message.created_by + ",     " + message.message
                }
                secondary={
                  message.created_date + ",    New:" + message.statusNew
                }
                className={classes.item}
              />
            </ListItem>
          );
        })}
        <Divider />
      </Popover>
    </div>
  );
}
