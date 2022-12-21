const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://WilliCookie:lala1234@cluster0.kmkkiyw.mongodb.net/Fitness?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: 'Fitness'
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log('This is an error from MongoDB', err));

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  date: {type: Date, default: Date.now},
  name: { type: String, required: true, unique: true },
  num_reps: { type: Number, required: true},
  weight: { type: Number, required: true},
});

const Exercise = mongoose.model('exercise', exerciseSchema);

module.exports = Exercise;
