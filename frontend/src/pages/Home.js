import React from "react";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  body: {
    margin: "40px 82px 40px 82px",
  },
  trendingCard: {
    margin: "40px",
    height: "640px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  mainCardImg: {
    width: "50%",
    objectFit: "cover",
  },
  cardContent: {
    width: "50%",
    margin: "0 50px 0 50px",
  },
  authorDetails: {
    display: "inline-flex",
    marginTop: "104px",
  },
  cardChips: {
    marginTop: "30px",
  },
  ingredientsHeader: {
    display: "flex",
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
  },
  recipesList: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
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
  }
  
}));

const Home = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
    <div className={classes.body}>
      <div className={classes.trendingSection}>
        <Card className={classes.trendingCard} raised>
          <CardContent className={classes.cardContent}>
            <Chip label="🔥 Hot Recipe" />
            <Typography gutterBottom variant="h2" component="div">
              Sweet Chili Chicken Wings
            </Typography>
            <Typography gutterBottom variant="body2" color="text.secondary">
              These Keto Sweet Chili, Sticky Asian chicken wings combine two of my favorite 
              things: Asian flavors and wings! Using my air fryer wings or crispy baked 
              chicken wings with my low-carb sweet chili sauce, these are a great appetizer 
              and beat take-out any time!
            </Typography>
            <CardActions className={classes.cardChips}>
              <Chip label="⏰ 30 Minutes" />
              <Chip label="🐔 Chicken" />
            </CardActions>
            <div className={classes.authorDetails}>
              <Avatar style={{marginRight: "16px"}}>AD</Avatar>
              <div>
                <Typography variant="caption">Alton D</Typography>
                <Typography variant="caption" paragraph>10 September 2022</Typography>
              </div>
            </div>
          </CardContent>
          <CardMedia
            className={classes.mainCardImg}
            component="img"
            image="https://c9u8e9q4.rocketcdn.me/wp-content/uploads/2020/01/Keto-Sweet-Chili-Wings-1-square.jpg"
          />
        </Card>
      </div>
      <div className={classes.section}>
        <div className={classes.ingredientsHeader}>
          <Typography variant="h3" gutterBottom>
            Ingredients
          </Typography>
          <Button>View All Ingredients</Button>
        </div>
        
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
        <div className={classes.recipesHeader}>
          <Typography variant="h3" gutterBottom>
            Simple and tasy recipes
          </Typography>
          <Typography variant="body1" gutterBottom>
            Find new and easy recipes easily
          </Typography>  
        </div>
        <div className={classes.recipesList}>
          <Card className={classes.recipeCard}>
            <CardMedia
              className={classes.recipeCardImg}
              component="img"
              image="https://www.peelwithzeal.com/wp-content/uploads/2021/11/wagyu-burger-10.jpg"
            />
            <CardContent className={classes.recipeCardContent}>
              <Typography gutterBottom variant="h5" align="left">
                Big and Juicy Wagyu Beef Cheeseburger
              </Typography>
              <CardActions>
                <Chip label="⏰ 30 Minutes" />
                <Chip label="🍴 Snack" />
            </CardActions>
            </CardContent>
          </Card>

          <Card className={classes.recipeCard}>
            <CardMedia
              className={classes.recipeCardImg}
              component="img"
              image="https://healthyfitnessmeals.com/wp-content/uploads/2022/02/Cilantro-lime-grilled-salmon-6.jpg"
            />
            <CardContent className={classes.recipeCardContent}>
              <Typography gutterBottom variant="h5" align="left">
                Fresh Lime Roasted Salmon with Ginger Sauce
              </Typography>
              <CardActions>
                <Chip label="⏰ 30 Minutes" />
                <Chip label="🍴 Fish" />
            </CardActions>
            </CardContent>
          </Card>

          <Card className={classes.recipeCard}>
            <CardMedia
              className={classes.recipeCardImg}
              component="img"
              image="https://foodhub.scene7.com/is/image/woolworthsltdprod/1108-utpancakes-large:Mobile-1300x1150"
            />
            <CardContent className={classes.recipeCardContent}>
              <Typography gutterBottom variant="h5" align="left">
                Strawberry Oatmeal Pancake with Honey Syrup
              </Typography>
              <CardActions>
                <Chip label="⏰ 30 Minutes" />
                <Chip label="🍴 Breakfast" />
            </CardActions>
            </CardContent>
          </Card>

          <Card className={classes.recipeCard}>
            <CardMedia
              className={classes.recipeCardImg}
              component="img"
              image="https://casuallypeckish.com/wp-content/uploads/2021/12/Creamy-chicken-and-bacon-pasta-7.jpg"
            />
            <CardContent className={classes.recipeCardContent}>
              <Typography gutterBottom variant="h5" align="left">
                Creamy Chicken and Bacon Pasta
              </Typography>
              <CardActions>
                <Chip label="⏰ 45 Minutes" />
                <Chip label="🍴 Noodles" />
            </CardActions>
            </CardContent>
          </Card>

          <Card className={classes.recipeCard}>
            <CardMedia
              className={classes.recipeCardImg}
              component="img"
              image="https://casuallypeckish.com/wp-content/uploads/2022/04/Mapo-tofu-7.jpg"
            />
            <CardContent className={classes.recipeCardContent}>
              <Typography gutterBottom variant="h5" align="left">
                Mapo Tofu
              </Typography>
              <CardActions>
                <Chip label="⏰ 30 Minutes" />
                <Chip label="🍴 Vegetarian" />
            </CardActions>
            </CardContent>
          </Card>

          <Card className={classes.recipeCard}>
            <CardMedia
              className={classes.recipeCardImg}
              component="img"
              image="https://bakerbynature.com/wp-content/uploads/2015/10/IMG_0483-5-2.jpg"
            />
            <CardContent className={classes.recipeCardContent}>
              <Typography gutterBottom variant="h5" align="left">
                Nutella Cinnamon Sugar Doughnuts
              </Typography>
              <CardActions>
                <Chip label="⏰ 2 hours" />
                <Chip label="🍴 Sweet" />
            </CardActions>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
    </React.Fragment>
  );
};

export default Home;
