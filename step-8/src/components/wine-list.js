/* eslint react/jsx-no-bind: 0, react/no-multi-comp: 0, react/jsx-closing-bracket-location: 0 */

import React from 'react-native';

import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    wines: state.wines
  };
}

export const WineList = connect(mapStateToProps)(React.createClass({
  render() {
    return (
      <Text>Items</Text>
    );
  }
}));
