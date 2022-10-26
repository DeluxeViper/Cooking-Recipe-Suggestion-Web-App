import pages


# * just a script to test whats possible right now, not final by any means
# * nor does it follow ANY best practices


# get links for each cuisine's homepage
cuisine_pages = pages.cuisines.get_cuisine_page_links()

for cuisine_name in cuisine_pages:
    cuisine_link = cuisine_pages[cuisine_name]
    # get links for each recipe's page of this cuisine
    cuisine_recipes_links_list = pages.recipes.get_recipe_page_links(cuisine_link)

    for recipe_link in cuisine_recipes_links_list:
        # try to extract ingredients from a recipe
        try:
            recipe = pages.recipe.parse_recipe(recipe_link, cuisine_name, "link")
            print(recipe, "\n")
        # if parsing is unsuccessfull, discard recipe
        except Exception as e:
            continue


# print("N of recipes attempted: ", att_counter)  # 2100 +-
# print("N of recipes parsed: ", counter)  # 1500 +-
# print("N of ingredients attempted: ", ing_counter)  # 15000 +- attempted
# # * reduced to approx. 2100 ingredients stored
