import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Icon } from 'react-native-elements';

class FavoriteButton extends Component {

  onPress = async item => {
    if (!this.props.favorites[item.id]) {
      await this.props.addFavorite(item);
    } else {
      await this.props.removeFavorite(item);
    }
  }

  render() {
    return ( 
      <Icon 
        name={this.props.favorites[this.props.item.id] ? 'star' : 'star-o'}
        type='font-awesome' 
        onPress={() => this.onPress(this.props.item)}
      />
    )
  }
}

function mapStateToProps({ favorites }) {
  return { favorites };
}

export default connect(mapStateToProps, actions)(FavoriteButton);