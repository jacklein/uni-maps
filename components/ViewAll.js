import _ from 'lodash';
import React from 'react';
import { ListItem } from 'react-native-elements';

const ViewAll = props => {
  const renderAllPlaces = () => {
    let all = [];
    _.map(props.data.categories, category => {
      all.push(...category.places);
    })

    return all;
  }

  return(
    <ListItem 
      title={props.title}
      key={props.title}
      onPress={() => props.onPress('All Places', renderAllPlaces())}
    />
  )
}

export default ViewAll;