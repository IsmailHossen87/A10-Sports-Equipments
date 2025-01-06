require('dotenv').config()
const express = require('express');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors');

app.use(express.json())
app.use(cors())



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.hg2ad.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // await client.connect();
    // await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    
    const dataCollection = client.db("SportsEquipment").collection("DataField")
    const usersCollection = client.db("SportsEquipment").collection("UsersCollection")
    const reviewCollection = client.db("SportsEquipment").collection("review")
    // login users
    app.post('/users', async(req,res)=>{
      const newUser = req.body;
      const result = await usersCollection.insertOne(newUser)
      res.send(result)
    })
    // review data get
    app.get('/review',async(req,res)=>{
      const data = req.data 
      const result = await reviewCollection.find(data).toArray()
      res.send(result)
    })

    // Login er user gulo get  korar jonno
    app.get('/cart', async (req, res) => {
        const query = {};
        if (req.query.email) {
        query.email = req.query.email;
        const result = await dataCollection.find(query).toArray();
        res.send(result);
      } 
    });

    // data post 
    app.post("/sport",async(req,res)=>{
        const newData = req.body;
        const result = await dataCollection.insertOne(newData)
        res.send(result)
    })
// specik 6 ta data dekhanor jonno
    app.get('/sports6',async(req,res)=>{
        const limit = parseInt(req.query.limit) || 6
        const data = await dataCollection.find().limit(limit).toArray()
        res.send(data)
    })
// all sports equipment data
    app.get('/sportsAll',async(req,res)=>{
      const totalData = dataCollection.find();
      const result = await totalData.toArray()
      res.send(result)
    })
      // data delete korar jonno
      app.delete('/delete/:id',async(req,res)=>{
        const id =req.params.id;
        const query = {_id: new ObjectId(id)}
        const result =await dataCollection.deleteOne(query)
        res.send(result)
      })
    // specik ekta card er details dekhar jonno   + update 
    app.get('/sports/:id' ,async(req,res)=>{
      const id = req.params.id;
      const qurey = {_id: new ObjectId(id)}
      const result = await dataCollection.findOne(qurey)
      res.send(result)
    })
    // update korar jonno
    app.patch('/sports/:id', async(req,res)=>{
      const id = req.params.id;
      const qurey = {_id: new ObjectId(id)}
      const data = req.body;
      const update={
        $set:{
          photo:data.photo,
          name:data.name,
          category:data.category,
          price:data.price,
          rating:data.rating,
          customization:data.customization,
          processingTime:data.processingTime,
          stockStatus:data.stockStatus,
          email:data.email
        }
      }
      const result = await dataCollection.updateOne(qurey,update)
      res.send(result)
    })
    
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

app.get('/', (req,res)=>{
    res.send("Server is Running")
})
app.listen(port,()=>{
    console.log(`Running port is ${port}`)
})