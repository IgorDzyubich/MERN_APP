import React from 'react'
import classes from './NewUser.module.css'
import { useHistory } from "react-router-dom";

const NewUser = (props) => {
  const users = props.store.getState().users.data
  const history = useHistory();

  const addUser = (e) => {
    e.preventDefault()
    const formData = document.querySelectorAll(`.${classes.inputField}`)
  
    users.push({
        id: users[users.length-1].id + 1,
        name: formData[0].value,
        position: formData[1].value,
        phone: formData[2].value,
        login: formData[3].value,
        email: formData[4].value,
        password: formData[6].value
      })
    
    history.push(`/loginUser/${users[users.length-1].id}`);
  }
  
  return (
    <div className={classes.main}>
      <h1>Fill out a new user form</h1>
      <div className={classes.hero}>
        <div className={classes.formBox}>
          <form className={classes.inputGroup}>
            <label htmlFor="user-select">Enter Full Name:</label>
            <input
              type="text"
              list="users"
              className={classes.inputField}
              required
            />
            <label htmlFor="user-select">Enter Position:</label>
            <input
              type="text"
              list="users"
              className={classes.inputField}
              required
            />
            <label htmlFor="user-select">Enter Phone number:</label>
            <input
              type="text"
              list="users"
              className={classes.inputField}
              required
            />
            <label htmlFor="user-select">Enter Login:</label>
            <input
              type="text"
              list="users"
              className={classes.inputField}
              required
            />
            <label htmlFor="user-select">Enter Email:</label>
            <input
              type="text"
              list="users"
              className={classes.inputField}
              required
            />
            <label htmlFor="password">Enter Password:</label>
            <input
              type="password"
              className={classes.inputField}
              name="password"
              required
            />
            <label htmlFor="password">Confirm Password:</label>
            <input
              type="password"
              className={classes.inputField}
              name="password"
              required
            />
            <button type="submit" className={classes.submitBtn} onClick={addUser}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default NewUser
