const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 8080;
const {url} = require('./config');

const authRouter = require('./routers/authRouter');
const showsRouter = require('./routers/favouritesShowsRouter');
const userRouter = require('./routers/userRouter');
const friendsRouter = require('./routers/friendsRouter');

app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));

app.use('/api/auth', authRouter);
app.use('/api/shows', showsRouter);
app.use('/api/friends', friendsRouter);
app.use('/api/users/me', userRouter);

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
