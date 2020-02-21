import React from 'react'
import { NavLink } from 'react-router-dom'
import { Box } from '@material-ui/core';

export default function Footer() {
  return (
    <Box>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/registration">Registration</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/about">About</NavLink>
    </Box>
  )
}