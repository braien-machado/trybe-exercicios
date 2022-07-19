import requests
from parsel import Selector

url_base = "http://books.toscrape.com/catalogue/"
next_page_url = 'page-1.html'


while next_page_url:

    response = requests.get(url_base + next_page_url)
    selector = Selector(text=response.text)


    for product in selector.css('.product_pod'):
        title = product.css('h3 a::attr(title)').get()
        price = product.css('.price_color::text').re_first(r"£\d+\.\d{2}")
        print(title, price)

        detail_href = product.css('h3 a::attr(href)').get()
        detail_page_url = url_base + detail_href

        detail_response = requests.get(detail_page_url)
        detail_selector = Selector(text=detail_response.text)

        description = detail_selector.css('#product_description ~ p::text').get()
        suffix = "...more"
        if description.endswith(suffix):
            description = description[:-len(suffix)]
        print(description)

    next_page_url = selector.css('.next a::attr(href)').get()
