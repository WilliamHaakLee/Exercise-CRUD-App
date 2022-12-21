const fitnessModel = require('../models/fitnessTrackerModel');

const exerciseController = {};

exerciseController.findExercise = (req, res, next) => {
  console.log('You have entered the exerciseController.findExercise middleware!');
  fitnessModel.find()
    .then(data => {
      res.locals.exercise = data;
      console.log('this is the list of exercises: ', data);
      return next();
    })
    .catch(err => next('error from exerciseController.findExercise:' + JSON.stringify(err)));
}

exerciseController.createExercise = (req, res, next) => {
  console.log('You have entered the exerciseController.createExercise middleware!');
  console.log(req.body);
  const { name } = req.params;
  const { num_reps, weight } = req.body;
  fitnessModel.create({ name, num_reps, weight })
    .then(data => {
      res.locals.newExercise = data;
      console.log('this is the newExercise: ', data);
      return next();
    })
    .catch(err => next('error from exerciseController.createExercise middleware: ' + JSON.stringify(err)));
}

exerciseController.updateExercise = (req, res, next) => {
  console.log('You have entered exerciseController.updateExercise!');
  const { name } = req.params;
  const { num_reps, weight } = req.body;
  fitnessModel.findOneAndUpdate({ name }, { name, num_reps, weight }, { new: true})
    .then(data => {
      res.locals.updatedExercise = data;
      console.log('this is the updatedExercise: ', data);
      return next();
    })
    .catch(err => next('error from exerciseController.updateExercise middleware: ' + JSON.stringify(err)));
}

exerciseController.deleteExercise = (req, res, next) => {
  console.log('You have entered the exerciseController.deleteExercise!');
  const { name } = req.params;
  fitnessModel.findOneAndDelete({ name })
    .then(data => {
      res.locals.deletedExercise = data;
      console.log('this is the deletedExercise: ', data);
      return next();
    })
    .catch(err => next('error from exerciseController.deletedExercise middleware: ' + JSON.stringify(err)));
}

module.exports = exerciseController;