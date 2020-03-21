import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useCookies } from 'react-cookie'

const PrivateRouter = ({component: Component, ...rest}) => {
  const [cookie, setCookie] = useCookies()
  const [authToken, setAuthToken] = React.useState(undefined)

  React.useEffect(() => {
    async function authUser() {
      try {
        const res = await fetch(process.env.REACT_APP_NODE_URL + 'profile', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + cookie.token,
          }
        })
        return res.body.token
      } catch (e) {
        console.error('Error:', e)
        return null
      }
    }
    const res = authUser()
    setAuthToken(res)
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