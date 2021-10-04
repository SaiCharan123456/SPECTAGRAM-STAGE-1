import React from "react";
import { StyleSheet } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { RFValue } from "react-native-responsive-fontsize";
import Feed from "../screens/Feed";
import CreatePost from "../screens/CreatePost";
const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      labeled={false} 
      barStyle={styles.bottomTabStyle}
      
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Feed") {
            iconName = focused ? "photo" : "photo-library";
          } else if (route.name === "Create Post") {
            iconName = focused ? "photo-camera" : "add-a-photo";
          }
          return (
            <MaterialIcons
              name={iconName}
              size={RFValue(25)}
              color={color}
              style={styles.icons}
            />
          );
        }
      })}
      activeColor={"#801208"}
      inactiveColor={"#cc104f"}
    >
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Create Post" component={CreatePost} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  bottomTabStyle: {
    backgroundColor: "#a8904c",
    height: RFValue("10%"),
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: "hidden",
    position: "absolute"
  },
  icons: {
    width: RFValue(20),
    height: RFValue(20),
    marginTop:RFValue(-5),
  }
});

export default BottomTabNavigator;
