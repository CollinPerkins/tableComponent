// React Modules
import React from "react";
import JsonTree from "react-json-tree";
import PropTypes from "prop-types";

// Application Modules
import {brand} from "./table.stylesheet.js";

const Td = ({td, activeRow, className}) => {
  var transformTd;
  const renderObject = () => <JsonTree data={td} hideRoot={true} theme={{
    tree: ({style}) => ({ style: Object.assign({}, style, {backgroundColor: undefined})}),
    label: ({style}) => {},
    arrowSign: {color: "inherit"},
    nestedNodeItemString: () => ({ className: "jsonNestedNodeItemString"}),
    valueText: () => ({ className: "jsonValueText"})
  }}/>

  if (td && React.isValidElement(td)) transformTd = td;
  else if (td && typeof td === "object") transformTd = renderObject();
  else if (typeof td !== "undefined" || typeof td === "boolean") transformTd = td.toString();

  return <td className={(activeRow ? `${className} activeIndex` : className)}>{transformTd}</td>;
}

Td.propTypes = {
  td: PropTypes.any,
  activeRow: PropTypes.bool,
  className: PropTypes.string
}

export default Td;
