import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { useDispatch } from 'react-redux'
import { register } from '../../Redux/actions/auth'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Register = ({history}) => {
  const dispatch = useDispatch()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorEmail, setErrorEmail] = useState(false)
  const [emailHelperText, setEmailHelperText] = useState(null)
  const [errorPassword, setErrorPassword] = useState(false)
  const [passwordHelperText, setPasswordHelperText] = useState(null)

  const AuthRoute = async (e) => {
    e.preventDefault()
    if (!validateEmail(email)) {
      setErrorEmail(true)
      setEmailHelperText('Incorrect email!')
    } else if (!validatePassword(password)) {
      setErrorPassword(true)
      setPasswordHelperText('Incorrect password!')
    } else {
      const data = {email, password}
      dispatch(register(data, history))
    }
    // const data = {email, password}
    //   dispatch(register(data, history))
    
  };

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  function validatePassword(password) {
    const re = /^[A-Za-z]\w{7,14}$/;
    return re.test(String(password));
  }

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Registration
        </Typography>
        <form className={classes.form} >
          <TextField
            error={errorEmail}
            helperText={emailHelperText}
            variant="filled"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <TextField
            error={errorPassword}
            helperText={passwordHelperText}
            variant="filled"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={AuthRoute}
          >
            Registration
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default Register;