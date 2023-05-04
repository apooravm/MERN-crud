const express = require('express');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;

const dbName = "MERN_DB";
const collName = "userCollection";
const url = `mongodb://0.0.0.0:27017/mydatabase`;

const app = express();
app.use(cors());

// MongoClient.connect(url, function(err, client) {
//     console.log("in bruh");
//     if (err) throw err;
//     console.log("Database created!");

//     const db = client.db(dbName);
//     const userCollection = db.collection(collName);

//     app.get("/api/get", (req, res) => {
//         try {
//             const query = {};
//             userCollection.find(query).toArray((err, result) => {
//                 if (err) throw err;
//                 res.status(200).json(result);
//                 client.close();
//             })
//         } catch (error) {
//             res.status(500).json(error);
//         }
//     });
// });

const sampleData = [  {    "username": "GigiGoo",    "rating": 4.5,    "review": "This show is a rollercoaster of emotions with captivating characters and a thrilling storyline!"  },  
                      {    "username": "RockyRaccoon",    "rating": 2,    "review": "Unfortunately, this show misses the mark with dull characters and a predictable plot. It's a snooze-fest."  },  
                      {    "username": "BillyBob",    "rating": 4,    "review": "I'm loving this show! The plot twists and cliffhangers keep me on the edge of my seat!"  },  
                      {    "username": "SassySue",    "rating": 1.5,    "review": "I couldn't even make it through the first episode. The acting is cringe-worthy and the storyline is laughably bad."  },  
                      {    "username": "FunkyMonkey",    "rating": 3.5,    "review": "This show has its ups and downs, but overall it's an enjoyable watch with some interesting characters and a decent plot."  },  
                      {    "username": "BobbyBoop",    "rating": 2.5,    "review": "Meh. This show is mediocre at best. The characters are forgettable and the storyline is bland."  },  
                      {    "username": "CrazyCat",    "rating": 5,    "review": "I'm absolutely obsessed with this show! The characters are complex and the storyline is gripping. It's a must-watch!"  },  
                      {    "username": "SillySam",    "rating": 1,    "review": "Save yourself the time and skip this one. The writing is terrible and the acting is worse. Easily the worst show I've ever seen."  },  
                      {    "username": "LuckyLou",    "rating": 4,    "review": "This show is a fun and exciting ride! The characters are lovable and the storyline keeps you guessing until the very end."  },  
                      {    "username": "DopeyDave",    "rating": 2.5,    "review": "There are moments of potential, but ultimately this show falls short with uninteresting characters and a meandering plot."  }
                    ]

app.get("/api/get", (req, res) => {
    try {
        const query = {};
        res.status(200).json(sampleData);
    } catch (error) {
        res.status(500).json(error);
    }
});

app.post("/api/post", (req, res) => {
    try {
        const newData = req.body.data;

        res.status(200);
    } catch (error) {
        res.status(500).json(error);
    }
});

app.put("/api/put", (req, res) => {
    try {
        const data_id = req.body.id;
        const updatedData = req.body.data;

        res.status(200);
    } catch (error) {
        res.status(500).json(error);
    }
});

app.delete("/api/delete", (req, res) => {
    try {
        const data_id = req.body.id;

        res.status(200);
    } catch (error) {
        res.status(500).json(error);
    }
})

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
})
