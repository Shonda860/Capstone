import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { Dialog } from '../terminology'

const styles = {
  flex: {
    flex: 1
    
  }
}

const Header = ({ classes }) => (
  <AppBar position='static'>
    <Toolbar className=" grey">
      <Typography
        variant='h5'
        className={classes.flex}
      >
        Battleraplogy 
      </Typography>

      <Dialog />
    </Toolbar>
  </AppBar>
)

export default withStyles(styles)(Header)

