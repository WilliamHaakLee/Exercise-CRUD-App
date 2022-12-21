import React, { Component } from 'react';
import { connect } from 'react-redux';
// import actions from action creators file
// import child components...
import ExerciseCreator from '../components/ExerciseCreator.jsx';
import ExerciseDisplay from '../components/ExerciseDisplay.jsx';
import { addExercisesActionCreator, deleteExercisesActionCreator, updateExercisesActionCreator } from '../actions/actions';

const mapStateToProps = state => ({
  // provide pertinent state here
  workout: state.workout,
});

const mapDispatchToProps = dispatch => ({
  addExercise: (name, num_reps, weight) => dispatch(addExercisesActionCreator(name, num_reps, weight)),
  updateExercise: (num_reps, weight, index) => dispatch(updateExercisesActionCreator(num_reps, weight, index)),
  deleteExercise: (index) => dispatch(deleteExercisesActionCreator(index)),
});

class ExerciseContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { workout, addExercise, updateExercise, deleteExercise } = this.props;
    console.log(workout, addExercise, updateExercise, deleteExercise);
    return(
      <div className="innerbox">
        <ExerciseCreator addExercise = { addExercise } workout = { workout }/>
        <ExerciseDisplay updateExercise = { updateExercise } deleteExercise = { deleteExercise } workout = { workout }/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseContainer);