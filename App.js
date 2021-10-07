import  React from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";

import LoginScreen from "./screens/LoginScreen";
import LoadingScreen from "./Screens/LoginScreen";
import DashboardScreen from "./screens/DashboradScreen";

import  firebase from "firebase";
import { firebaseConfig } from "./config";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen: LoadingScreen,
  LoginScreen: LoginScreen,
  DashboradScreen: DashboardScreen
});

const AppNavigator = createAppContainer(AppSwitchNavigator);

export default function App() {
  return <AppNavigator />;
}
