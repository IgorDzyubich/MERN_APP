import React from "react";
import SimpleAccordion from './Accordion/Accordion'
// import ChangeUser from '../ChangeUser/ChangeUser'
// import { useHistory } from "react-router-dom";

const Item2 = (props) => {
  // const users = props.store.getState().users
  // const history = useHistory();
  // const userId = history.location.pathname.match(/\d+/)
  // const user = users.find(item => item.id === Number(userId[0]))

  // return <ChangeUser store={props.store} userId={user.id}/>
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>Accordion</h1>
          <SimpleAccordion/>
        </div>
      </div>
    </div>
  );
};

export default Item2;
