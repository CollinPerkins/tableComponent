```js
import React from "react";

import Table, {Tr, Td, tableStylesheet} from "../dist/table.js";
import data from "./table.mock.yaml";

class Custom extends React.Component{
  renderTableList(){
    return data.map((item, index) => {
      return (<Tr key={index}>
        <Td column="name">{item.name}</Td>
        <Td column="email">{item.email}</Td>
        <Td column="status">{item.isActive ? "Active" : "Inactive"}</Td>
        <Td column="action">
          <center>
            <button> edit </button>
            <button> delete </button>
          </center>
        </Td>
      </Tr>
    )
    });
  }
  render(){
    return <Table>{this.renderTableList()}</Table>
  }
}

export default Custom;

```
