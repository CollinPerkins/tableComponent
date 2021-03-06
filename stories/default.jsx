// React Modules
import React from "react";

// Application Modules
import Table from "../dist/table.js";
import data from "./table.mock.yaml";

const Default = (props) => {
  return <Table data={data} {...props}/>
}

export default Default;
