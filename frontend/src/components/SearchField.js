import React from "react";
import { TextField } from "@material-ui/core";
import PropTypes from "prop-types";

const SearchField = (props) => {
  return <TextField id="outlined-basic" label="Outlined" variant="outlined" />;
};

SearchField.propTypes = {
  searchText: PropTypes.string,
  //refactor when recipeCardItem has ID
  //   recipeCardItem: PropTypes.shape({
  //     recipeName: PropTypes.string,
  //     timeLabel: PropTypes.string,
  //     recipeType: PropTypes.string,
  //     recipeImageLink: PropTypes.string,
  //   }),
};

export default SearchField;
