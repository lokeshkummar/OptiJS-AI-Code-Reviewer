import express from "express"

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/bakchodi',(req, res)=> {
res.send("haa bhai kya haal hai?")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})