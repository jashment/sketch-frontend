import * as React from 'react';
import {
  Route, BrowserRouter as Router, Switch,
} from 'react-router-dom';
import * as routes from './components/common/routes'
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
          && <Route path={routes.SKETCH} component={Sketch} />}
        <Route exact path={routes.SIGNUP} component={SignUp} />
        <Route path={routes.SIGNIN} component={SignIn} />
      </Switch>
    </Router>
  )
}

export default App;
