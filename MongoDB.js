const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;

const url = 'mongodb+srv://Tim:12345@foodcheck.19jdzhl.mongodb.net/test';

async function run() {
    try {
      // Connect the client to the server (optional starting in v4.7)
      await client.connect();
      // Establish and verify connection
      await client.db("admin").command({ ping: 1 });
      console.log("Connected successfully to server");
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  run().catch(console.dir);









/*const url = 'mongodb://localhost:27017';


MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {

    if (err) throw err;

    console.log(client.topology.clientInfo);

    client.close();
});

db.createUser(
    {
      user: "myTester",
      pwd:  passwordPrompt(),   // or cleartext password
      roles: [ { role: "readWrite", db: "test" },
               { role: "read", db: "reporting" } ]
    }
  )*/

