import React, { Component, Fragment } from 'react'
import { muscles, exercises } from './store.js'
// import  Footer  from './layouts'
// import Battleraplogy from './layouts/Battleraplogy'
// import {Terminology} from "./terminology/index";
import { Footer, Terminology} from "./components";
export default class extends Component {
  state = {
    exercises,
    exercise: {}
  }

  getExercisesByMuscles() {
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise

        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], exercise]
          : [exercise]

        return exercises
      }, {})
    )
  }

  handleCategorySelected = category => {
    this.setState({
      category
    })
  }

  handleExerciseSelected = id => {
    this.setState(({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id)
    }))
  }

  render() {
    const exercises = this.getExercisesByMuscles(),
      { category, exercise } = this.state

    return <Fragment>
  

      <Terminology
        exercise={exercise}
        category={category}
        exercises={exercises}
        onSelect={this.handleExerciseSelected}
      />
      <Footer
        category={category}
        muscles={muscles}
        onSelect={this.handleCategorySelected}
      />
    </Fragment>
  }
}

