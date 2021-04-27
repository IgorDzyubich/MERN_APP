const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
// const path = require('path');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 8080;
const {url} = require('./config');

const authRouter = require('./routers/authRouter');
// const contractRouter = require('./routers/contractRouter');
// const truckRouter = require('./routers/truckRouter');
const userRouter = require('./routers/userRouter');
// const loadRouter = require('./routers/loadRouter');
app.use(cors());
app.use(express.json());
// app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('tiny'));

app.use('/api/auth', authRouter);
// app.use('/api/trucks', truckRouter);
// app.use('/api/loads', loadRouter);
app.use('/api/users/me', userRouter);
// app.use('/api/contracts', contractRouter);
/** The class UnauthorizedError.*/
class UnauthorizedError extends Error {
  /**
    * @param {string} message The message.
      */
  constructor(message = 'Unauthorized user!') {
    super(message);
    statusCode = 401;
  }
}

app.use((err, req, res, next) => {
  if (err instanceof UnauthorizedError) {
    res.status(err.statusCode).json({message: err.message});
  }
  res.status(500).json({message: err.message});
});

const start = async () => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    const db = mongoose.connection;
    db.once('open', function() {
      console.log('MongoDB database connection successfully');
    });
    app.listen(port, () => {
      console.log(`Server works at port ${port}!`);
    });
  } catch (err) {
    console.log(err.stack);
  }
};

start();
