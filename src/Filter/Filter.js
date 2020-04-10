import React from "react";

import "react-select/dist/react-select.css";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";
import Select from "react-select";
import {byodColumns, contractColumns} from './columns';



class Filter extends React.Component {
  constructor() {
    super();
    this.state = {
      filtered: [],
      select2: 'Bell',
      columns: [],
      data: [],
    };
  }

  async getData(type) {
    // eslint-disable-next-line no-useless-concat
    const url = "http://127.0.0.1:8000/" + type;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  async getByodData() {
    // eslint-disable-next-line no-useless-concat
    const url = "http://127.0.0.1:8000/byod";
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  async getContractData() {
    // eslint-disable-next-line no-useless-concat
    const url = "http://127.0.0.1:8000/contracts";
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  async componentDidMount() {
    let type = 'byod' // 'contracts'
    let data = await this.getData(type);
    let columns = null;
    if(type === 'byod') {
      columns = byodColumns;
    } else {
      columns = contractColumns;
    }
    
    console.log("Final data");
    console.log(data);

    this.setState((state) => {
      return {
        columns: columns,
        data: data.plans,
      }
    })
  }

  onFilteredChangeCustom = (value, accessor) => {
    let filtered = this.state.filtered;
    let insertNewFilter = 1;

    if (filtered.length) {
      filtered.forEach((filter, i) => {
        if (filter["id"] === accessor) {
          if (value === "" || !value.length) filtered.splice(i, 1);
          else filter["value"] = value;

          insertNewFilter = 0;
        }
      });
    }

    if (insertNewFilter) {
      filtered.push({ id: accessor, value: value });
    }

    this.setState({ filtered: filtered });
  };

  render() {
    const { data } = this.state;
    console.log(data);
    return (
      <div>
        Select Provider :{""}
        <Select
          style={{ width: "50%", marginBottom: "20px" }}
          onChange={entry => {
            this.setState({ select2: entry });
            this.onFilteredChangeCustom(
              entry.map(o => {
                return o.value;
              }),
              "Provider"
            );
          }}
          value={this.state.select2}
          multi={true}
          options={[...new Set(this.state.data.map(item => item.Provider))].map((o, i) => {
            return { id: i, value: o, label: o };
          })}
        />
        <ReactTable
          getTdProps={() => ({
            style: {
              textAlign: 'center'
            }
          })}
          data={data}
          filterable
          filtered={this.state.filtered}
          onFilteredChange={(filtered, column, value) => {
            this.onFilteredChangeCustom(value, column.id || column.accessor);
          }}
          defaultFilterMethod={(filter, row, column) => {
            const id = filter.pivotId || filter.id;
            if (typeof filter.value === "object") {
              return row[id] !== undefined
                ? filter.value.indexOf(row[id]) > -1
                : true;
            } else {
              return row[id] !== undefined
                ? String(row[id]).indexOf(filter.value) > -1
                : true;
            }
          }}
          columns={[
            this.state.columns
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
        <br /><br /><br />
      </div>
    );
  }
}

export default Filter;
