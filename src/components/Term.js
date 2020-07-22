import React, { PureComponent } from 'react'
import { CssBaseline } from '@material-ui/core'
import { Battleraplogy, Footer } from './layouts'
import { Viewer } from './terminology'
import { letters, words } from '../store'
import { Provider } from '../context'

class Test extends PureComponent {
  state = {
    words,
    word: {},
    editMode: false,
    category: ''
  }

  getWordsByLetters () {
    const initExercises = letters.reduce(
      (words, category) => ({
        ...words,
        [category]: []
      }),
      {}
    )

    return Object.entries(
        this.state.words.reduce((words, word) => {
          const { letters } = word
  
          words[letters] = words[letters]
            ? [...words[letters], word]
            : [words]
  
            return words
          }, initExercises)
    )
  }

  handleCategorySelect = category =>
    this.setState({
      category
    })

  handleWordSelect = id =>
    this.setState(({ words }) => ({
      word: words.find(ex => ex.id === id),
      editMode: false
    }))

  handleWordCreate = word =>
    this.setState(({ words }) => ({
      words: [...words, word]
    }))

  handleWordDelete = id =>
    this.setState(({ words, word, editMode }) => ({
      words: words.filter(ex => ex.id !== id),
      editMode: word.id === id ? false : editMode,
      word: word.id === id ? {} : word
    }))

  handleWordSelectEdit = id =>
    this.setState(({ words }) => ({
      word: words.find(ex => ex.id === id),
      editMode: true
    }))

  handleWordEdit = word =>
    this.setState(({ words }) => ({
      words: [
        ...words.filter(ex => ex.id !== word.id),
        word
      ],
      word
    }))

  getContext = () => ({
    letters,
    ...this.state,
    wordsByLetters: this.getWordsByLetters(),
    onCategorySelect: this.handleCategorySelect,
    onCreate: this.handleWordCreate,
    onEdit: this.handleWordEdit,
    onSelectEdit: this.handleWordSelectEdit,
    onDelete: this.handleWordDelete,
    onSelect: this.handleWordSelect
  })

  render () {
    return (
      <Provider value={this.getContext()}>
        <CssBaseline />

        <Battleraplogy />

        <Viewer />

        <Footer />
      </Provider>
    )
  }
}

export default Test