import React, { useEffect } from "react";
import EnhancedTableHead from "./EnhancedTableHead";
import EnhancedTableToolbar from "./EnhancedTableToolbar";
import Loading from "../Loading/Loading";
import { useSelector, useDispatch } from "react-redux";
import { getContracts } from "../../Redux/actions/contracts";
import { fade, makeStyles } from "@material-ui/core/styles";
import blueGrey from "@material-ui/core/colors/blueGrey";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
// import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import Tooltip from "@material-ui/core/Tooltip";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import AddIcon from "@material-ui/icons/Add";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";

const lightGreyColor = blueGrey[200];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  paper: {
    width: "99%",
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  flex: {
    display: "flex",
    justifyContent: "left",
    flexWrap: "wrap",
    borderBottom: "1px solid",
    borderBottomColor: lightGreyColor,
  },
  button: {
    margin: "16px 0 16px 16px",
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
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
    marginRight: theme.spacing(2),
    marginLeft: 0,
    marginBottom: "10px",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      // marginLeft: theme.spacing(3),
      width: "auto",
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
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    // [theme.breakpoints.up('md')]: {
    //   width: '20ch',
    // },
  },
}));

export default function EnhancedTable(props) {
  const classes = useStyles();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("Number");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const dispatch = useDispatch();
  useEffect(() => dispatch(getContracts()), [dispatch]);
  const [contracts, setContracts] = React.useState([]);
  
  let storeContracts = useSelector(
    (state) => state.ContractsReducer?.contracts
  );
  useEffect(() => setContracts(storeContracts), [storeContracts]);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = contracts.map((n) => n._id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  // const handleClick = (event, _id) => {
  //   const selectedIndex = selected.indexOf(_id);
  //   let newSelected = [];

  //   if (selectedIndex === -1) {
  //     newSelected = newSelected.concat(selected, _id);
  //   } else if (selectedIndex === 0) {
  //     newSelected = newSelected.concat(selected.slice(1));
  //   } else if (selectedIndex === selected.length - 1) {
  //     newSelected = newSelected.concat(selected.slice(0, -1));
  //   } else if (selectedIndex > 0) {
  //     newSelected = newSelected.concat(
  //       selected.slice(0, selectedIndex),
  //       selected.slice(selectedIndex + 1)
  //     );
  //   }

  //   setSelected(newSelected);
  // };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const handleChangeSearch = (event) => {
    setContracts(storeContracts);
    setIsLoading(true)
    if (event.target.value) {
      setContracts(
        storeContracts.filter((contract) => {
          return Object.keys(contract).filter((data) =>
            String(contract[data]).toLowerCase().includes(event.target.value.toLowerCase())
          ).length > 0
            ? true
            : false;
        })
      );
    }
    
  };

  const addContract = () => {
    props.history.push(`${props.match.path}/contract`);
  };

  const editContractHandle = (id) => {
    props.history.push(`${props.match.path}/contract/${id}`);
  };

  const isSelected = (_id) => selected.indexOf(_id) !== -1;

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, contracts.length - page * rowsPerPage);
  
  return (
    <div>
      {!isLoading && contracts.length === 0 ? (
        <Loading />
      ) : (
        <div className={classes.root}>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
              onChange={handleChangeSearch}
            />
          </div>
          <Paper className={classes.paper}>
            <div className={classes.flex}>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                endIcon={<AddIcon />}
                onClick={(e) => addContract()}
              >
                Add
              </Button>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                endIcon={<AddIcon />}
                // onClick={e => setDisabled(false)}
              >
                Add
              </Button>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                endIcon={<AddIcon />}
                // onClick={e => setDisabled(false)}
              >
                Add
              </Button>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                endIcon={<AddIcon />}
                // onClick={e => setDisabled(false)}
              >
                Add
              </Button>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                endIcon={<AddIcon />}
                // onClick={e => setDisabled(false)}
              >
                Add
              </Button>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                startIcon={<SaveIcon />}
                // onClick={() => saveContractHandler(contarctId)}
              >
                Save
              </Button>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                startIcon={<SaveIcon />}
                // onClick={() => saveContractHandler(contarctId)}
              >
                Save
              </Button>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                startIcon={<SaveIcon />}
                // onClick={() => saveContractHandler(contarctId)}
              >
                Save
              </Button>
              <Button
                variant="contained"
                color="default"
                className={classes.button}
                startIcon={<CloudDownloadIcon />}
              >
                Download
              </Button>
            </div>
            <EnhancedTableToolbar numSelected={selected.length} handleChangeSearch={handleChangeSearch} />
            <TableContainer>
              <Table
                className={classes.table}
                aria-labelledby="tableTitle"
                size={dense ? "small" : "medium"}
                aria-label="enhanced table"
              >
                <EnhancedTableHead
                  classes={classes}
                  numSelected={selected.length}
                  order={order}
                  orderBy={orderBy}
                  onSelectAllClick={handleSelectAllClick}
                  onRequestSort={handleRequestSort}
                  rowCount={contracts.length}
                />
                {contracts.length === 0 ? (
                  <TableBody>
                    <div style={{fontSize: '20px', textAlign: 'left', padding: '20px' }}>Contracts not found</div>
                  </TableBody>
                  )
                  :
                  (
                <TableBody>
                  {stableSort(contracts, getComparator(order, orderBy))
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => {
                      const isItemSelected = isSelected(row._id);
                      const labelId = `enhanced-table-checkbox-${index}`;
                      
                      return (
                        <TableRow
                          hover
                          // onClick={(event) => handleClick(event, row._id)}
                          role="checkbox"
                          aria-checked={isItemSelected}
                          tabIndex={-1}
                          key={row._id}
                          selected={isItemSelected}
                        >
                          {/* <TableCell padding="checkbox">
                            <Checkbox
                              checked={isItemSelected}
                              onChange={(event) => handleClick(event, row._id)}
                              inputProps={{ "aria-labelledby": labelId }}
                            />
                          </TableCell> */}
                          <TableCell
                            component="th"
                            id={labelId}
                            scope="row"
                            padding="default"
                            align="center"
                          >
                            {row.Number}
                          </TableCell>
                          <TableCell align="center">{row.Date}</TableCell>
                          <TableCell align="center">{row.Address}</TableCell>
                          <TableCell align="center">
                            {row.BuildNumber}
                          </TableCell>
                          <TableCell align="center">{row.Section}</TableCell>
                          <TableCell align="center">{row.CloseDate}</TableCell>
                          <TableCell align="center">
                            {row.TrueCloseDate}
                          </TableCell>
                          <TableCell align="center">{row.ActDate}</TableCell>
                          <TableCell align="center">
                            {row.PaymentDate}
                          </TableCell>
                          <TableCell align="center">{row.District}</TableCell>
                          <TableCell align="center">
                            {row.ContractType}
                          </TableCell>
                          <TableCell align="center">
                            <Tooltip title="Edit">
                              <IconButton>
                                <EditIcon
                                  onClick={() => editContractHandle(row._id)}
                                />
                              </IconButton>
                            </Tooltip>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>)}
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={contracts.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </Paper>
          <FormControlLabel
            control={<Switch checked={dense} onChange={handleChangeDense} />}
            label="Dense padding"
          />
        </div>
      )}
    </div>
  );
}
