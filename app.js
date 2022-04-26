const express = require('express');
const bodyParser = require('body-parser');



const app = express();

let items =["Buy Food", "Cook Food", "Eat Food"];
let workItems = [];

app.set ( 'view engine' , 'ejs');
app.use (bodyParser.urlencoded({extended : true}));
app.use (express.static ("public"));

app.get ("/",function (req,res){

  let today = new Date();
  let options = {
    weekday : "long",
    day :"numeric",
    month :"long"
  }

let day = today.toLocaleDateString("en-US", options) ;

res.render("lists", {listTitle :day , newListItems: items});
});

app.post("/" , function(req , res){
  let items = req.body.newItem;


  if (req.body.newItem === "work"){
    workItems.push("/work");

  }else{
    items.push(item);
    res.redirect("/");

  }

});
app.get("/work", function (req,res){
  res.render("lists",{listTitle :"Work List", newListItems: workItems});

});
app.listen(3000, function(){
  console.log("server is running under port 3000");
});
