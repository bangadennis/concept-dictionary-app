import React from 'react';
import async from 'async';
import {Tab,Tabs} from 'material-ui/Tabs';
import ListItems from './ListItems';

const { fetchJson } = require("./api");

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};



const fetchData = (tab) => {

   if(tab==='dataElementGroups'){
     let data = [];
     return fetchJson({ type: tab, fields: "displayName, displayShortName,url, id" });

   }
   else if (tab==='indicatorGroups') {
     let data = [];

     return fetchJson({ type: tab, fields: "displayName, displayShortName, url, id" });
   }
   else {
     return [];
   }


}


export default class TabsControlled extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tab: 'dataElementGroups',
      data: []
    };

  }

  componentDidMount () {
    fetchData(this.state.tab).then((data) => this.setState({
      tab: this.state.tab,
      data: data[this.state.tab]
    }));
  }

  handleChange = (tab) => {
    fetchData(tab).then((data) => this.setState({tab:tab, data: data[tab]}));
  };


  render() {
    return (
      <Tabs
        value={this.state.tab}
        onChange={this.handleChange} >
        <Tab label="Data Elements" value="dataElementGroups">
        <div>
          <h2 style={styles.headline}>List of Published Data Elements Groups</h2>
          <div>
            <ListItems data={this.state.data} tab={this.state.tab} />
          </div>
        </div>
      </Tab>
      <Tab label="Indicators" value="indicatorGroups">
        <div>
          <h2 style={styles.headline}>List Published Indicators Groups</h2>
          <div>
          <ListItems data={this.state.data} tab={this.state.tab} />
          </div>
        </div>
      </Tab>
      </Tabs>
    );
  }
}
