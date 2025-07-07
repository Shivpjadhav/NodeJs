import express from 'express';
const app= express();
 app.get('/api/jokes',(req,res) => {
  const jokes=[
    {
      id:1,
      title:"1 joke",
      content:'1 joke here'
    },
    {
      id:2,
      title:"2 joke",
      content:'2 joke here'
    },{
      id:3,
      title:"3 joke",
      content:'3 joke here'
    },
  ]
 res.send(jokes);  
});

const port =process.env.PORT || 3000;

app.listen(port,()=>{
  console.log(`http://localhost:${port}/`);
  
})