import React from 'react';
import {Tab,Tabs} from 'material-ui/Tabs';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
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

const style = {
  marginRight: 20,
  float:'right'
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
      <div>
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
      <FloatingActionButton mini={true} secondary={true} style={style}>
        <ContentAdd />
      </FloatingActionButton>
      </div>
    );
  }
}
