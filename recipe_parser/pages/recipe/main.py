from bs4 import BeautifulSoup
from helpers import get_page

from .ingredients import get_ingredients


def parse_recipe(url: str):
    page = get_page(url)
    if not page:
        return None

    soup_page = BeautifulSoup(page, "lxml")
    ingredients = get_ingredients(soup_page)

    return ingredients
