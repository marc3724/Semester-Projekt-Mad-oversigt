const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;

/*const url = 'mongodb://localhost:27017';*/

const url = 'mongodb+srv://Tim:12345@foodcheck.19jdzhl.mongodb.net/test';

MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {

    if (err) throw err;

    console.log(client.topology.clientInfo);

    client.close();
});