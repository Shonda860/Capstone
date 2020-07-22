import React, { Component } from 'react'
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button
} from '@material-ui/core'

class Form extends Component {
  state = this.getInitState()

  getInitState () {
    const { word } = this.props

    return word || {
      title: '',
      description: '',
      words: ''
    }
  }

  handleChange = ({ target: { value, name } }) =>
    this.setState({
      [name]: value
    })

  handleSubmit = () =>
    this.props.onSubmit({
      id: this.state.title.toLowerCase().replace(/ /g, '-'),
      ...this.state
    })

  render () {
    const { title, description, letters } = this.state
    const { word, letters: categories } = this.props

    return (
      <form>
        <TextField
          label='Title'
          value={title}
          name='title'
          onChange={this.handleChange}
          margin='normal'
          fullWidth
        />
        <FormControl fullWidth margin='normal'>
          <InputLabel htmlFor='words'>Term</InputLabel>
          <Select
            value={letters}
            name='letters'
            onChange={this.handleChange}
          >
            {categories.map(category => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          multiline
          rows='4'
          label='Description'
          value={description}
          name='description'
          onChange={this.handleChange}
          margin='normal'
          fullWidth
        />
      <Button
          color ="white"
          variant='contained'
          onClick={this.handleSubmit}
          disabled={!title || !letters}
        >
          {word ? 'Edit' : 'Create'}
        </Button>
      </form>
    )
  }
}

export default Form