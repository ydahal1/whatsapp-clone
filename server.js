//importing
import express from "express";
import mongoose from "mongoose";
import Messages from "./dbMessages.js";
import Pusher from "pusher";
import cors from "cors";
import db_url from "./dev.js";

//app config
const app = express();
const PORT = process.env.PORT || 9000;

//Serve static files css and html
app.use(express.static("client/build"));

//index.html for other files
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "/client", "build", "index.html"));
  });
}

//Pusher
const pusher = new Pusher({
  appId: "1163652",
  key: "610b5084e8c096f0ccce",
  secret: "93488d554054cec10d96",
  cluster: "us2",
  useTLS: true
});

//middlewares
app.use(express.json());
app.use(cors());

mongoose.connect(db_url, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

//Listiners
const db = mongoose.connection;
db.once("open", () => {
  console.log("Connected to DB");

  const msgCollection = db.collection("messagecontents");
  const changeStream = msgCollection.watch();

  changeStream.on("change", change => {
    console.log("Changed occoured in DB cc");
    if (change.operationType === "insert") {
      const messageDetails = change.fullDocument;
      pusher.trigger("messages", "inserted", {
        name: messageDetails.name,
        message: messageDetails.message,
        timeStamp: messageDetails.timeStamp,
        received: messageDetails.received
      });
    } else {
      console.log("Not triggering pusher");
    }
  });
});

// ???

//api routes
// app.get("/", (req, res) => res.status(200).send("Hello world"));

//Send message
app.post("/messages/new", (req, res) => {
  const dbMessage = req.body;

  Messages.create(dbMessage, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

//Get messages
app.get("/messages/sync", (req, res) => {
  Messages.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

//listiner
app.listen(PORT, () => console.log(`listining on port ${PORT}`));
