import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../Redux/actions/auth";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import IconButton from "@material-ui/core/IconButton";
import { useHistory, useRouteMatch } from "react-router-dom";
import Tooltip from "@material-ui/core/Tooltip";

export default function ToolbarMenu() {
  let match = useRouteMatch();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    dispatch(logout());
  };
  const handleUpdateProfile = () => {
    history.push(`${match.url}/loginUser`);
    setAnchorEl(null);
  };
  return (
    <div>
      <Tooltip title="Profile">
        <IconButton>
          <AccountCircleIcon
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          />
        </IconButton>
      </Tooltip>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleUpdateProfile}>Update Profile</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
