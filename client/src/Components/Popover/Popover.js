import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import FilterListIcon from "@material-ui/icons/FilterList";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  formControl: {
    margin: theme.spacing(1),
    marginTop: "0",
    width: "100%",
    minWidth: 120,
  },
}));

export default function SimplePopover(props) {
  const { handleChangeSearchFilter } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [invisible, setInvisible] = React.useState(true);
  const [filter, setFilter] = React.useState([]);
  const [value, setValue] = React.useState("");
  const [filterValue, setFilterValue] = React.useState("");

  const handleChange = (event) => {
    setFilterValue(event.target.value);
    switch (event.target.value) {
      case "Show Status":
        setFilter(["Running", "Ended", "To be Determined", "In Development"]);
        break;
      case "Show Type":
        setFilter([
          "Scripted",
          "Animation",
          "Reality",
          "Talk Show",
          "Documentary",
          "Game Show",
          "News",
          "Sports",
          "Variety",
          "Award Show",
          "Panel Show",
        ]);
        break;
      case "Rating":
        setFilter(["2+", "3+", "4+", "5+", "6+", "7+", "8+", "9+"]);
        break;
      case "Language":
        setFilter(["English", "Italian", "French"]);
        break;
      default:
        break;
    }
  };

  const handleFilter = (event) => {
    handleChangeSearchFilter(event, filterValue);
    setValue(event.target.value);
    setInvisible(false);
  };

  const handleCancel = (event) => {
    handleChangeSearchFilter(event, filterValue);
    setFilterValue("");
    setValue("");
    setFilter([]);
    setInvisible(true);
    setAnchorEl(null);
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
      <Tooltip title="Filter list">
        <IconButton
          aria-label="filter list"
          onClick={handleClick}
          aria-describedby={id}
        >
          <Badge color="secondary" variant="dot" invisible={invisible}>
            <FilterListIcon />
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
          Filtered by:
        </Typography>
        <Divider />
        <form className={classes.container}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="demo-dialog-native">Filter</InputLabel>
            <Select
              native
              value={filterValue}
              onChange={handleChange}
              input={<Input id="demo-dialog-native" />}
            >
              <option aria-label="None" value="" />
              <option value={"Show Status"}>Show Status</option>
              <option value={"Show Type"}>Show Type</option>
              <option value={"Rating"}>Rating</option>
              <option value={"Language"}>Language</option>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-dialog-select-label">Filter Value</InputLabel>
            <Select
              labelId="demo-dialog-select-label"
              id="demo-dialog-select"
              value={value}
              onChange={handleFilter}
              input={<Input />}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {filter.map((el) => {
                return (
                  <MenuItem value={el} key={el}>
                    {el}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </form>
        <Divider />
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            padding: "5px",
          }}
        >
          <Button onClick={handleCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Ok
          </Button>
        </div>
      </Popover>
    </div>
  );
}
