const connectToMongo = require('./db')
const express = require('express');

// const todo = require("./routes/todo");

connectToMongo();
const app = express();
const port = process.env.PORT || 5000;

// app.use(cors())

app.use(express.json())
app.use('/api/auth', require('./routes/auth'))

app.use("/api/todo",require("./routes/todo"));   


// app.get("/", (req, res) => res.send("Server up and running"));

app.listen(port, () => {
    console.log(`iNotebook listing at http://localhost:${port}`)

})  