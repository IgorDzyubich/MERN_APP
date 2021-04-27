import React from 'react';
import classes from './Header.module.css';
// import logo from './../../../src/img/logo_cyfral_ukr.jpg';
import { useHistory } from "react-router-dom";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const Header = () => {
    const history = useHistory();
    const logOut = () => history.push(`/`)
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    return <header className={classes.header}>
                <div className="container-fluid">
                 <div className={classes.header}>
                 <div className={classes.login}>Cyfral-logo</div>
                    <AccountCircleIcon aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} className={classes.cursor}/>
                        <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={logOut}>Logout</MenuItem>
                        </Menu>
                 </div>
              </div>
            </header>
}

export default Header;