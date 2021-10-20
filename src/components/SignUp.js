import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import SignInForm from './common/SignInForm'
import * as routes from './common/routes'

const SignUp = () => {
  const signUpPath = '/sign-up'

  return (
    <div className="formContainer">
      <h1>Sign Up</h1>
      <SignInForm currentPath={signUpPath} />
      <p>Already have an account?</p>
      <Link to={routes.SIGNIN}>Sign In</Link>
    </div>
  )
}

export default SignUp
