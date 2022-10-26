from random import betavariate
from bs4 import BeautifulSoup


def get_name(soup_page: BeautifulSoup) -> str:
    name = soup_page.find("h1", {"id": "article-heading_1-0"}).get_text().strip()

    return name


def get_description(soup_page: BeautifulSoup) -> str:
    description = (
        soup_page.find("h2", {"id": "article-subheading_1-0"}).get_text().strip()
    )

    return description
