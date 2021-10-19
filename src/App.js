import * as React from 'react';
import {
  Route, BrowserRouter as Router, Switch,
} from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Sketch from './components/Sketch'

const App = () => {
  const authUser = window.sessionStorage.getItem('user')
  const parsedAuthUser = JSON.parse(authUser)
  return (
    // Force refresh isn't ideal, but it serves it's perpose for now
    <Router forceRefresh>
      <Switch>
        {parsedAuthUser
          && <Route path="/sketch" component={Sketch} />}
        <Route exact path="/" component={SignUp} />
        <Route path="/sign-in" component={SignIn} />
      </Switch>
    </Router>
  )
}

export default App;
