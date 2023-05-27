const { publicDecrypt } = require("crypto");
const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 3000;

// EJS
app.set("view engine", "ejs");

//Статичная папка
app.use(express.static("public"));

// Cookie
const cookieParser = require('cookie-parser') 
app.use(cookieParser())

// Преобразование данных из буфера в читаемый вид
app.use(express.json())
app.use(express.urlencoded({ extended: false }))



// Рендер главной страницы
app.get(["/", "/index"], (req, res) => {
	res.render("index", { activePage: "index" });
});

// Рендер c++
app.get("/courses/c", (req, res) => {
	res.render("c++");
});

// Рендер python
app.get("/courses/python", (req, res) => {
	res.render("python");
});

// Рендер seti
app.get("/courses/seti", (req, res) => {
	res.render("seti");
});

// Рендер nodejs
app.get("/courses/nodejs", (req, res) => {
	res.render("nodejs");
});



app.listen(PORT, () => {
	console.log("см. тут: http://localhost:" + PORT);
});