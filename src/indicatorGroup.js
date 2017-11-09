import React from 'react';
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



const fetchData = (params) => {

     return fetchJson({ type: params, fields: "displayName, displayShortName, id, indicators[*]" });
}


export default class indicatorGroup extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    };

  }

  componentDidMount () {
    console.log(this.props);
    let id = this.props.match.params.id;
    let params = "indicatorGroups/"+id;
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
      <div></div>
    );
  }
}
