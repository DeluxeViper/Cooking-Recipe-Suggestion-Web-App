import React from "react";
import { TextField } from "@material-ui/core";
import PropTypes from "prop-types";

const SearchField = (props) => {
  return (
    <TextField
      id="outlined-basic"
      label="Outlined"
      variant="outlined"
      value={props.filter}
      onChange={props.handleChange}
    />
  );
};

SearchField.propTypes = {
  filter: PropTypes.string,
  handleChange: PropTypes.any,
};

export default SearchField;
