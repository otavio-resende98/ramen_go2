const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

//Middleware
app.use(bodyParser.json());
app.use(cors());

//Routers
const broths = require('./routes/broths');
app.use('/broths', broths);

const proteins = require('./routes/proteins');
app.use('/proteins', proteins);

const orders = require('./routes/orders');
app.use('/orders', orders);

// Conectar ao MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB', err);
  });

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
