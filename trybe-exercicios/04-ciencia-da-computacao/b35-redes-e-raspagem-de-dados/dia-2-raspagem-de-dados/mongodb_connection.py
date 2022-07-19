from pymongo import MongoClient


with MongoClient() as client:
  db = client.catalogue
  book = {
    'title': 'A Light in the Attic'
  }
  document_id = db.books.insert_one(book).inserted_id
  print(document_id)
