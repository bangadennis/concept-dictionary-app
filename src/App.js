import React, { Component } from 'react';
import logo from './logo-test.png';
import {cyan700} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import Tab from 'material-ui/Tabs';
import TabsControlled from './Tabs';
import ListItems from './ListItems';
import './App.css';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
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
          <TabsControlled>

           </TabsControlled>
      </MuiThemeProvider>
      );
  }
}

export default App;
