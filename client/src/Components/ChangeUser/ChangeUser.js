import React from 'react'
import classes from './ChangeUser.module.css'
import mainClasses from '../../styles/main.module.css';
import { useHistory } from 'react-router-dom'

const ChangeUser = (props) => {
  let users = props.store.getState().users.data
  const history = useHistory()
  const userId = history.location.pathname.match(/\d+/)
  let user = users[0]
  if (userId) {
    user = users.find((item) => item.id === Number(userId[0]))
  }

  const changeUser = (e) => {
    e.preventDefault()
    const formData = document.querySelectorAll(`.${classes.inputField}`)
    let user = users.find((item) => item.id === Number(userId[0]))

    user.id = Number(userId[0])
    user.name = formData[0].value
    user.position = formData[1].value
    user.phone = formData[2].value
    user.login = formData[3].value
    user.email = formData[4].value
    user.password = formData[6].value

    history.push(`/loginUser/${users[users.length - 1].id}`)
  }

  return (
    <div className={mainClasses.main}>
      <div className={mainClasses.content}>
        <h1>Change user parameters</h1>
        <div className={classes.hero}>
          <div className={classes.formBox}>
            <form className={classes.inputGroup}>
              <label htmlFor="user-select">Enter Full Name:</label>
              <input
                type="text"
                list="users"
                className={classes.inputField}
                placeholder={user.name}
                required
              />
              <label htmlFor="user-select">Enter Position:</label>
              <input
                type="text"
                list="users"
                className={classes.inputField}
                placeholder={user.position}
                required
              />
              <label htmlFor="user-select">Enter Phone number:</label>
              <input
                type="text"
                list="users"
                className={classes.inputField}
                placeholder={user.phone}
                required
              />
              <label htmlFor="user-select">Enter Login:</label>
              <input
                type="text"
                list="users"
                className={classes.inputField}
                placeholder={user.login}
                required
              />
              <label htmlFor="user-select">Enter Email:</label>
              <input
                type="text"
                list="users"
                className={classes.inputField}
                placeholder={user.email}
                required
              />
              <label htmlFor="password">Enter Password:</label>
              <input
                type="password"
                className={classes.inputField}
                placeholder={user.password}
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
              <button
                type="submit"
                className={classes.submitBtn}
                onClick={changeUser}
              >
                SAVE
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChangeUser
