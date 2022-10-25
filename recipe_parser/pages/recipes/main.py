from bs4 import BeautifulSoup
from helpers import get_page


def get_recipe_page_links(cuisine_page: str):
    cuisine_recipes_page = get_page(cuisine_page)
    cuisine_recipes_page_soup = BeautifulSoup(cuisine_recipes_page, "lxml")

    cuisine_recipe_element_list = cuisine_recipes_page_soup.findAll(
        "a",
        {
            "class": "comp mntl-card-list-items mntl-document-card mntl-card card card--no-image"
        },
    )
    cuisine_recipe_link_list = [
        cuisine_recipe_element.get("href")
        for cuisine_recipe_element in cuisine_recipe_element_list
    ]

    return cuisine_recipe_link_list
