import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

class KeyPad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Input: '',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        {this.Line([1, 2, 3])}
        {this.Line([4, 5, 6])}
        {this.Line([7, 8, 9])}

        <View style={styles.line}>
          <View style={styles.forzero} />
          {this.Cell(0)}
          {this.Delete('delete')}
        </View>
      </View>
    );
  }

  Delete() {
    return (
      <TouchableOpacity
        accessibilityLabel="Delete"
        style={styles.Delete}
        onPress={() => {
          this.onPress('blank');
        }}>
        <View style={styles.del}>
          <Text> Delete </Text>
        </View>
      </TouchableOpacity>
    );
  }

  Line(MyArray) {
    let cells = MyArray.map((val) => this.Cell(val));
    return <View style={styles.line}>{cells}</View>;
  }

  Cell(number) {
    return (
      <TouchableOpacity
        style={styles.cell}
        key={number}
        Label={number.toString()}
        onPress={() => {
          this.onPress(number.toString());
        }}>
        <Text style={styles.key}>{number}</Text>
      </TouchableOpacity>
    );
  }

  onPress(val) {
    let currentText = this.state.text;
    currentText = val;
    this.setState({text: currentText});
    this.props.onPress(currentText);
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginLeft: 70,
    marginRight: 70,
    alignItems: 'flex-start',
    maxWidth: 270,
  },
  line: {
    flexDirection: 'row',
    marginTop: 50,
    marginLeft: -35,
    marginRight: -35,
  },
  cell: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F1F1F1',
    height: 70,
    width: 70,
    borderRadius: 100,
    marginLeft: 20,
    marginRight: 20,
    alignItems: 'center',
  },
  Delete: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  key: {
    fontSize: 27,
    textAlign: 'center',
    color: '#000000',
  },
  forzero: {
    textAlign: 'center',
    justifyContent: 'center',
    flex: 1,
    borderRadius: 100,
    marginLeft: 4,
    marginRight: 4,
    marginTop: 50,
  },
});

export default KeyPad;
