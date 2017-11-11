import React from 'react';
import {Tab,Tabs} from 'material-ui/Tabs';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import Divider from 'material-ui/Divider';
import MenuItem from 'material-ui/MenuItem';
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
      data: [],
      open:false,
      selected:1,
      elements:[]
    };

  }

  componentDidMount () {
    fetchData(this.state.tab).then((data) => this.setState({
      tab: this.state.tab,
      data: data[this.state.tab],
      open:false,
      selected:1,
      elements:[]
    }));
  }

  handleChange = (tab) => {
    fetchData(tab).then((data) => this.setState({tab:tab, data: data[tab]}));
  };

  handleOpen = () => {
   this.setState({open: true});
  };

  handleClose = () => {
   this.setState({open: false});
  };

  handleGroupsChange = (event, index, elements) => this.setState({elements});

  selectionRenderer = (elements) => {
    switch (elements.length) {
      case 0:
        return '';
      default:
        return `${elements.length} groups selected`;
    }
  }

  menuItems(groups) {
    return groups.map((group) => (
      <MenuItem
        key={group.id}
        insetChildren={true}
        checked={this.state.elements.indexOf(group.id) > -1}
        value={group.id}
        primaryText={group.displayName}
      />
    ));
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />,
    ];
    return (
      <div>
      <Tabs
        value={this.state.tab}
        onChange={this.handleChange} >
        <Tab label="Data Element Groups" value="dataElementGroups">
        <div>
          <h2 style={styles.headline}>List of Published Data Elements Groups</h2>
          <div>
            <ListItems data={this.state.data} tab={this.state.tab} />
          </div>
        </div>
      </Tab>
      <Tab label="Indicators Groups" value="indicatorGroups">
        <div>
          <h2 style={styles.headline}>List Published Indicators Groups</h2>
          <div>
          <ListItems data={this.state.data} tab={this.state.tab} />
          </div>
        </div>
      </Tab>
      </Tabs>

      <div>
      <FloatingActionButton secondary={true} style={style} onClick={this.handleOpen}>
        <ContentAdd />
      </FloatingActionButton>
      <Dialog
         title="Publish"
         actions={actions}
         modal={false}
         open={this.state.open}
         onRequestClose={this.handleClose}
       >
       <div>
           <TextField
          disabled={true}
          defaultValue={this.state.tab}
          floatingLabelText="Group"
          /> <br/>
           <TextField
           hintText="Publish Name"
           floatingLabelText="Name"
         /><br />

         <br />

         <SelectField
         autoWidth={true}
        multiple={true}
        hintText="Select Groups"
        value={this.state.elements}
        onChange={this.handleGroupsChange}
        selectionRenderer={this.selectionRenderer}
      >
        {this.menuItems(this.state.data)}
      </SelectField>
       </div>
       </Dialog>
      </div>
      </div>
    );
  }
}
