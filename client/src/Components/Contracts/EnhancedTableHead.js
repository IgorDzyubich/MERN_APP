import React from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
// import Checkbox from '@material-ui/core/Checkbox';

const headCells = [
    { id: 'Number', numeric: false, disablePadding: false, label: 'Number' },
    { id: 'Date', numeric: true, disablePadding: false, label: 'Date' },
    { id: 'Address', numeric: true, disablePadding: false, label: 'Address' },
    { id: 'BuildNumber', numeric: true, disablePadding: false, label: 'Build Number' },
    { id: 'Section', numeric: true, disablePadding: false, label: 'Section' },
    { id: 'CloseDate', numeric: true, disablePadding: false, label: 'Close Date' },
    { id: 'TrueCloseDate', numeric: true, disablePadding: false, label: 'True Close Date' },
    { id: 'ActDate', numeric: true, disablePadding: false, label: 'Act Date' },
    { id: 'PaymentDate', numeric: true, disablePadding: false, label: 'Payment Date' },
    { id: 'District', numeric: true, disablePadding: false, label: 'District' },
    { id: 'ContractType', numeric: true, disablePadding: false, label: 'Contract Type' },
    { id: 'Edit', numeric: true, disablePadding: false, label: 'Edit' }
];

export default function EnhancedTableHead(props) {
    const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
    const createSortHandler = (property) => (event) => {
      onRequestSort(event, property);
    };
  
    return (
      <TableHead>
        <TableRow>
          {/* <TableCell padding="checkbox">
            <Checkbox
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAllClick}
              inputProps={{ 'aria-label': 'select all desserts' }}
            />
          </TableCell> */}
          {headCells.map((headCell) => (
            <TableCell
              key={headCell.id}
              align={headCell.numeric ? 'center' : 'left'}
              padding={headCell.disablePadding ? 'none' : 'default'}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              {headCell.id === 'Edit' ? headCell.label 
              :
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <span className={classes.visuallyHidden}>
                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                  </span>
                ) : null}
              </TableSortLabel>
              }
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }
  
  EnhancedTableHead.propTypes = {
    classes: PropTypes.object.isRequired,
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
  };