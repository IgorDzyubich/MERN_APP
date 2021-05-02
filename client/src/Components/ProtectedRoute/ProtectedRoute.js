import React from "react";
import { Route, Redirect } from "react-router-dom";
import {useSelector} from 'react-redux'

const ProtectedRoute = ({component: Conponent, ...rest}) => {
    
    const isLoggedIn = useSelector(state => state.AuthReducer.isLoggedIn)

    return (
        <Route {...rest} render={
            (props) => {
                if (isLoggedIn) {
                    return <Conponent {...props}/>
                } else {
                    return <Redirect to={{
                        pathname: '/app',
                        state: {
                            from: props.location
                        }
                    }}/>
                }
            }
        }
        />
    )
}

export default ProtectedRoute