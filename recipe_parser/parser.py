import pages


# * just a script to test whats possible right now, not final by any means
# * nor does it follow ANY best practices

f = open("ingredients.txt", "a", buffering=1)
recipe_ingredients_set = set()


cuisine_page_links_list = pages.cuisine_list.get_cuisine_page_links()
for cuisine_page_link in cuisine_page_links_list:
    cuisine_recipes_links_list = pages.cuisine_recipes.get_recipe_page_links(
        cuisine_page_link
    )
    for recipe_link in cuisine_recipes_links_list:
        try:
            recipe_ingredients = pages.recipe.parse_recipe(recipe_link)
        except Exception as e:
            print(e)
            continue
        for ingredient in recipe_ingredients:
            ingredient_name = ingredient["name"]
            if ingredient_name not in recipe_ingredients_set:
                f.write(ingredient_name + "\n")
            recipe_ingredients_set.add(ingredient_name)


f.close()
# print("N of recipes attempted: ", att_counter)  # 2100 +-
# print("N of recipes parsed: ", counter)  # 1500 +-
# print("N of ingredients attempted: ", ing_counter)  # 15000 +- attempted
# # * reduced to approx. 2100 ingredients stored
