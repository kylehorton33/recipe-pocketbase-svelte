/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7rnvhh2son7fki3")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_stYbkeM` ON `recipes` (`slug`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7rnvhh2son7fki3")

  collection.indexes = []

  return dao.saveCollection(collection)
})
