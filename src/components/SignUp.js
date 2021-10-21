import React from 'react'
import '../App.css'
import { Card } from '@mui/material'
import { Link } from 'react-router-dom'
import SignInForm from './common/SignInForm'
import * as routes from './common/routes'

const SignUp = () => {
  const signUpPath = '/sign-up'

  return (
    <div className="formContainer">
      <Card className="entryForm">
        <h1>Sign Up</h1>
        <SignInForm currentPath={signUpPath} />
        <p>Already have an account?</p>
        <Link to={routes.SIGNIN}>Sign In</Link>
      </Card>
    </div>
  )
}

export default SignUp
