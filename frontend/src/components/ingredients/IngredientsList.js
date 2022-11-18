import React from "react";
import { Grid } from "@material-ui/core";
import { testIngredientsList } from "../../testData/testData";
import IngredientCard from "./IngredientCard";
import PropTypes from "prop-types";

const IngredientsList = (props) => {
  return (
    <Grid container spacing={8} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
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
            <Grid item xs={12} key={index}>
              <IngredientCard
                ingrName={ingr.ingredientName}
                ingrImage={ingr.ingredientImageLink}
              />
            </Grid>
          );
        })}
    </Grid>
  );
};

IngredientsList.propTypes = {
  filter: PropTypes.string,
};

export default IngredientsList;
