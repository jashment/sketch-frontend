import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import SignInForm from './common/SignInForm'

const SignUp = () => {
  const signUpPath = '/'

  return (
    <div className="formContainer">
      <h1>Sign Up</h1>
      <SignInForm currentPath={signUpPath} />
      <p>Already have an account?</p>
      <Link to="/sign-in">Sign In</Link>
    </div>
  )
}

export default SignUp
