import { Button, Card, CardActions, CardContent, CardMedia, Chip, makeStyles, Typography } from "@material-ui/core";
import {React} from "react";
import PropTypes from 'prop-types';    
import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    recipeCard: {
        width: "400px",
        margin: "40px",
        borderRadius: "10%",
      },
    recipeCardImg: {
      height: "275px",
      objectFit: "cover",
    },
    recipeCardContent: {
      paddingBottom: "36px",
    },

    // actions: {
    //   display: "flex",
    //   justifyContent: "space-between",

    // },
    labelChip: {
      marginRight: "24px",
    },
    viewRecipeButton: {
      width: "100%"
    },
    viewRecipeLink: {
      textDecoration: "none",
      width: "100%",
    }

}));

const recipeLink = "/recipes";

const RecipeCard = (props) => {
  RecipeCard.propTypes = {
    //refactor when recipeCardItem has ID
    recipeCardItem: PropTypes.shape({
        recipeName: PropTypes.string,
        timeLabel: PropTypes.string,
        recipeType: PropTypes.string,
        recipeImageLink: PropTypes.string
    })
}
const RecipeCard = (props) => {
  RecipeCard.propTypes = {
    //refactor when recipeCardItem has ID
    recipeCardItem: PropTypes.shape({
        recipeName: PropTypes.string,
        timeLabel: PropTypes.string,
        recipeType: PropTypes.string,
        recipeImageLink: PropTypes.string
    })
}
    const classes = useStyles();
    let {recipeCardItem} = props
    return (
      <Card className={classes.recipeCard}>
        <CardMedia
            className={classes.recipeCardImg}
            component="img"
            image = {recipeCardItem.ImgLink}
        />
        <CardContent className={classes.recipeCardContent}>
          <div>
            <Typography gutterBottom variant="h5" align="left">
              {recipeCardItem.Name}
            </Typography>
          </div>
          <CardActions className={classes.actions}>
            <Chip label={`⏰ ${recipeCardItem.Prep}`}/>
            <Chip label={`🍴 ${recipeCardItem.Cuisine}`} />
          </CardActions>
          <CardActions>
              <Link className={classes.viewRecipeLink} to={`${recipeLink}/${recipeCardItem.RecipeID}`}>
                <Button className={classes.viewRecipeButton} variant="outlined" size="medium">View Recipe</Button>
              </Link>
          </CardActions>
        </CardContent>
      </Card>
    )
}

export default RecipeCard;