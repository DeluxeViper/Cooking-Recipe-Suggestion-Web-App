from bs4 import BeautifulSoup
from helpers import get_page

from .info import get_name, get_description, get_details
from .ingredients import get_ingredients
from .steps import get_cooking_steps


def parse_recipe(url: str, cuisine: str, img_link: str):
    page = get_page(url)
    if not page:
        return None

    soup_page = BeautifulSoup(page, "lxml")

    name = get_name(soup_page)
    description = get_description(soup_page)
    ingredients = get_ingredients(soup_page)
    steps = get_cooking_steps(soup_page)
    details = get_details(soup_page)

    recipe = {
        "name": name,
        "description": description,
        "cuisine": cuisine,
        "img": img_link,
        "ingredients": ingredients,
        "steps": steps,
        "details": details,
    }
    return recipe
