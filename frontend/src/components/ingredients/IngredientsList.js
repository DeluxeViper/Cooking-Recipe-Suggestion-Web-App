import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import IngredientCard from "./IngredientCard";
import PropTypes from "prop-types";
import {
  GridContextProvider,
  GridDropZone,
  GridItem,
  swap,
  move,
} from "react-grid-dnd";
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
  grid2: {
    width: "100%",
    height: "500px",
  },
}));
const IngredientsList = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.grid}>
      {props.ingredients ? (
        props.ingredients
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
                handleClick={props.handleCardClick}
                ingrName={ingr.ingredientName}
                ingrImage={ingr.ingredientImageLink}
              />
            );
          })
      ) : (
        <Typography variant="p">Uh oh. No ingredients found.</Typography>
      )}
      {}
    </div>
  );
  //   return (
  //     <div className={classes.grid2}>
  //       <GridDropZone
  //         boxesPerRow={5}
  //         rowHeight={200}
  //         rowGap={50}
  //         id={props.listId ? props.listId : undefined}
  //       >
  //         {props.ingredients ? (
  //           props.ingredients
  //             .filter((ingr) =>
  //               ingr.ingredientName
  //                 .toLowerCase()
  //                 .includes(
  //                   props.filter === undefined ? "" : props.filter.toLowerCase()
  //                 )
  //             )
  //             .map((ingr, index) => (
  //               <GridItem key={ingr.ingrName}>
  //                 <IngredientCard
  //                   handleClick={props.handleCardClick}
  //                   ingrName={ingr.ingredientName}
  //                   ingrImage={ingr.ingredientImageLink}
  //                 />
  //               </GridItem>
  //             ))
  //         ) : (
  //           <Typography variant="p">Uh oh. No ingredients found.</Typography>
  //         )}
  //       </GridDropZone>
  //     </div>
  //   );
};

IngredientsList.propTypes = {
  filter: PropTypes.string,
  ingredients: PropTypes.arrayOf(
    PropTypes.shape({
      ingredientName: PropTypes.string,
      ingredientImageLink: PropTypes.string,
    })
  ),
  handleCardClick: PropTypes.any,
  listId: PropTypes.string,
};

export default IngredientsList;
