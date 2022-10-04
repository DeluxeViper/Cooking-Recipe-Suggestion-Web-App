from pages import recipe

# * just a line to test, currently only returns ingredient list
parsed_recipe = recipe.parse_recipe('https://www.allrecipes.com/recipe/23600/worlds-best-lasagna/')
print(parsed_recipe)
