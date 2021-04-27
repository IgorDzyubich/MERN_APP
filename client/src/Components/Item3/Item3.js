import React from "react";
import CustomizedSteppers from './Stepper/Stepper'
// import ChangeUser from '../ChangeUser/ChangeUser'
// import { useHistory } from "react-router-dom";

const Item3 = (props) => {
  // const users = props.store.getState().users
  // const history = useHistory();
  // const userId = history.location.pathname.match(/\d+/)
  // const user = users.find(item => item.id === Number(userId[0]))

  // return <ChangeUser store={props.store} userId={user.id}/>
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>Stepper</h1>
          <CustomizedSteppers/>
        </div>
      </div>
    </div>
  );
};

export default Item3;
