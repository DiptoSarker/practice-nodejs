const express = require('express');
const Connection = require('mysql/lib/Connection');
const mysql = require("mysql");
const router = express.Router();


const db= mysql.createConnection({
   host: process.env.DATABASE_HOST,
   user: process.env.DATABASE_USER,
   password: process.env.DATABASE_PASSWORD,
   database: process.env.DATABASE
});


router.get("/", (req, res) => {
      res.render("index");
 });
 
router.get("/register", (req, res) => {
     res.render("register");
  });

  router.get("/login", (req, res) => {
    res.render("login");
 });

 router.get("/logout", (req, res) => {   
   res.render("index");
});

router.get("/addBook", (req, res) => {   
  res.render("addBook");
});





router.get("/userList", (req, res) => {
   let sql = "SELECT id,name,email,mobile FROM users ";
   let query = db.query(sql, (err, result) => {
     if (err) throw err;
     
     res.render("userList", { result });
   });
 });


 router.get("/bookList", (req, res) => {
  let sql = "SELECT id,Book_Name, Writer_Name, Publications, Catagories  FROM user ";
  let query = db.query(sql, (err, ress) => {
    if (err) throw err;
    
    res.render("bookList", { ress });
    console.log(ress)
  });
});


module.exports = router;