/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ayzbr1vp5ahlfdh")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rgzwxvrm",
    "name": "nomAgent",
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
    "id": "q2qobnlw",
    "name": "telephoneAgent",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rdsvqiv7",
    "name": "mailAgent",
    "type": "email",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ayzbr1vp5ahlfdh")

  // remove
  collection.schema.removeField("rgzwxvrm")

  // remove
  collection.schema.removeField("q2qobnlw")

  // remove
  collection.schema.removeField("rdsvqiv7")

  return dao.saveCollection(collection)
})
