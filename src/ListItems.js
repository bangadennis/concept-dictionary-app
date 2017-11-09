import React from 'react';
import {
Table,
TableBody,
TableHeader,
TableHeaderColumn,
TableRow,
TableRowColumn,
} from 'material-ui/Table';

export default class ListItems extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            data: []
        }
    }

    li (dataItem, index) {
        return (
            <TableRowColumn key={index}>{dataItem}</TableRowColumn>
        );
    }

    render () {
        return (
            <Table selectable={false}>
              <TableHeader>
               <TableRow>
                 <TableHeaderColumn>Name</TableHeaderColumn>
                 <TableHeaderColumn>Description</TableHeaderColumn>
               </TableRow>
              </TableHeader>
              <TableBody>
               <TableRow>
                 <TableRowColumn>1</TableRowColumn>
                 <TableRowColumn>John Smith</TableRowColumn>
                 <TableRowColumn>Employed</TableRowColumn>
               </TableRow>

              </TableBody>
            </Table>
        );
    }
}
