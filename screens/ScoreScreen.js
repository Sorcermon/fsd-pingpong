import React from 'react';
import {
  TouchableHighlight,
  StyleSheet,
  Text,
  View,
} from 'react-native';


export default class ScoreScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      p1Score: 0,
      p2Score: 0,
      p1Name: 'Spencer',
      p2Name: 'Bailey',
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.nameDisplay}>
          <Text style={styles.name}>{this.state.p1Name}</Text>
          <Text style={styles.name}>{this.state.p2Name}</Text>
        </View>
        <View style={styles.scoreDisplay}>
          <Text style={styles.score}>{this.state.p1Score}</Text>
          <Text style={styles.score}>{this.state.p2Score}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableHighlight
            onPress={() => this.setState({ p1Score: ++this.state.p1Score})}
            style={styles.button}
          >
            <Text>
              P1
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => this.setState({ p2Score: ++this.state.p2Score})}
            style={styles.button}
          >
            <Text>
              P2
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameDisplay: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    flex: 1,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  scoreDisplay: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  score: {
    flex: 1,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 40,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flex: 4,
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
  button: {
    backgroundColor: 'red',
    flex: 1,
    borderColor: '#000000',
    borderWidth: 1,
  }
});
