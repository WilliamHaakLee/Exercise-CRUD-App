const express = require('express');
const exerciseController = require('../controllers/exerciseController');
const router = express.Router();

router.get('/', exerciseController.findExercise, (req, res) => {
  res.status(200).json(res.locals.exercise);
});

router.post('/:name', exerciseController.createExercise, (req, res) => {
  res.status(200).json(res.locals.newExercise);
});

router.put('/:name', exerciseController.updateExercise, (req, res) => {
  res.status(200).json(res.locals.updatedExercise);
});

router.delete('/:name', exerciseController.deleteExercise, (req, res) => {
  res.status(200).json(res.locals.deletedExercise);
});

module.exports = router;