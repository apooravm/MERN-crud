const express = require('express');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;

const dbName = "MERN_DB";
const collName = "userCollection";
const url = `mongodb://0.0.0.0:27017/mydatabase`;

const app = express();
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.get("/", (req, res) => {
    res.send("<h1>Success!</h1>");
})

app.get("/api/get", (req, res) => {
    try {
        MongoClient.connect(url)
        .then((client) => {
            const db = client.db(dbName);

            db.collection(collName).find({}).toArray()
            .then((data) => {
                res.json(data);
            })
        })
        .catch((err) => {
            throw err
        });
    } catch (error) {
        res.status(200).json(error);     
    }
});

app.post("/api/post", (req, res) => {
    try {
        const data = req.body.review;
        console.log(data);
        MongoClient.connect(url)
        .then((client) => {
            const db = client.db(dbName);

            db.collection(collName).insertOne(data)
            .then(() => {
                res.status(200).json("Inserted!");
                client.close();
            })
            .catch(err => {
                throw err;
            })
        })
    } catch (error) {
        res.status(500).json(error);
    }
})

app.delete("/api/delete", (req, res) => {
    try {
        const username = req.body.username;
        MongoClient.connect(url)
        .then((client) => {
            const db = client.db(dbName);

            db.collection(collName).deleteOne({"username": username})
            .then(() => {
                res.status(200).json(`Deleted ${username}'s review!`);
                client.close();
            })
            .catch(err => {
                throw err;
            })
        })
    } catch (error) {
        res.status(500).json(error);
    }
})

app.put("/api/update", (req, res) => {
    try {
        const newData = req.body.review;
        const username = req.body.username;

        MongoClient.connect(url)
        .then((client) => {
            const db = client.db(dbName);

            db.collection(collName).updateOne({"username": username}, {
                $set: newData
            })
            .then(() => {
                res.status(200).json(`Updated ${username}'s review!`);
                client.close();
            })
            .catch(err => {
                throw err;
            })
        })
    } catch (error) {
        
    }
})

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
})
