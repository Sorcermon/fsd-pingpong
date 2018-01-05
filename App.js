import React from 'react';
import { StackNavigator } from 'react-navigation';
import ScoreScreen from './screens/ScoreScreen.js';

const MainNavigator = StackNavigator(
  {
    Score: {
      screen: ScoreScreen,
    },
  },
  {
    headerMode: 'none',
  }
);

export default class App extends React.Component {
  render() {
    return <MainNavigator/>;
  }
}
