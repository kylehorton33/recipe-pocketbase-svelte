/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7rnvhh2son7fki3")

  // remove
  collection.schema.removeField("t1ok4swh")

  // remove
  collection.schema.removeField("6xaucbgw")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6msan9pm",
    "name": "ingredients",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "b22rghpd",
    "name": "instructions",
    "type": "text",
    "required": false,
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "t1ok4swh",
    "name": "recipe",
    "type": "editor",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "convertUrls": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6xaucbgw",
    "name": "instructions",
    "type": "editor",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "convertUrls": false
    }
  }))

  // remove
  collection.schema.removeField("6msan9pm")

  // remove
  collection.schema.removeField("b22rghpd")

  return dao.saveCollection(collection)
})
