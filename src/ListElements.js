import React from 'react';
import {List, ListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import FileFolder from 'material-ui/svg-icons/file/folder';
import Avatar from 'material-ui/Avatar';

export default class ListElements extends React.Component {
    constructor (props) {
        super(props);
    }

    li (dataItem) {
        return (
            <ListItem leftAvatar={<Avatar icon={<FileFolder />} />}
            rightIcon={<ActionInfo />} key={dataItem.id} primaryText={dataItem.displayName}></ListItem>
        );
    }

    render () {
        console.info('listitems', this.props)
        return (
            <List>
                { this.props.data.map(this.li) }
            </List>
        );
    }
  }
