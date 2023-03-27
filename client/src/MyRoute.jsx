import { Switch, Route } from "react-router-dom";
import React from 'react'
import App from "./App"
import FormComponent from "./components/FormComponent"
import Detail from "./components/Detail"
import Edit from "./components/Edit"

const MyRoute = () => {
  return (
      <Switch>
          <Route path="/" exact component={App} />
          <Route path="/create" exact component={FormComponent} />
          <Route path="/blog/:slug" exact component={Detail} />
          <Route path="/blog/edit/:slug" exact component={Edit} />
      </Switch>
  )
}

export default MyRoute