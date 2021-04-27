import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import {getContract, changeContract} from '../../../Redux/actions/contracts'

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import SaveIcon from '@material-ui/icons/Save';
import EditIcon from '@material-ui/icons/Edit';
import NoteAddIcon from '@material-ui/icons/NoteAdd';

const useStyles = makeStyles((theme) => ({
  flex: {
    display: 'flex',
    justifyContent: 'left',
    flexWrap: 'wrap',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  textFieldLeft: {
    marginRight: theme.spacing(3.2),
    width: '48%',
  },
  textField: {
    width: '48%',
  },
}));

const Contract = (props) => {
  const classes = useStyles();
  const contarctId = props.match.params.id
  const dispatch = useDispatch()
  useEffect(() => {dispatch(getContract(contarctId))}, [dispatch]);
  const [contract, setContract] = React.useState({})

  let storeContract = useSelector(state => state.ContractsReducer?.contract)
  useEffect(() => {setContract(storeContract)}, [storeContract])
  const {ActDate, Address, BuildNumber, CloseDate, ContractType,
    Date, District, Number, PaymentDate, Section, TrueCloseDate, _id} = contract
  
  const [contractNumber, setContractNumber] = useState(Number)
  const [contractType, setContractType] = useState(ContractType)
  const [district, setDistrict] = useState(District)
  const [address, setAddress] = useState(Address)
  const [buildNumber, setBuildNumber] = useState(BuildNumber)
  const [section, setSection] = useState(Section)
  const [closeDate, setCloseDate] = useState(CloseDate)
  const [date, setDate] = useState(Date)
  const [paymentDate, setPaymentDate] = useState(PaymentDate)
  const [actDate, setActDate] = useState(ActDate)
  const [trueCloseDate, setTrueCloseDate] = useState(TrueCloseDate)

  const [disabled, setDisabled] = useState(true)

  const saveContractHandler = id => {
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
      TrueCloseDate: trueCloseDate
    }
    dispatch(changeContract(id, body))
    setDisabled(true)
  }

    return   (
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                        <h1>Contract #{Number}</h1>
                        <div className={classes.flex}>
                        <Button
                          variant="contained"
                          color="primary"
                          className={classes.button}
                          endIcon={<EditIcon />}
                          onClick={e => setDisabled(false)}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="contained"
                          color="primary"
                          className={classes.button}
                          startIcon={<SaveIcon />}
                          onClick={() => saveContractHandler(contarctId)}
                        >
                          Save
                        </Button>
                        <Button
                          variant="contained"
                          color="primary"
                          className={classes.button}
                          startIcon={<NoteAddIcon />}
                          // onClick={() => saveContractHandler(contarctId)}
                        >
                          Button1
                        </Button>
                        <Button
                          variant="contained"
                          color="primary"
                          className={classes.button}
                          startIcon={<NoteAddIcon />}
                          // onClick={() => saveContractHandler(contarctId)}
                        >
                          Button2
                        </Button>
                        <Button
                          variant="contained"
                          color="primary"
                          className={classes.button}
                          startIcon={<NoteAddIcon />}
                          // onClick={() => saveContractHandler(contarctId)}
                        >
                          Button3
                        </Button>
                        <Button
                          variant="contained"
                          color="primary"
                          className={classes.button}
                          startIcon={<NoteAddIcon />}
                          // onClick={() => saveContractHandler(contarctId)}
                        >
                          Button4
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
                            value={contractNumber ? contractNumber : Number+''}
                            onChange={e => setContractNumber(e.target.value)}
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
                            value={contractType ? contractType : ContractType+''}
                            onChange={e => setContractType(e.target.value)}
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
                            value={district ? district : District+''}
                            onChange={e => setDistrict(e.target.value)}
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
                            value={address ? address : Address+''}
                            onChange={e => setAddress(e.target.value)}
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
                            value={buildNumber ? buildNumber : BuildNumber+''}
                            onChange={e => setBuildNumber(e.target.value)}
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
                            value={section ? section : Section+''}
                            onChange={e => setSection(e.target.value)}
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
                            value={closeDate ? closeDate : CloseDate+''}
                            onChange={e => setCloseDate(e.target.value)}
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
                            value={date ? date : Date+''}
                            onChange={e => setDate(e.target.value)}
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
                            value={paymentDate ? paymentDate : PaymentDate+''}
                            onChange={e => setPaymentDate(e.target.value)}
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
                            value={actDate ? actDate : ActDate+''}
                            onChange={e => setActDate(e.target.value)}
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
                            value={trueCloseDate ? trueCloseDate : TrueCloseDate+''}
                            onChange={e => setTrueCloseDate(e.target.value)}
                          />
                        </form>
                        </div>
                    </div>
                </div>
    )
}

export default Contract;