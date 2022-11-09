import { Avatar, Card, CardHeader, Divider, List, ListItem, ListItemText, Typography,CardMedia } from "@material-ui/core";
import { AccessTimeFilled, IosShare, Print, Restaurant } from '@mui/icons-material';
import { makeStyles } from '@material-ui/core/styles';
import { Image } from 'mui-image'
import React from "react";
import {testIngredientsList} from "../testData/testData";
import RecipeCardList from "../components/RecipeCardList";
import IngredientSectionList from "../components/IngredientSectionList";
import StrikeThroughText from "../components/StrikeThroughText";


const useStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: theme.palette.grey[50],
    border: `1px solid ${theme.palette.info.main}`,
    color: theme.palette.info.main,
  },
  recipeHeader: {
    display: `flex`
  },
  sectionMargin: {
    margin: "80px",
  },
  authorDetails: {
    marginRight: "40px",
    paddingLeft: "32px",
    paddingRight: "32px",
    display: "flex",
    alignItems: "center",
  },
  recipeButtons: {
    display: "flex",
  },
  recipePhoto: {
    borderRadius: "15px",
    width: "55%"
  },
  recipeMacros: {
    width: "35%",
    marginLeft: "40px",
  },
  imageSection: {
    display: "flex",
    maxHeight: "600px",
    justifyContent: "space-between",
  },
  recipeMacrosCard: {
    borderRadius: "15px",
    height: "100%",
    padding: "32px",
  },
  directionsChecklistItem: {
    display: "flex",
    alignItems: "center",
  },
  directionsDescription: {
    padding: "24px 24px 48px 24px",
  },
  directionsHeader: {
    marginBottom: "32px",
  },
  directionItem: {
    marginBottom: "48px",
  },
  directionsSection: {
    width: "60%",
  },
  otherRecipesSection: {
    width: "30%"
  },
  ingredientsContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  otherRecipesItem: {
    display: "flex",
    alignItems: "center",
  },
  otherRecipesItemDescription: {
    width: "40%",
    paddingLeft: "24px",
    paddingRight: "24px"
  },
  otherRecipesItemPhoto: {
    width: "60%",
    height: "150px",
    borderRadius: "10px",
  },
  otherRecipesHeader: {
    marginBottom: "32px",
  },
  otherRecipesCardItem: {
    marginBottom: "24px"
  },
  suggestionsSection: {
    textAlign: "center"
  },
  recipeButtonItem: {
    paddingLeft: "32px",
    paddingRight: "32px",
  },
  headerSpacing: {
    display:"flex",
    justifyContent: "space-between",
  },
  ingredientCard: {
    height: "100%",
    width: "10%",
    padding: "16px",
    borderRadius: "10%",
  },
  ingredientsCarousel: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  section: {
    marginBottom: "150px",
    textAlign: "center",
  }

}));

const Ingredients = () => {
  const classes = useStyles();
  return (
    <div>
    <div className={classes.sectionMargin}>
      <Typography variant="h1">Ingredients</Typography>
      <div className={classes.headerSpacing}>
        
      </div>
      
    </div>
      
      <div className={classes.sectionMargin}>
        <Typography variant="subtitle1">Every good recipe starts with good ingredients!</Typography>
      </div>
      
      <div className={classes.section}>
               
        <div className={classes.ingredientsCarousel}>
          <Card className={classes.ingredientCard}>
            <CardMedia
                style={{marginBottom: "30px"}}
                component="img"
                image="https://encycolorpedia.com/emojis/cooked-rice.svg"

            />
            <Typography variant="h4" align="center">Rice</Typography>
          </Card>
          <Card className={classes.ingredientCard}>
            <CardMedia
                style={{marginBottom: "30px"}}
                component="img"
                image="https://emojiguide.org/images/emoji/q/1ho9vysgl820q.png"
            />
            <Typography variant="h4" align="center">Lettuce</Typography>
          </Card>
          <Card className={classes.ingredientCard}>
            <CardMedia
                style={{marginBottom: "30px"}}
                component="img"
                image="https://encycolorpedia.com/emojis/cut-of-meat.svg"
            />
            <Typography variant="h4" align="center">Beef</Typography>
          </Card>
          <Card className={classes.ingredientCard}>
            <CardMedia
                style={{marginBottom: "30px"}}
                component="img"
                image="https://encycolorpedia.com/emojis/cheese-wedge.svg"
            />
            <Typography variant="h4" align="center">Cheese</Typography>
          </Card>
          <Card className={classes.ingredientCard}>
            <CardMedia
                style={{marginBottom: "30px"}}
                component="img"
                image="https://encycolorpedia.com/emojis/bread.svg"
            />
            <Typography variant="h4" align="center">Bread</Typography>
          </Card>
          <Card className={classes.ingredientCard}>
            <CardMedia
                style={{marginBottom: "30px"}}
                component="img"
                image="https://encycolorpedia.com/emojis/potato.svg"
            />
            <Typography variant="h4" align="center">Potato</Typography>
          </Card>
          
        </div>
      </div>
      <div className={classes.section}>
               
        <div className={classes.ingredientsCarousel}>
          <Card className={classes.ingredientCard}>
            <CardMedia
                style={{marginBottom: "30px"}}
                component="img"
                image="https://encycolorpedia.com/emojis/cooked-rice.svg"

            />
            <Typography variant="h4" align="center">Rice</Typography>
          </Card>
          <Card className={classes.ingredientCard}>
            <CardMedia
                style={{marginBottom: "30px"}}
                component="img"
                image="https://emojiguide.org/images/emoji/q/1ho9vysgl820q.png"
            />
            <Typography variant="h4" align="center">Lettuce</Typography>
          </Card>
          <Card className={classes.ingredientCard}>
            <CardMedia
                style={{marginBottom: "30px"}}
                component="img"
                image="https://encycolorpedia.com/emojis/cut-of-meat.svg"
            />
            <Typography variant="h4" align="center">Beef</Typography>
          </Card>
          <Card className={classes.ingredientCard}>
            <CardMedia
                style={{marginBottom: "30px"}}
                component="img"
                image="https://encycolorpedia.com/emojis/cheese-wedge.svg"
            />
            <Typography variant="h4" align="center">Cheese</Typography>
          </Card>
          <Card className={classes.ingredientCard}>
            <CardMedia
                style={{marginBottom: "30px"}}
                component="img"
                image="https://encycolorpedia.com/emojis/bread.svg"
            />
            <Typography variant="h4" align="center">Bread</Typography>
          </Card>
          <Card className={classes.ingredientCard}>
            <CardMedia
                style={{marginBottom: "30px"}}
                component="img"
                image="https://encycolorpedia.com/emojis/potato.svg"
            />
            <Typography variant="h4" align="center">Potato</Typography>
          </Card>
          
        </div>
      </div>
      <div className={classes.section}>
               
        <div className={classes.ingredientsCarousel}>
          <Card className={classes.ingredientCard}>
            <CardMedia
                style={{marginBottom: "30px"}}
                component="img"
                image="https://encycolorpedia.com/emojis/cooked-rice.svg"

            />
            <Typography variant="h4" align="center">Rice</Typography>
          </Card>
          <Card className={classes.ingredientCard}>
            <CardMedia
                style={{marginBottom: "30px"}}
                component="img"
                image="https://emojiguide.org/images/emoji/q/1ho9vysgl820q.png"
            />
            <Typography variant="h4" align="center">Lettuce</Typography>
          </Card>
          <Card className={classes.ingredientCard}>
            <CardMedia
                style={{marginBottom: "30px"}}
                component="img"
                image="https://encycolorpedia.com/emojis/cut-of-meat.svg"
            />
            <Typography variant="h4" align="center">Beef</Typography>
          </Card>
          <Card className={classes.ingredientCard}>
            <CardMedia
                style={{marginBottom: "30px"}}
                component="img"
                image="https://encycolorpedia.com/emojis/cheese-wedge.svg"
            />
            <Typography variant="h4" align="center">Cheese</Typography>
          </Card>
          <Card className={classes.ingredientCard}>
            <CardMedia
                style={{marginBottom: "30px"}}
                component="img"
                image="https://encycolorpedia.com/emojis/bread.svg"
            />
            <Typography variant="h4" align="center">Bread</Typography>
          </Card>
          <Card className={classes.ingredientCard}>
            <CardMedia
                style={{marginBottom: "30px"}}
                component="img"
                image="https://encycolorpedia.com/emojis/potato.svg"
            />
            <Typography variant="h4" align="center">Potato</Typography>
          </Card>
          
        </div>
      </div>
      
    </div>
  );
};

export default Ingredients;
