import React from 'react';
import { TouchableWithoutFeedback, Button, StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      p1Score: 0,
      p2Score: 0,
    }


  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.score}>{this.state.p1Score}</Text>
          <Text style={styles.score}>{this.state.p2Score}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            onPress={() => this.setState({ p1Score: ++this.state.p1Score})}
            title="P1"
          />
          <Button
            style={styles.button}
            onPress={() => this.setState({ p2Score: ++this.state.p2Score})}
            title="P2"
          />
        </View>
      </View>
    );
  }
          // <TouchableWithoutFeedback onPress={this.setState({ p1Score: ++this.state.p1Score })}>
          //   <View style={styles.button}>
          //     <Text>ButtonText</Text>
          //   </View>
          // </TouchableWithoutFeedback>
          // <TouchableWithoutFeedback onPress={this.setState({ p2Score: ++this.state.p2Score })}>
          //   <View style={styles.button}>
          //     <Text>ButtonText</Text>
          //   </View>
          // </TouchableWithoutFeedback>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  textContainer: {
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
    flex: 3,
    flexDirection: 'row',
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    flex: 1,
    height: 500,
    alignSelf: 'center',
    borderWidth: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
