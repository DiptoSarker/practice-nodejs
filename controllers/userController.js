const mysql = require('mysql');


const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE
  });

exports.view = (req, res) => {
    

    db.connect((error) =>{
        if(error) {
          console.log(error);
        } else {
          console.log("Mysql Connected....")
        }
        
        connection.createQuery('SELECT * FROM user', (err, rows)=> {
           connection.release();
           if(!err){
               res.render('addBook', {rows});
           } else{
               console.log(err)
           }
        
           console.log('The data from user table: \n', rows);

        });
      });
}