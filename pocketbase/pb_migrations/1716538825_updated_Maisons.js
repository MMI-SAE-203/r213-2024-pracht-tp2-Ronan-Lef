/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ayzbr1vp5ahlfdh")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "daxr65cq",
    "name": "agents",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "1jh2gtj9v02wnfj",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ayzbr1vp5ahlfdh")

  // remove
  collection.schema.removeField("daxr65cq")

  return dao.saveCollection(collection)
})
