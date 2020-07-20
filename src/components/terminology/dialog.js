import React, { Component } from 'react'
import {
  Fab,
  Dialog as MuiDialog,
  DialogTitle,
  DialogContent,
  DialogContentText
} from '@material-ui/core'
import { Add } from '@material-ui/icons'
import { Form } from './'
import { ExercisesContext } from '../../context'

class Dialog extends Component {
  static contextType = ExercisesContext

  state = {
    open: false
  }

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    })
  }

  handleFormSubmit = word => {
    this.handleToggle()

    this.context.onCreate(word)
  }

  render () {
    const { open } = this.state
    const { letters } = this.context

    return (
      <>
        <Fab
          onClick={this.handleToggle}
          color='white'
          size='small'
        >
          <Add />
        </Fab>

        <MuiDialog
          open={open}
          onClose={this.handleToggle}
          fullWidth
          maxWidth='xs'
        >
          <DialogTitle>Create a New Defition</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please fill out the form below.
            </DialogContentText>
            <Form
              letters={letters}
              onSubmit={this.handleFormSubmit}
            />
          </DialogContent>
        </MuiDialog>
      </>
    )
  }
}

export default Dialog