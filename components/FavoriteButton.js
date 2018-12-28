import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Icon } from 'react-native-elements';

class FavoriteButton extends Component {

  onPress = async item => {
    if (!this.props.favorites.has(item.id)) {
      await this.props.addFavorite(item);
    } else {
      await this.props.removeFavorite(item);
    }
  }

  render() {
    return ( 
      <Icon 
        name={this.props.favorites.has(this.props.item.id) ? 'star' : 'star-o'}
        type='font-awesome' 
        onPress={() => this.onPress(this.props.item)}
        color='#CEB733'
        containerStyle={{ paddingRight: 5 }}
      />
    )
  }
}

function mapStateToProps({ favorites }) {
  return { favorites };
}

export default connect(mapStateToProps, actions)(FavoriteButton);