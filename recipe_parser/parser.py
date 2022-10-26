import pages


# * just a script to test whats possible right now, not final by any means
# * nor does it follow ANY best practices

f = open("ingredients.txt", "a", buffering=1)
recipe_ingredients_set = set()

# get links for each cuisine's homepage
cuisine_page_links_list = pages.cuisines.get_cuisine_page_links()

for cuisine_page_link in cuisine_page_links_list:
    # get links for each recipe's page of this cuisine
    cuisine_recipes_links_list = pages.recipes.get_recipe_page_links(cuisine_page_link)

    for recipe_link in cuisine_recipes_links_list:
        # try to extract ingredients from a recipe
        try:
            recipe_ingredients = pages.recipe.parse_recipe(recipe_link)
        # if parsing is unsuccessfull, discard recipe
        except Exception as e:
            continue

        for ingredient in recipe_ingredients:
            if ingredient not in recipe_ingredients_set:
                f.write(ingredient + "\n")
            recipe_ingredients_set.add(ingredient)


f.close()
# print("N of recipes attempted: ", att_counter)  # 2100 +-
# print("N of recipes parsed: ", counter)  # 1500 +-
# print("N of ingredients attempted: ", ing_counter)  # 15000 +- attempted
# # * reduced to approx. 2100 ingredients stored
