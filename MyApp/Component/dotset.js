import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

class Dot extends Component {
  Dots() {
    let pinLength = this.state.NewArray.length;

    if (pinLength === 0) {
      return (
        <View style={main.dotBar}>
          <View style={main.dotEmpty} />
          <View style={main.dotEmpty} />
          <View style={main.dotEmpty} />
          <View style={main.dotEmpty} />
        </View>
      );
    } else if (pinLength === 1) {
      return (
        <View style={main.dotBar}>
          <View style={main.dotFilled} />
          <View style={main.dotEmpty} />
          <View style={main.dotEmpty} />
          <View style={main.dotEmpty} />
        </View>
      );
    } else if (pinLength === 2) {
      return (
        <View style={main.dotBar}>
          <View style={main.dotFilled} />
          <View style={main.dotFilled} />
          <View style={main.dotEmpty} />
          <View style={main.dotEmpty} />
        </View>
      );
    } else if (pinLength === 3) {
      return (
        <View style={main.dotBar}>
          <View style={main.dotFilled} />
          <View style={main.dotFilled} />
          <View style={main.dotFilled} />
          <View style={main.dotEmpty} />
        </View>
      );
    } else if (pinLength === 4) {
      return (
        <View style={main.dotBar}>
          <View style={main.dotFilled} />
          <View style={main.dotFilled} />
          <View style={main.dotFilled} />
          <View style={main.dotFilled} />
        </View>
      );
    }
  }
}
const main = StyleSheet.create({
  dotBar: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  dotEmpty: {
    height: 15,
    width: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#125969',
    marginLeft: 10,
    marginRight: 10,
  },

  dotFilled: {
    height: 15,
    width: 15,
    backgroundColor: '#125969',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#125969',
    marginLeft: 10,
    marginRight: 10,
  },

  text: {
    marginTop: 20,
  },
});

export default Dot;
