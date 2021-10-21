import React from 'react'
import '../App.css'
import { Card } from '@mui/material'
import { Link } from 'react-router-dom'
import SignInForm from './common/SignInForm'
import * as routes from './common/routes'

const SignIn = () => {
  const signInPath = '/sign-in'

  return (
    <div className="formContainer">
      <Card className="entryForm">
        <h1>Sign In</h1>
        <SignInForm currentPath={signInPath} />
        <p>Don&apos;t have an account?</p>
        <Link to={routes.SIGNUP}>Sign Up</Link>
      </Card>
    </div>
  )
}

export default SignIn
