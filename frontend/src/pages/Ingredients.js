import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import SearchField from "../components/SearchField";
import IngredientsList from "../components/ingredients/IngredientsList";
import { testIngredientsList } from "../testData/testData";
import { getRecipesByIngredients } from "../services/dataService";
import RecipeCardList from "../components/RecipeCardList";

const useStyles = makeStyles((theme) => ({
  sectionMargin: {
    margin: "50px",
    touchAction: "none",
  },
  headerSpacing: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

const Ingredients = () => {
  const classes = useStyles();
  const [filter, setFilter] = useState("");
  const [ingredients, setIngredients] = useState();
  const [selectedIngrs, setSelectedIngrs] = useState([]);
  const [matchedRecipes, setMatchedRecipes] = useState([]);

  useEffect(() => {
    populateIngredientsList();
  }, []);

  const populateIngredientsList = () => {
    
    setIngredients([...testIngredientsList]);
  };

  const onChange = (event) => setFilter(event.target.value);

  const handleCardClick = (e, ingredientName, ingredientImage) => {
    console.log(ingredientName + ", " + ingredientImage);
    // Add element if it doesn't already exist in list
    const element = selectedIngrs.find(
      (ingr) => ingr.ingredientName === ingredientName
    );
    if (!element) {
      setSelectedIngrs([
        ...selectedIngrs,
        { ingredientName, ingredientImageLink: ingredientImage },
      ]);
    }
  };

  const handleSelectedCardClick = (e, ingredientName, ingredientImage) => {
    console.log(`${ingredientName}, ${ingredientImage}`);
    setSelectedIngrs((ingrs) => {
      const newingrs = [...ingrs];
      const index = newingrs.findIndex(
        (ingr) => ingr.ingredientName === ingredientName
      );
      if (index == -1) {
        return ingrs;
      }
      newingrs.splice(index, 1);
      return newingrs;
    });
  };
  const handleSearchClick = () => {
    let ingredients = selectedIngrs.map(ingredient => ingredient.ingredientName.toLowerCase());
    getRecipesByIngredients(ingredients).then((data) => {
      setMatchedRecipes(data.results)
    })
  }
  return (
    <div className={classes.sectionMargin}>
      <div style={{ marginBottom: "50px" }}>
        <Typography variant="h1">Ingredients</Typography>
        <div className={classes.headerSpacing}></div>
      </div>
      <SearchField
        filter={filter}
        handleChange={onChange}
        labelValue={"Enter an ingredient name"}
      />
      <IngredientsList
        filter={filter}
        ingredients={ingredients}
        handleCardClick={handleCardClick}
        listId={"notSelected"}
      />
      <Typography variant="h2">Your Selected Ingredients</Typography>
      <IngredientsList
        ingredients={selectedIngrs}
        listId={"selected"}
        handleCardClick={handleSelectedCardClick}
      />
       {selectedIngrs.length > 0 && <Button variant="contained" onClick={handleSearchClick}>Search for Recipes</Button>}
       {matchedRecipes.length > 0  && <div><RecipeCardList recipeCardList={matchedRecipes}></RecipeCardList> </div>}

    </div>
  );
};

export default Ingredients;
