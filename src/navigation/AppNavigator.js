/** @format */
import { createStackNavigator, createAppContainer } from "react-navigation";
import LaunchScreen from "../screens/LaunchScreen";

const AppStackNavigator = createStackNavigator({
  Launch: {
    screen: LaunchScreen
  }
}, {
    initialRouteName: 'Launch',
  });

export default createAppContainer(AppStackNavigator);


