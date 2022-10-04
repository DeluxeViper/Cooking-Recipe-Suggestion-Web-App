import json

from bs4 import BeautifulSoup
from helpers import get_page
from pages import recipe
from consts import AR_BASE_URL, AR_CUISINE_LIST_PATH

# * just a script to test whats possible right now, not final by any means
# * nor does it follow ANY best practices

f = open("ingredients.txt", "a", buffering=1)
recipe_ingredients_set = set()
att_counter = 0
counter = 0
ing_counter = 0


cuisine_list_page = get_page(AR_BASE_URL + AR_CUISINE_LIST_PATH)
cuisine_list_soup = BeautifulSoup(cuisine_list_page, "lxml")
cuisine_list = cuisine_list_soup.findAll("li", {"class": "comp link-list__item"})

for cuisine_li_element in cuisine_list:
    cuisine_link = cuisine_li_element.find("a").get("href")
    cuisine_recipes_page = get_page(cuisine_link)
    cuisine_recipes_soup = BeautifulSoup(cuisine_recipes_page, "lxml")

    cuisine_recipes_list = cuisine_recipes_soup.findAll(
        "a",
        {
            "class": "comp mntl-card-list-items mntl-document-card mntl-card card card--no-image"
        },
    )

    for recipe_link in cuisine_recipes_list:
        att_counter += 1
        try:
            recipe_ingredients = recipe.parse_recipe(recipe_link.get("href"))
        except Exception:
            continue
        counter += 1
        for ingredient in recipe_ingredients:
            ing_counter += 1
            ingredient_name = ingredient["name"]
            if ingredient_name not in recipe_ingredients_set:
                f.write(ingredient_name + "\n")
            recipe_ingredients_set.add(ingredient_name)


f.close()
print("N of recipes attempted: ", att_counter)  # 2100 +-
print("N of recipes parsed: ", counter)  # 1500 +-
print("N of ingredients attempted: ", ing_counter)  # 15000 +- attempted
# * reduced to approx. 2100 ingredients stored
