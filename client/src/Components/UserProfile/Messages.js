import React, {useEffect} from 'react';
import mainClasses from '../../styles/main.module.css';
import { useSelector, useDispatch } from 'react-redux'
import {getMessages, changeMessages} from '../../Redux/actions/messages'
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
    itemNew: {
        padding: theme.spacing(1.2),
        height: "max-content",
        fontSize: "1.5rem",
        backgroundColor: "#DEE1DD"
    },
    paginator: {
        justifyContent: "center",
        padding: "10px"
    }
}));

export default function Messages(props) {
    const dispatch = useDispatch()
    useEffect(()=> {dispatch(getMessages())}, [dispatch]);
    const [messages, setMessages] = React.useState([]);
    const storeMessages = useSelector(state => state.MessagesReducer?.messages)
    useEffect(()=> {setMessages(storeMessages)}, [storeMessages]);
    const classes = useStyles();
    const itemsPerPage = 10;
    const [page, setPage] = React.useState(1);
    const noOfPages = Math.ceil(messages?.length / itemsPerPage);
    
    const handleChange = (event, value) => {
        setPage(value);
    };

    const changeMessagesHandler = (event, noteId) => {
        event.preventDefault()
        dispatch(changeMessages(noteId, {statusNew: false}))
        dispatch(getMessages())
        setMessages(storeMessages)
    }
    
    return (
      <div>
        <div className={mainClasses.content}>
          <List dense compoent="span">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 gutters-sm">
              {messages
                ?.slice((page - 1) * itemsPerPage, page * itemsPerPage)
                ?.map((message) => {
                  const labelId = `list-secondary-label-${message._id}`;
                    return <ListItem
                      key={message._id}
                      button
                      onClick={(e) => changeMessagesHandler.call(null, e, message._id)}
                      className={message.statusNew ? classes.itemNew : classes.item}
                    >
                      <ListItemText
                        id={labelId}
                        primary={
                          'Autor: ' + message.created_by + ' |  Message ' + message.message 
                        }
                        secondary={message.created_date}
                        className={classes.item}
                      />
                    </ListItem>
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