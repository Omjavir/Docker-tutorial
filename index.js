const express = require('express')

const app = express();

app.get('/', (req, res) => {
    console.log({ message: "Hello from Docker 🐋" });
})

app.listen(9000, () => {
    console.log("Server running on http://localhost:9000");
})