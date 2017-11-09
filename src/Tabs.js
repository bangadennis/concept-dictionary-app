import React from 'react';
import {Tab,Tabs} from 'material-ui/Tabs';
import ListItems from './ListItems';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};
const fetchData = (tab) => {
   let data_tab1 = ["hello","hello","hello","hello"];
   let data_tab2 = ["tab2","tab2","tab3","tab4"];
   if(tab==='a'){
     return data_tab1;
   }
   else if (tab==='b') {
     return data_tab2;
   }
   else {
     return [];
   }


}


export default class TabsControlled extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tab: 'a',
      data: fetchData('a')
    };

  }

  handleChange = (tab) => {
    this.setState({
      tab: tab,
      data:fetchData(tab)
    });
  };


  render() {
    return (
      <Tabs
        value={this.state.tab}
        onChange={this.handleChange} >
        <Tab label="Data Elements"value="a">
        <div>
          <h2 style={styles.headline}>List of Published Data Elements</h2>
          <div>
            <ListItems data={this.state.data} />
          </div>
        </div>
      </Tab>
      <Tab label="Indicators" value="b">
        <div>
          <h2 style={styles.headline}>List of Indicators Published Indicators</h2>
          <div>
          <ListItems data={this.state.data} />
          </div>
        </div>
      </Tab>
      </Tabs>
    );
  }
}
