const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const metiersRouter = require('./routes/metiers');
const normesRouter = require('./routes/normes');
const usersRouter = require('./routes/users');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api/metiers', metiersRouter);
app.use('/api/normes', normesRouter);
app.use('/api/users', usersRouter);

app.get('/', (req, res) => {
  res.send('API Normes Notification');
});

require('./cron/normesCron');

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Serveur backend lancé sur le port ${PORT}`);
});
