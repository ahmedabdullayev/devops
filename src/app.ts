import express from 'express';

const app =  express();
app.use(express.json())

app.get('/ping', (req, res) => {
  res.json("pong")
})

app.listen(8080, () => {
  console.log("Server is running on port 8080");
})

export default app;
