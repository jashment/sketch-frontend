import React, { useState } from 'react'
import { Button, TextField } from '@mui/material'
import { useHistory } from 'react-router-dom'
import { sendEmailAndPassword } from '../../api/apiLayer'
import * as routes from './routes'

const SignInForm = ({ currentPath }) => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const history = useHistory()

  const handleEmailChange = (event) => {
    event.preventDefault();
    const { value } = event.target;
    setEmail(value);
  }

  const handlePasswordChange = (event) => {
    event.preventDefault();
    const { value } = event.target;
    setPassword(value);
  }

  const doSignUp = async (event) => {
    event.preventDefault()
    const user = await sendEmailAndPassword(email, password, currentPath)
    console.log(user)
    // Sign in token only lasts 3600 seconds for user
    await window.sessionStorage.setItem('user', JSON.stringify(user))
    history.replace(routes.SKETCH)
  }

  return (
    <form onSubmit={(event) => doSignUp(event)}>
      <TextField onChange={(event) => handleEmailChange(event)} className="email" label="Email" />
      <TextField onChange={(event) => handlePasswordChange(event)} className="password" label="Password" />
      <Button type="submit" style={{ padding: '16.5px' }}>Submit</Button>
    </form>
  )
}

export default SignInForm
