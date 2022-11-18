import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import { testIngredientsList } from "../../testData/testData";
import IngredientCard from "./IngredientCard";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  grid: {
    display: "flex",
    flexWrap: "wrap",
    padding: 20,
    rowGap: "10px",
    gap: "20px",
    width: "100%",
    "@media (min-width: 1500px)": {
      width: "100%",
    },
  },
}));
const IngredientsList = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.grid}>
      {testIngredientsList
        .filter((ingr) =>
          ingr.ingredientName
            .toLowerCase()
            .includes(
              props.filter === undefined ? "" : props.filter.toLowerCase()
            )
        )
        .map((ingr, index) => {
          return (
            <IngredientCard
              ingrName={ingr.ingredientName}
              ingrImage={ingr.ingredientImageLink}
            />
          );
        })}
    </div>
  );
};

IngredientsList.propTypes = {
  filter: PropTypes.string,
};

export default IngredientsList;
