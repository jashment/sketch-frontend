import React from 'react'
import '../App.css'
import SignInForm from './common/SignInForm'

const SignUp = () => {
  const signUpPath = 'sign-up'

  return (
    <div className="formContainer">
      <h1>Sign Up</h1>
      <SignInForm currentPath={signUpPath} />
      <p>Already have an account?</p>
      <a href="/sign-in">Sign In</a>
    </div>
  )
}

export default SignUp
