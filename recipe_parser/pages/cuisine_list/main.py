from bs4 import BeautifulSoup
from helpers import get_page


def get_cuisine_page_links():
    cuisine_list_page = get_page("https://www.allrecipes.com/cuisine-a-z-6740455")
    cuisine_list_page_soup = BeautifulSoup(cuisine_list_page, "lxml")

    cuisine_page_element_list = cuisine_list_page_soup.findAll(
        "li", {"class": "comp link-list__item"}
    )
    cuisine_page_link_list = [
        cuisine_page_element.find("a").get("href")
        for cuisine_page_element in cuisine_page_element_list
    ]

    return cuisine_page_link_list
