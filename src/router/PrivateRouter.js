import React from 'react'
import { Route, Redirect } from 'react-router-dom'
//mport { isLogin } from '../utils/auth'
import { useCookies } from 'react-cookie'

const PrivateRouter = ({component: Component, ...rest}) => {
    const [cookie, setCookie] = useCookies()
    return (
        <Route {...rest} render={props => (
            cookie.token ? 
                <Component {...props} /> 
                : <Redirect to={'/login'} />
        )} />
    )
}

export default PrivateRouter