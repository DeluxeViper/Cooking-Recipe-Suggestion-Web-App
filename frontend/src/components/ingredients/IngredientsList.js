import React from "react";
import { PropTypes, Grid } from "@material-ui/core";
import { testIngredientsList } from "../../testData/testData";
import IngredientCard from "./IngredientCard";

const IngredientsList = () => {
  return (
    <Grid container spacing={8} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {testIngredientsList.map((ingr, index) => {
        console.log(`index: ${index}`);
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

IngredientsList.propTypes = {};

export default IngredientsList;
