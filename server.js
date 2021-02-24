const express = require('express');
const bodyParser = require('body-parser');
const availabilityRouter = require('./routes/availability');
const groupRouter = require('./routes/group');
const Group = require('./models/group');

const mongoose = require('mongoose');
mongoose
  .connect('mongodb://localhost:27017/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Database Connected'))
  .catch(err => console.log(err));

const connection = mongoose.connection;
connection.once('open', function () {
  console.log('MongoDV database connection established successfully');
});

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(groupRouter);

app.get('/', (req, res, next) => {
  res.send('In the homepage');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
