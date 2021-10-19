import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import SignInForm from './common/SignInForm'

const SignIn = () => {
  const signInPath = 'sign-in'

  return (
    <div className="formContainer">
      <h1>Sign In</h1>
      <SignInForm currentPath={signInPath} />
      <p>Don&apos;t have an account?</p>
      <Link to="/">Sign Up</Link>
    </div>
  )
}

export default SignIn
