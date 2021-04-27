import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import Navbar from './Components/Navbar/Navbar';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import NotFoundPage from './Components/NotFoundPage/NotFoundPage';
import './App.css';

class App extends Component {
  render() {
    return (
          <div className='app-wrapper-content'>
            <Switch>
                <Route exact path='/login' component={Login} />
                <Route exact path='/register' component={Register} />
                <ProtectedRoute path='/dashboard' component={Navbar} />
                <Route render={() => <NotFoundPage /> }/>
            </Switch>
          </div>
    );
  }
}

export default App