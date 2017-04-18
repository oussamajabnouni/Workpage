import React, {Component} from 'react';

import { Menu } from 'semantic-ui-react'

class SettingsMenu extends Component {
   constructor(props){
    super(props)
    this.state = { activeItem: 'Profile' }
   } 

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    const style = {boxShadow: 'none',borderRadius: 0}
    return (
      <Menu pointing vertical style={style}>
        <Menu.Item name='Profile' active={activeItem === 'Profile'} onClick={this.handleItemClick} />
        <Menu.Item name='Team' active={activeItem === 'Team'} onClick={this.handleItemClick} />
        <Menu.Item name='friends' active={activeItem === 'friends'} onClick={this.handleItemClick} />
      </Menu>
    )
  };
}

export default SettingsMenu;