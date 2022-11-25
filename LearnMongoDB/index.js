const {MongoClient, ObjectId} = require("mongodb");
const dotenv = require("dotenv");
dotenv.config();

MongoClient.connect(process.env.CONNECTIONSTRING, async (err, client) => {
  const db = client.db("LearnWebCode_MongoDB");
  const pets = db.collection("Pets");
  // const result = await pets.find().toArray();
  // console.log(result);
  
  // await pets.insertOne({name: "Hungry", species: "cat", age: 4});
  // console.log("Add new cat");

  // await pets.updateOne({_id: ObjectId("63803e3ce684dc1641b52034")}, {$set: {name: "Full"}});
  // console.log("Update pets");

  await pets.deleteOne({_id: ObjectId("63803e3ce684dc1641b52034")});
  console.log("Delete one");
  client.close();
});
