import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from "./Auth";

const PrivateRoute = ({ component: RouteComponent, ...rest}) => {
    const {currentUser} = React.useContext(AuthContext);
    return (
        <Route
            {...rest}
            render={routeProps =>
                currentUser ? (
                    <RouteComponent {...routeProps} />
                ) : (
                    <Redirect to = "/buttonAppBar/SignIn" />
                )
            }
        >
            
        </Route>
    )
}

export default PrivateRoute

