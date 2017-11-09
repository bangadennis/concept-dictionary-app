import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import logo from './logo-test.png';
import {cyan700} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import Tab from 'material-ui/Tabs';
import TabsControlled from './Tabs';
import dataElementGroup from './dataElementGroup';
import indicatorGroup from './indicatorGroup';
import './App.css';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

const style = {
  marginLeft: 20,
};

const muiTheme = getMuiTheme({
  palette: {
    textColor: cyan700,
  },
  appBar: {
    height: 50,
  },
});



class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme} >
        <AppBar
          title="Concept Dictionary"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
          <Router>
          <Switch>
          <Route exact path="/" component={TabsControlled} />
          <Route path="/dataElementGroups/:id" component={dataElementGroup} />
            <Route path="/indicatorGroups/:id" component={indicatorGroup} />
          </Switch>
          </Router>

      </MuiThemeProvider>
      );
  }
}

export default App;
