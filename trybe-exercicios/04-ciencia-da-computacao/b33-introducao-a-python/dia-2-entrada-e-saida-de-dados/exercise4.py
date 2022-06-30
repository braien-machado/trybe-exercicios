# 🚀 Exercício 4: Dado o seguinte arquivo no formato JSON, leia seu conteúdo e calcule a porcentagem de livros em cada categoria em relação ao número total de livros. O resultado deve ser escrito em um arquivo no formato CSV como o exemplo abaixo.

# saída
# categoria,porcentagem
# Python,0.23201856148491878
# Java,0.23201856148491878
# PHP,0.23201856148491878

import json
import csv

with open('exercise4.json') as file:
  books = json.load(file)

categories = {}
for book in books:
  for category in book['categories']:
    if category not in categories:
      categories[category] = 0
    categories[category] += 1

for category in categories:
  categories[category] = categories[category] / len(books)

with open('exercise4.csv', 'w', encoding = 'utf-8') as file:
  writer = csv.writer(file)
  headers = ['categoria', 'porcentagem']
  writer.writerow(headers)

  for category, percentage in categories.items():
    row = [category, percentage]
    writer.writerow(row)
