import React from 'react';
import {List, ListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import FileFolder from 'material-ui/svg-icons/file/folder';
import Avatar from 'material-ui/Avatar';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

export default class ListItems extends React.Component {
    constructor (props) {
        super(props);
    }

    li(dataItem, path) {
      let path2=path+"/"+dataItem.id;
        return (
            <Link key={dataItem.id} to={path2}> <ListItem leftAvatar={<Avatar icon={<FileFolder />} />}
            rightIcon={<ActionInfo />} key={dataItem.id} primaryText={dataItem.displayName}></ListItem>
            </Link>
        );
    }

    render () {
      let data
      return(
            <List>
                { this.props.data.map((data)=>this.li(data, this.props.tab)) }
            </List>

          )
    }
  }
