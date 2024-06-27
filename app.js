const express = require('express');
const app = express();
const PORT = process.env.PORT ?? 3456;
const path = require('node:path');

app.use(express.static(path.join(__dirname, "/public")))

app.listen(PORT, ()=>{
    console.log(`servidor corriendo en puerto: ${PORT}`);
});

app.get("/", (req, res) => {
    res.sendFile(path.resolve (__dirname, "./views/home.html"));
});

app.get("/register", (req, res) => {
    res.sendFile(path.resolve (__dirname, "./views/register.html"));
});

app.get("/login", (req, res) => {
    res.sendFile(path.resolve (__dirname, "./views/login.html"));
});

