import express from "express";
import cors from "cors";

const app  = express();
app.use(cors());
app.use (express.json());



app.get('/API',(request,response)=>{
 response.send ('hello')
});


app.listen(3003,()=>{
  console.log('Server on')
});