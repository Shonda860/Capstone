import React from 'react'
import { Typography } from '@material-ui/core'
import { withContext } from '../../context'
import { Form } from './'
const Preview = ({
  letters,
  editMode,
  word,
  word: { id, title, description },
  onEdit
}) => (
  <>
    <Typography
      gutterBottom
      variant='h4'
      className = "red-text"
    >
      {title || 'Welcome!'}
    </Typography>
    {editMode ? (
      <Form
        key={id}
       word={word}
        letters={letters}
        onSubmit={onEdit}
      />
    ) : (
      <Typography variant='subtitle1'>
        {description || 'Please select an term from the list on the left.'}
      </Typography>
    )}
  </>
)

export default withContext(Preview)