import * as types from '../constants/actionTypes';

export const addExercisesActionCreator = (name, num_reps, weight) => ({
  type: types.ADD_EXERCISE,
  name: name,
  num_reps: num_reps,
  weight: weight,
});

export const updateExercisesActionCreator = (num_reps, weight, index) => ({
  type: types.UPDATE_EXERCISE,
  num_reps: num_reps,
  weight: weight,
  index: index,
});

export const deleteExercisesActionCreator = index => ({
  type: types.UPDATE_EXERCISE,
  payload: index,
});