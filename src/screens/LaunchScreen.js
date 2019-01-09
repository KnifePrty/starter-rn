import React from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";

export default class LaunchScreen extends React.Component {
  static navigationOptions = {
    header: null,
    title: 'Launch',
  };

  _onPress = () => {
    alert('Define a new screen')
    // this.props.navigation.navigate('SCREEN')
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button
          title={'Let\'s go!'}
          onPress={() => this._onPress()}
        />
      </View>
    );
  }
}