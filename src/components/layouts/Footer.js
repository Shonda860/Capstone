import React, { Component } from 'react'
import { compose } from 'recompose'
import { withWidth, AppBar, Tabs, Tab } from '@material-ui/core'
import { withContext } from '../../context'

class Footer extends Component {
  letters = this.getLetters()

  getLetters () {
    return [ '', ...this.props.letters ]
  }

  onIndexSelect = (e, index) => {
    this.props.onCategorySelect(this.letters[index])
  }

  getIndex = () => {
    return this.letters.indexOf(this.props.category)
  }

  render () {
    const { width } = this.props
    const isMobile = width === 'xs'

    return (
      <AppBar position='static' className="grey">
        <Tabs
          value={this.getIndex()}
          onChange={this.onIndexSelect}
          indicatorColor='secondary'
          textColor='secondary'
          variant={isMobile ? 'scrollable' : 'standard'}
          centered={!isMobile}
        >
          {this.letters.map(group =>
            <Tab key={group} label={group || 'All'} />
          )}
        </Tabs>
      </AppBar>
    )
  }
}

export default compose(
  withContext,
  withWidth()
)(Footer)