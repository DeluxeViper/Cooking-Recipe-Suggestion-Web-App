from bs4 import BeautifulSoup
from helpers import get_page

from .ingredients import get_ingredients
from .steps import get_cooking_steps


def parse_recipe(url: str, cuisine: str):
    page = get_page(url)
    if not page:
        return None

    soup_page = BeautifulSoup(page, "lxml")

    ingredients = get_ingredients(soup_page)
    steps = get_cooking_steps(soup_page)

    recipe = {
        "name": "Recipe name",
        "description": "Recipe description",
        "cuisine": cuisine,
        "img": "Recipe img",
        "ingredients": ingredients,
        "steps": steps,
        "preparation_time": "Recipe preparation time",
        "cooking_time": "Recipe cooking time",
    }
    return recipe
