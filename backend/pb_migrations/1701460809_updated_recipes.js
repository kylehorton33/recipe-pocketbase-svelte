/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7rnvhh2son7fki3")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gucua1me",
    "name": "slug",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7rnvhh2son7fki3")

  // remove
  collection.schema.removeField("gucua1me")

  return dao.saveCollection(collection)
})
