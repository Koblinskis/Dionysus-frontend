import React from 'react';
import { Route, Redirect } from 'react-router-dom';
//import { isLogin } from '../utils/auth';
import { useCookies } from 'react-cookie'

const PublicRouter = ({component: Component, restricted, ...rest}) => {
    const [cookie, setCookie] = useCookies()
    return (
        <Route {...rest} render={props => (
            cookie.token && restricted ?
                <Redirect to="/login" />
            : <Component {...props} />
        )} />
    );
};

export default PublicRouter;