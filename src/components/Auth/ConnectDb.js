// const { MongoClient, ServerApiVersion } = require('mongodb');

// // Replace the placeholder with your actual MongoDB connection string
// const uri = 'YOUR_MONGODB_CONNECTION_STRING';

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
//   useNewUrlParser: true, // Use the new URL parser
//   useUnifiedTopology: true, // Use the new Server Discovery and Monitoring engine
// });

// async function connectToMongoDB() {
//   try {
//     // Connect the client to the server (optional starting in v4.7)
//     await client.connect();

//     // Send a ping to confirm a successful connection
//     await client.db('admin').command({ ping: 1 });
//     console.log('Pinged your deployment. You successfully connected to MongoDB!');

//     return client;
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error.message);
//     throw error; // Propagate the error for higher-level handling
//   }
// }

// async function closeMongoDBConnection() {
//   try {
//     // Close the MongoDB connection
//     await client.close();
//     console.log('MongoDB connection closed.');
//   } catch (error) {
//     console.error('Error closing MongoDB connection:', error.message);
//     throw error; // Propagate the error for higher-level handling
//   }
// }

// module.exports = { connectToMongoDB, closeMongoDBConnection };




// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://benjibogush:<password>@mobilecluster.w8yenek.mongodb.net/?retryWrites=true&w=majority";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
