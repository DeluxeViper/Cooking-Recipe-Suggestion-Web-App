import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import SearchField from "../components/SearchField";
import IngredientsList from "../components/ingredients/IngredientsList";
import { testIngredientsList } from "../testData/testData";
import {
  GridContextProvider,
  GridDropZone,
  GridItem,
  swap,
  move,
} from "react-grid-dnd";
import IngredientCard from "../components/ingredients/IngredientCard";

const useStyles = makeStyles((theme) => ({
  sectionMargin: {
    margin: "50px",
    touchAction: "none",
  },
  headerSpacing: {
    display: "flex",
    justifyContent: "space-between",
  },
  grid2: {
    width: "100%",
    height: "500px",
  },
  container: {
    display: "flex",
    touchAction: "none",
    width: "800px",
    margin: "1rem auto",
  },
  dropzone: {
    flex: 1,
    height: "400px",
    border: "1px solid rgba(0, 0, 0, 0.1)",
    borderRadius: "1rem",
  },
}));

const Ingredients = () => {
  const classes = useStyles();
  const [filter, setFilter] = useState("");
  const [ingredients, setIngredients] = useState();
  const [selectedIngrs, setSelectedIngrs] = useState([]);
  const [items, setItems] = useState({
    notSelected: [],
    selected: [],
  });

  useEffect(() => {
    populateIngredientsList();
  }, []);

  const populateIngredientsList = () => {
    // setItems({
    //   notSelected: [...testIngredientsList],
    //   selected: [
    //     ...testIngredientsList.filter((ingr) => ingr.ingredientName === "Rice"),
    //   ],
    // });
    setIngredients([...testIngredientsList]);
  };

  // const onGridChange = (sourceId, sourceIndex, targetIndex, targetId) => {
  //   console.log("hola");
  //   console.log(
  //     `sourceId: ${sourceId}, sInd: ${sourceIndex}, tarIndex: ${targetIndex}, tarId: ${targetId}`
  //   );
  //   if (targetId) {
  //     const result = move(
  //       items[sourceId],
  //       items[targetId],
  //       sourceIndex,
  //       targetIndex
  //     );
  //     return setItems({
  //       ...items,
  //       [sourceId]: result[0],
  //       [targetId]: result[1],
  //     });
  //   }

  //   const result = swap(items[sourceId], sourceIndex, targetIndex);
  //   return setItems({
  //     ...items,
  //     [sourceId]: result,
  //   });
  // };

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
      {/* <GridContextProvider onChange={onGridChange}>
        <div className="container">
          <div className={classes.grid2}>
            <GridDropZone
              boxesPerRow={5}
              rowHeight={200}
              rowGap={50}
              id="notSelected"
              className="dropzone notSelected"
            >
              {items.notSelected
                .filter((ingr) =>
                  ingr.ingredientName
                    .toLowerCase()
                    .includes(filter === undefined ? "" : filter.toLowerCase())
                )
                .map((ingr, index) => (
                  <GridItem key={ingr.ingrName}>
                    <IngredientCard
                      handleClick={handleCardClick}
                      ingrName={ingr.ingredientName}
                      ingrImage={ingr.ingredientImageLink}
                    />
                  </GridItem>
                ))}
            </GridDropZone>
          </div> */}
      <IngredientsList
        filter={filter}
        ingredients={ingredients}
        handleCardClick={handleCardClick}
        listId={"notSelected"}
      />
      {/* <div className={classes.grid2}>
            <GridDropZone
              boxesPerRow={5}
              rowHeight={200}
              rowGap={50}
              id="selected"
              className="dropzone selected"
            >
              {items.selected
                .filter((ingr) =>
                  ingr.ingredientName
                    .toLowerCase()
                    .includes(filter === undefined ? "" : filter.toLowerCase())
                )
                .map((ingr, index) => (
                  <GridItem key={ingr.ingrName}>
                    <IngredientCard
                      handleClick={handleCardClick}
                      ingrName={ingr.ingredientName}
                      ingrImage={ingr.ingredientImageLink}
                    />
                  </GridItem>
                ))}
            </GridDropZone>
          </div> */}
      <Typography variant="h2">Your Selected Ingredients</Typography>
      <IngredientsList
        key={selectedIngrs.join(",")}
        ingredients={selectedIngrs}
        listId={"selected"}
        handleCardClick={handleSelectedCardClick}
      />
      {/* </div>
      </GridContextProvider>
    // </div> */}
    </div>
  );
};

export default Ingredients;
