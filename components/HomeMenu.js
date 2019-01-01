import React, { Component } from 'react';
import { Icon } from 'react-native-elements';
import { MenuProvider, Menu, MenuTrigger, MenuOptions, MenuOption } from 'react-native-popup-menu';

class HomeMenu extends Component {
  render() {
    return(
      <MenuProvider>
        <Menu
          ref={this.onRef}
          onBackdropPress={() => console.log('hi')}
        >
          <MenuTrigger>
            <Icon 
              name='menu' 
              type='simple-line-icon'
              color='gray'
              size={22}
              //containerStyle={{ paddingRight: 15 }}
            />
          </MenuTrigger>
          <MenuOptions>
            <MenuOption onSelect={() => alert(`Save`)} text='Save' />
            <MenuOption onSelect={() => alert(`Delete`)} text='Delete' />
          </MenuOptions>
        </Menu>
      </MenuProvider>
    )  
  }
}

export default HomeMenu;