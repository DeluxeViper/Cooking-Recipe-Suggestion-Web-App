import React from "react";
import { Card, CardMedia, makeStyles, Typography } from "@material-ui/core";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  ingredientCard: {
    height: "100%",
    width: "10%",
    minWidth: "150px",
    padding: "16px",
    borderRadius: "10%",
  },
  cardContent: {
    width: "50%",
    margin: "0 50px 0 50px",
  },
}));

const IngredientCard = (props) => {
  const classes = useStyles();
  const ingrName = props.ingrName;
  const ingrImage = props.ingrImage;

  return (
    <Card className={classes.ingredientCard}>
      <CardMedia
        style={{ marginBottom: "30px" }}
        component="img"
        image={ingrImage}
      />
      <Typography variant="h4" align="center">
        {ingrName}
      </Typography>
    </Card>
  );
};

export default IngredientCard;
IngredientCard.propTypes = {
  ingrName: PropTypes.string,
  ingrImage: PropTypes.string,
};
