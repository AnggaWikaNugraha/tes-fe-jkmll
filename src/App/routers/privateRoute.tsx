import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import LayoutApp from '../modules/layout'

interface StatusPage {
  StatusPageReducer : {
    isAuthenticated? : boolean
    token?: string,
    email?: string,
    role?: string,
    name?: string,
  }
}

export default function PrivateRoute ({ children, ...rest}: any) {
  const StatusPageReducer = useSelector((state: StatusPage) => state.StatusPageReducer)

  return (
    <Route {...rest} render={() => (StatusPageReducer.isAuthenticated ? (<>{children}</>) : <Redirect to={({ pathname: '/login'})}/>)}/>
  )
}