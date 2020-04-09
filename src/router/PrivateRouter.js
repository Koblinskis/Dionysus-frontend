import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import getUser from '../fetchcalls/getUser'

const PrivateRouter = ({component: Component, ...rest}) => {
  const [cookie, setCookie] = useCookies()
  const [authToken, setAuthToken] = React.useState(undefined)

  React.useEffect(() => {
    const res = getUser()
    setAuthToken(res.token)
  }, [])


  return (
    <Route {...rest} render={props => (
      cookie.token !== authToken ? 
      <Component {...props} /> : 
      <Redirect to={'/login'} />
    )} />
  )
}

export default PrivateRouter