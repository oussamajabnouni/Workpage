import React from 'react'
import { IndexRoute, Route } from 'react-router'
import App from './Containers/App'
import WelcomePage from './Containers/WelcomePage'
import HomePage from './Containers/HomePage'
import SpacePage from './Containers/SpacePage'
import NotePage from './Containers/NotePage'
import Settings from './Containers/Settings'


const routes = (
  <Route path="/" component={ App }>
    <IndexRoute component={ HomePage } />
    <Route path="/space/:spaceid" component={SpacePage} />
    <Route path="/note/:noteid" component={NotePage} />
    <Route path="/settings" component={Settings} />
  </Route>
);

export default routes;