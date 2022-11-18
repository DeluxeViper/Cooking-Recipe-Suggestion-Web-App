import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import SearchField from "../components/SearchField";
import IngredientsList from "../components/ingredients/IngredientsList";

const useStyles = makeStyles((theme) => ({
  sectionMargin: {
    margin: "80px",
  },
  headerSpacing: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

const Ingredients = () => {
  const classes = useStyles();
  const [filter, setFilter] = useState("");

  const onChange = (event) => setFilter(event.target.value);

  return (
    <div>
      <div className={classes.sectionMargin}>
        <Typography variant="h1">Ingredients</Typography>
        <div className={classes.headerSpacing}></div>
      </div>
      <SearchField filter={filter} handleChange={onChange} />
      <IngredientsList filter={filter} />
    </div>
  );
};

export default Ingredients;
