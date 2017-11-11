import React from 'react';
import {Tab,Tabs} from 'material-ui/Tabs';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';
import FileFolder from 'material-ui/svg-icons/file/folder';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import AssignmentIcon from 'material-ui-icons/Assignment';
import {green500} from 'material-ui/styles/colors';

const { fetchJson } = require("./api");

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  greenAvatar: {
   margin: 10,
   color: '#fff',
   backgroundColor: green500,
 },
};



const fetchData = (params) => {

     return fetchJson({ type: params, fields: "displayName,displayShortName,id,indicators[*]" });
}


export default class indicatorGroup extends React.Component {

  constructor(props) {
    super(props);
    let id = this.props.match.params.id;
    let params = "indicatorGroups/"+id;
    this.state = {
      type:"indicators",
      data: []
    };

  }

  componentDidMount () {
    let id = this.props.match.params.id;
    let params = "indicatorGroups/"+id;
    console.log(params);
    fetchData(params).then((data) => this.setState({
      type: data["displayName"],
      data: data['indicators']
    }));
  }

  li (dataItem) {
      return (
          <ListItem leftAvatar={<Avatar icon={<AssignmentIcon />} />}
          rightIcon={<ActionInfo />} key={dataItem.id} primaryText={dataItem.displayName}
          secondaryText={"Description: "+dataItem.displayDescription+"; Numerator: "+dataItem.numeratorDescription+
          "; Denominator: "+dataItem.denominatorDescription+"; Annualized: "+dataItem.annualized+"; Code:"+dataItem.code
        }></ListItem>
      );
  }


  render() {

    if (this.state.data) {
    return (
      <div>
        <h2 style={styles.headline}>Indicator Group : {this.state.type}</h2>
        <FlatButton label="Back" secondary={true} href="/" />
        <div>
        <Divider />
        <List>
            { this.state.data.map(this.li) }
        </List>
        </div>
      </div>
    );
  }
}
}
