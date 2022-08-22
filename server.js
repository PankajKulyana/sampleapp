const express = require('express')
const cors = require('cors')
const axios = require('axios')
const bodyParser = require('body-parser');
const productRouter = require('./routes/productRouter')
const cartRouter = require('./routes/cartRouter')
const checkoutController = require('./routes/checkoutRouter')
require('dotenv').config();

const app = express()
const PORT = process.env.PORT || 3002

//middleware
app.use(cors());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
})
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json())

//load routes
app.use('/catalog', productRouter)
app.use('/cart', cartRouter)
app.use('/checkout', checkoutController)

app.get('/', (req,res) => {
  res.send("Proxy Server !!")
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
});