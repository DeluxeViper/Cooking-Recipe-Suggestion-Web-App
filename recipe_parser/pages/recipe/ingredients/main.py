import json
import re
import unicodedata

from parse_ingredients import parse_ingredient

from bs4 import BeautifulSoup


def get_ingredients(soup_page: BeautifulSoup):
  structured_ingredients_list = []
  ingredients_list = soup_page.findAll('li', {'class':'mntl-structured-ingredients__list-item'})
  for ingredient_el in ingredients_list:
    ingredient_raw_text = ingredient_el.get_text()
    ingredient_text = format_ingredient(ingredient_raw_text)
    ingredient = parse_ingredient(ingredient_text)
    structured_ingredients_list.append(json.dumps(ingredient.__dict__))

  return structured_ingredients_list

def format_ingredient(ingredient: str):
  # remove trailing spaces and newlines
  ingredient = ingredient.strip()
  # remove parentheses () and brackets [] content
  ingredient = re.sub("[\(\[].*?[\)\]]", "", ingredient)
  # remove multiple spaces
  ingredient = ingredient.replace('  ', ' ')
  # convert unicode fractions to floats
  ingredient = convert_vulgar_fraction_to_float(ingredient)

  return ingredient

def convert_vulgar_fraction_to_float(ingredient: str):
  # ! poorly written function
  vf = get_vulgar_fraction(ingredient)
  if not vf:
    return ingredient

  vf_index = ingredient.index(vf)
  vf_numeric = unicodedata.numeric(vf)
  if vf_index == 0:
    ingredient = ingredient.replace(vf, str(vf_numeric))
  else:
    # ! huge assumption
    whole_number_str = ingredient[:vf_index]
    quantity = float(whole_number_str) + vf_numeric
    ingredient = ingredient.replace(ingredient[:vf_index+1], str(quantity))

  return ingredient

def get_vulgar_fraction(string: str):
  search_result = re.search(r"[\u2150-\u215E\u00BC-\u00BE]", string)
  if not search_result:
    return None
  
  return search_result.group(0)
