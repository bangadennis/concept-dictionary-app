import React, {Component} from 'react';
import DataTables from 'material-ui-datatables';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { init } from 'd2/lib/d2';

const TABLE_COLUMNS = [
  {
    key: 'name',
    label: 'Name'
  }, {
    key: 'code',
    label: 'Code'
  }
];

const TABLE_DATA = [
  {
    name: 'DataElement 1',
    code: '159'
  }, {
    name: 'DataElement 2',
    code: '159'
  }
];

class TableData extends Component {
  handleFilterValueChange = (value) => {
    // your filter logic
  }

  handleSortOrderChange = (key, order) => {
    // your sort logic
  }

  render() {
    return (
      <MuiThemeProvider  >
      <DataTables
        height={'auto'}
        selectable={false}
        showRowHover={true}
        columns={TABLE_COLUMNS}
        data={TABLE_DATA}
        showCheckboxes={false}
        onCellClick={this.handleCellClick}
        onCellDoubleClick={this.handleCellDoubleClick}
        onFilterValueChange={this.handleFilterValueChange}
        onSortOrderChange={this.handleSortOrderChange}
        page={1}
        count={100}
      />
       </MuiThemeProvider>
    );
  }
}

export default TableData;
