import React, {Component} from 'react';
import {View, StyleSheet, Image, Alert} from 'react-native';
import {Images} from './Configs/images';
import KeyPad from './Component/keypad';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NewArray: [],
    };
  }
  render() {
    return (
      <View style={style.container}>
        <Image source={Images.logo} style={style.image} />
        <KeyPad onPress={(val) => this.Verification(val)} />
      </View>
    );
  }
  CorrectAlert = () =>
    Alert.alert(
      'Your Pin Is Correct',
      'Welcome To React-Native',
      [{text: '', onPress: () => console.log('Done')}],
      {cancelable: false},
    );

  WrongAlert = () =>
    Alert.alert(
      'Your Pin Is Incorrect',
      'Sorry You Cannot Acces React !',
      [{text: '', onPress: () => console.log('Done')}],
      {cancelable: false},
    );

  Verification(val) {
    console.log(val);
    let NewArray = this.state.NewArray;
    let SavedArray = ['1', '2', '4', '5'];
    if (isNaN(val)) {
      if (val === 'blank') {
        NewArray.pop();
      } else {
        NewArray[NewArray.length] = val;
      }
    } else {
      NewArray[NewArray.length] = val;
    }

    if (NewArray.length === SavedArray.length) {
      this.setState({MyArray: NewArray});

      if (JSON.stringify(NewArray) === JSON.stringify(SavedArray)) {
        NewArray.length = 0;

        // eslint-disable-next-line no-sequences
        return this.CorrectAlert(), this.setState({MyArray: NewArray});
      } else {
        NewArray.length = 0;

        // eslint-disable-next-line no-sequences
        return this.WrongAlert(), this.setState({MyArray: NewArray});
      }
    }
    this.setState({MyArray: NewArray});
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 230,
    height: 230,
  },
});

export default Home;
