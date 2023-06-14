require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const userRouter = require('./routes/userRouter')
const noteRouter = require('./routes/noteRouter')

const app = express()
app.use(express.json())
app.use(cors())

app.use('/users', userRouter)
app.use('/api/notes', noteRouter)
app.use('/healthcheck', require('./routes/healthchecker'));

const URI = process.env.MONGODB_URL

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log(err));


const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log('Server is running on port', PORT)
})
  