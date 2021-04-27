import React from 'react';
import FullWidthTabs from './FullWidthTabs/FullWidthTabs'
// import ChangeUser from '../ChangeUser/ChangeUser'
// import { useHistory } from "react-router-dom";

const SubscriberDepartment = (props) => {
    // const users = props.store.getState().users
    // const history = useHistory();
    // const userId = history.location.pathname.match(/\d+/)
    // const user = users.find(item => item.id === Number(userId[0]))

    // return <ChangeUser store={props.store} userId={user.id}/>  
    return   (
                <div className="container" >
                    <div className="row">
                        <div className="col-md-12">
                        <h1>Subscriber Department</h1>
                        <FullWidthTabs />
                        </div>
                    </div>
                </div>
    )
}

export default SubscriberDepartment;