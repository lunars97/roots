import React, { useContext } from "react";
import { Route } from "react-router-dom";
import { Redirect } from "react-router";
import { AuthContext } from "./contexts/AuthContext";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
    const { currentUser } = useContext(AuthContext);
    return (
        <Route
            {...rest}
            render={(routeProps) =>
                !!currentUser ? (
                    <RouteComponent {...routeProps} />
                ) : (
                    <Redirect to={"/login"} />
                )
            }
        ></Route>
    );
};

export default PrivateRoute;
