import * as types from '../constants/actionTypes';

const initialState = {
  workout: [],
};

const exerciseReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.ADD_EXERCISE: {
      let workout = state.workout.slice();
      workout.push({ 
        name: action.name,
        num_reps: action.num_reps,
        weight: action.weight,
       });
      return {
        ...state,
        workout,
      }
    }

    case types.UPDATE_EXERCISE: {
      let workout = state.workout.slice();
      let exerciseName = workout[action.index].name;
      workout[action.index] = {
        name: exerciseName,
        num_reps: action.num_reps,
        weight: action.weight,
      };

      return {
        ...state,
        workout,
      }
    }

    case types.DELETE_EXERCISE: {
      let tempWorkout = state.workout.slice();
      let workout = tempWorkout.splice(action.index, 1);

      return {
        ...state,
        workout,
      }
    }
    
    default: {
      return state;
    }
  }
}

export default exerciseReducer;