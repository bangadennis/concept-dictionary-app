import React from 'react';
import {Tab,Tabs} from 'material-ui/Tabs';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import ListElements from './ListElements';

const { fetchJson } = require("./api");

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};



const fetchData = (params) => {

     return fetchJson({ type: params, fields: "displayName, displayShortName, id, dataElements[*]" });
}


export default class dataElementGroup extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    };

  }

  componentDidMount () {
    console.log(this.props);
    let id = this.props.match.params.id;
    let params = "dataElementGroups/"+id;
    console.log(params);
    fetchData(params).then((data) => this.setState({
      data: data
    }));
  }

  // handleChange = (tab) => {
  //   fetchData(tab).then((data) => this.setState({tab, data: data[tab]}));
  // };


  render() {
    console.log(this.state.data);
    return (
      <div>
        <h2 style={styles.headline}>{this.state.data.displayName}</h2>
        <div>
        <ListElements data={this.state.data.dataElements}  />
        </div>
      </div>
    );
  }
}
