const express = require("express")
require("dotenv").config()
require("./src/db/dbConnection")
const cors = require('cors');
const router = require("./src/router")
const app = express()

const port = process.env.PORT || 5001

app.use(cors({
    origin: 'https://turktelekomservices.netlify.app', // İzin verilen domain
    methods: ['GET', 'POST'], // İzin verilen HTTP metodları
}));

app.use(express.json())
app.use("/api", router)

app.get("/", (req,res) => {
    res.status(200).send(`Server ${port} portunda çalışıyor.`)
})

app.listen(port,() => {
    console.log(`Server ${port} portunda çalışıyor.`)
})