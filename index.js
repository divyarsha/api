const express=require("express")
const app=express();

const quote=[
    ["A SQL query goes into a bar, walks up to two tables and asks, 'Can I join you?'"],
    ["How do you comfort a JavaScript bug? You console it"],
    ["the person went to the doctor and told the doctor he had an addiction to twitter and the doctor said well I am not following."]
];

const inputValue=input.value;

app.get("/quote/",(req,res)=>{
    const i=Math.floor(Math.random()*3);
    res.send(quote[i]);
});

app.get("/inputValue/",(req,res)=>{
    res.send("Error");
});

// Example error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Internal Server Error');
  });
  

app.get("/",(req,res)=>{
    res.send("Welcome!")
});

app.listen("3005",()=>{
    console.log("listening")
});
