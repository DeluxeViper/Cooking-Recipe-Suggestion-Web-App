const API_ENDPOINT = "localhost:3000"

const createEndpointURL = (object) => {
    return new URL(object, API_ENDPOINT)
}
const getRecipes = () => {
    const getRecipesEndpoint = createEndpointURL('recipes');
    fetch(getRecipesEndpoint, GET)
    .then((response) => response.json())
    .then((data) => {
       console.log(data);
       return Promise.resolve(data);
    })
    .catch((err) => {
       console.log(err.message);
    });
}

export {getRecipes}