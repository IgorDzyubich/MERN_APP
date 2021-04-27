import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { getContract, addContract } from "../../../Redux/actions/contracts";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
// import SaveIcon from "@material-ui/icons/Save";
import EditIcon from "@material-ui/icons/Edit";
import NoteAddIcon from "@material-ui/icons/NoteAdd";

const useStyles = makeStyles((theme) => ({
  flex: {
    display: "flex",
    justifyContent: "left",
    flexWrap: "wrap",
  },
  button: {
    marginRight: theme.spacing(1),
  },
  textFieldLeft: {
    marginRight: theme.spacing(3.2),
    width: "48%",
  },
  textField: {
    width: "48%",
  },
}));

const NewContract = (props) => {
  const classes = useStyles();
  // console.log('Contract props: ', props.match.params.id)
  //   const contarctId = props.match.params.id
  const dispatch = useDispatch();
  //   useEffect(() => {dispatch(getContract(contarctId))}, [dispatch]);
  //   const [contract, setContract] = React.useState({})

  //   let storeContract = useSelector(state => state.ContractsReducer?.contract)
  // console.log('storeContract: ', storeContract)
  //   useEffect(() => {setContract(storeContract)}, [storeContract])
  // console.log('contract: ', contract)
  //   const {ActDate, Address, BuildNumber, CloseDate, ContractType,
  //     Date, District, Number, PaymentDate, Section, TrueCloseDate, _id} = contract

  const [contractNumber, setContractNumber] = useState("");
  const [contractType, setContractType] = useState("");
  const [district, setDistrict] = useState("");
  const [address, setAddress] = useState("");
  const [buildNumber, setBuildNumber] = useState("");
  const [section, setSection] = useState("");
  const [closeDate, setCloseDate] = useState("");
  const [date, setDate] = useState("");
  const [paymentDate, setPaymentDate] = useState("");
  const [actDate, setActDate] = useState("");
  const [trueCloseDate, setTrueCloseDate] = useState("");

  const [disabled, setDisabled] = useState(false);
//   const [disabledCreateBtn, setdisabledCreateBtn] = useState(true);
  const [disabledEditBtn, setdisabledEditBtn] = useState(true);
  
//   const [disabled, setDisabled] = useState(false);
let enabledCreateBtn = contractNumber.length > 0 && contractType.length > 0
                && district.length > 0 && address.length > 0 && buildNumber.length > 0 
                && section.length > 0 && closeDate.length > 0 && date.length > 0
                && paymentDate.length > 0 && actDate.length > 0 && trueCloseDate.length > 0


  const addContractHandler = () => {
    const body = {
      ActDate: actDate,
      Address: address,
      BuildNumber: buildNumber,
      CloseDate: closeDate,
      ContractType: contractType,
      Date: date,
      District: district,
      Number: contractNumber,
      PaymentDate: paymentDate,
      Section: section,
      TrueCloseDate: trueCloseDate,
    };
    dispatch(addContract(body));
    setDisabled(true);
    setdisabledEditBtn(false)
  };

  return (
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Create New Contract</h1>
              <div className={classes.flex}>
                <Button
                  variant="contained"
                  color="primary"
                  disabled={!enabledCreateBtn}
                  className={classes.button}
                  startIcon={<NoteAddIcon />}
                  onClick={() => addContractHandler()}
                >
                  Create
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  disabled={disabledEditBtn}
                  className={classes.button}
                  endIcon={<EditIcon />}
                  onClick={(e) => setDisabled(false)}
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  color="default"
                  disabled={disabledEditBtn}
                  className={classes.button}
                  startIcon={<CloudDownloadIcon />}
                >
                  Download
                </Button>
              </div>
              <form noValidate>
                <TextField
                  variant="filled"
                  margin="normal"
                  required
                  fullWidth
                  disabled={disabled}
                  // className={classes.textField}
                  name="number"
                  label="Number"
                  id="number"
                  autoComplete="number"
                  value={contractNumber}
                  onChange={(e) => setContractNumber(e.target.value)}
                />
                <TextField
                  variant="filled"
                  margin="normal"
                  required
                  fullWidth
                  disabled={disabled}
                  // className={classes.textFieldLeft}
                  id="contractType"
                  label="ContractType"
                  name="contractType"
                  autoComplete="contractType"
                  value={contractType}
                  onChange={(e) => setContractType(e.target.value)}
                />
                <TextField
                  variant="filled"
                  margin="normal"
                  required
                  fullWidth
                  disabled={disabled}
                  // className={classes.textFieldLeft}
                  id="district"
                  label="District"
                  name="district"
                  autoComplete="district"
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                />
                <TextField
                  variant="filled"
                  margin="normal"
                  required
                  fullWidth
                  disabled={disabled}
                  // className={classes.textField}
                  name="address"
                  label="Address"
                  id="address"
                  autoComplete="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <TextField
                  variant="filled"
                  margin="normal"
                  required
                  fullWidth
                  disabled={disabled}
                  // className={classes.textFieldLeft}
                  id="buildNumber"
                  label="BuildNumber"
                  name="buildNumber"
                  autoComplete="buildNumber"
                  value={buildNumber}
                  onChange={(e) => setBuildNumber(e.target.value)}
                />
                <TextField
                  variant="filled"
                  margin="normal"
                  required
                  fullWidth
                  disabled={disabled}
                  // className={classes.textField}
                  name="section"
                  label="Section"
                  id="section"
                  autoComplete="section"
                  value={section}
                  onChange={(e) => setSection(e.target.value)}
                />
                <TextField
                  variant="filled"
                  margin="normal"
                  required
                  fullWidth
                  disabled={disabled}
                  // className={classes.textField}
                  name="closeDate"
                  label="CloseDate"
                  id="closeDate"
                  autoComplete="closeDate"
                  value={closeDate}
                  onChange={(e) => setCloseDate(e.target.value)}
                />
                <TextField
                  variant="filled"
                  margin="normal"
                  required
                  fullWidth
                  disabled={disabled}
                  // className={classes.textField}
                  name="address"
                  label="Date"
                  id="date"
                  autoComplete="address"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
                <TextField
                  variant="filled"
                  margin="normal"
                  required
                  fullWidth
                  disabled={disabled}
                  // className={classes.textFieldLeft}
                  id="paymentDate"
                  label="PaymentDate"
                  name="paymentDate"
                  autoComplete="paymentDate"
                  value={paymentDate}
                  onChange={(e) => setPaymentDate(e.target.value)}
                />
                <TextField
                  variant="filled"
                  margin="normal"
                  required
                  fullWidth
                  disabled={disabled}
                  // className={classes.textFieldLeft}
                  id="actDate"
                  label="ActDate"
                  name="actDate"
                  autoComplete="actDate"
                  value={actDate}
                  onChange={(e) => setActDate(e.target.value)}
                />
                <TextField
                  variant="filled"
                  margin="normal"
                  required
                  fullWidth
                  disabled={disabled}
                  // className={classes.textField}
                  name="trueCloseDate"
                  label="TrueCloseDate"
                  id="trueCloseDate"
                  autoComplete="trueCloseDate"
                  value={trueCloseDate}
                  onChange={(e) => setTrueCloseDate(e.target.value)}
                />
              </form>
            </div>
          </div>
        </div>
  );
};

export default NewContract;
