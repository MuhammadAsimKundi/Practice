const express = require('express')
const { request } = require('http')
const app = express()
const MongoClient = require('mongodb').MongoClient
const PORT = 2121
require('dotenv').config()

let db;
const dbConnectionStr = process.env.DB_STRING;
const dbName = 'rap';

MongoClient.connect(dbConnectionStr)
.then(client => {
    console.log(`Connected to ${dbName} database.`);
    db = client.db(dbName);
})
.catch(error => {
    console.error('Database connection failed:', error);
});


app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())


app.get('/',(request,response)=>{
    db.collection('rappers').find().sort({likes: -1}).toArray()
    .then(data => {
        response.render('index.ejs', {info: data})
    })
    .catch(error => console.error(error))
})


app.post('/addRapper', (request, response) =>{
    db.collection('rappers').insertOne({stageName:request.body.stageName, birthName:request.body.birthName, likes: 0})
    .then(result =>{
        console.log('Rapper Added')
        response.redirect('/')
    })
    .catch(error => console.error(error))
})


// Route for adding a like
app.put('/addOneLike', (request, response) => {
db.collection('rappers').updateOne(
    { stageName: request.body.stageNameS, birthName: request.body.birthNameS, likes: request.body.likesS },
    { $set: { likes: request.body.likesS + 1 } },
    { sort: { _id: -1 }, upsert: false }
)
    .then(result => {
        console.log('Added One Like')  // Verify like update
        response.json('Like Added')  // Send response
    })
    .catch(error => {
        console.error('Error adding like:', error)
        response.status(500).json('Error adding like')
    })
})


// Route for deleting rapper
app.delete('/deleteRapper', (request, response) => {
const { stageNameS, birthNameS } = request.body
console.log('Deleting rapper:', stageNameS, birthNameS)  // Debugging line
db.collection('rappers').deleteOne({ stageName: stageNameS, birthName: birthNameS })
    .then(result => {
        console.log('Rapper Deleted')  // Verify deletion
        response.json('Rapper Deleted')  // Send response
    })
    .catch(error => {
        console.error('Error deleting rapper:', error)
        response.status(500).json('Error deleting rapper')
    })
})


app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Server runing on ${PORT}.`)
})