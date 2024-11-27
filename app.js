import path from 'path'
import express from 'express'
import { fileURLToPath } from 'url'

const PORT = 3000
const root = path.dirname(fileURLToPath(import.meta.url))
const app = express()

const users = [
    { id: "1",  name: "John Doe" },
    { id: "2", name: "Jane Smith" },
    { id: "3", name: "Sam Johnson" },
  ];

app.use(express.static(path.join(root, 'public')))

// app.get("/hi",(req,res) => {
//     res.send( "Hi, there!")
// })

app.get("/express",(req,res) => {
    res.send("Az Express egy minimalista webes keretrendszer, amely a Node.js-hez készült.")
})

app.get("/greeting",(req,res) => {
    res.send("Hello, Attila Daroczi")
})

app.get("/nodejs",(req,res) => {
    res.send( "A Node.js egy olyan szerveroldali JavaScript futtatókörnyezet, amely a V8 JavaScript motorra épül.")
})

app.get("/", (req, res) => {
    res.sendFile(path.join(root, 'public', 'index.html'))
})



app.get("/users", (req, res) => {
    res.status(200).json(users)
})

app.listen(PORT, () => {console.log(`server is listen on ${PORT}`)})
