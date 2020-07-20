import React, { Fragment } from 'react'
import { compose } from 'recompose'
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { Edit, Delete } from '@material-ui/icons'
import { withContext } from '../../context'

const styles = {
  title: {
    textTransform: 'capitalize'
  }
}

const Catalog = ({
  classes,
  wordsByLetters,
  category,
  onSelect,
  onDelete,
  onSelectEdit
}) => (
  wordsByLetters.map(
    ([group, words]) =>
      (!category || category === group) && (
        <Fragment key={group}>
          <Typography
            className={classes.title}
            color='secondary'
            variant='h5'
          >
            {group}
          </Typography>
          <List component='ul'>
            {words.map(({ id, title }) => (
              <ListItem
                key={id}
                button
                onClick={() => onSelect(id)}
              >
                <ListItemText primary={title} />
                <ListItemSecondaryAction>
                  <IconButton
                    onClick={() => onSelectEdit(id)}
                  >
                    <Edit />
                  </IconButton>
                  <IconButton
                  className='red-text'
                    onClick={() => onDelete(id)}
                  >
                    <Delete />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </Fragment>
      )
  )
)

export default compose(
  withContext,
  withStyles(styles)
)(Catalog)