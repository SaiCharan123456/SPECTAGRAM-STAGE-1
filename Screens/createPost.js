import React, { Component } from 'react';
import {
    Platform,
     StatusBar,
     StyleSheet,
     Text,
     View,
     SafeAreaView,     
     Image,
     ScrollView,
     TextInput
     } from 'react-native';
import DropDownPicker from "react-native-dropdown-picker"
//import { white } from 'react-native-paper/lib/typescript/styles/colors';
     import { RFValue } from 'react-native-responsive-fontsize';


export default class CreatePost extends Component{
    constructor(props) {
        super(props);
        this.state = {         
          previewImage: "image_1",
          light_theme: true,
          dropdownHeight: 50
        };
      }


      componentDidMount() {
        this.fetchUser();
      }
    
      fetchUser = () => {
        let theme;
        firebase
          .database()
          .ref("/users/" + firebase.auth().currentUser.uid)
          .on("value", snapshot => {
            theme = snapshot.val().current_theme;
            this.setState({ light_theme: theme === "light" });
          });
      };
    

    render(){

       let preview_images = {
            image_1: require("../assets/image_1.jpg"),
            image_2: require("../assets/image_2.jpg"),
            image_3: require("../assets/image_3.jpg"),
            image_4: require("../assets/image_4.jpg"),
            image_5: require("../assets/image_5.jpg"),
          };
        return(
            <View style={this.state.light_theme ? styles.containerLight : styles.container} >
                
                 
            <SafeAreaView style={styles.droidSafeArea} />
            <View style={styles.appTitle} >
                <View style={styles.appIcon} >
                    <Image
                       source={require("../assets/logo.png")}
                       style={styles.iconImage} />
                </View>
                <View style={styles.appTitleTextContainer} >
                    <Text style={this.state.light_theme
                    ? styles.appTitleTextLight
                    : styles.appTitleText} > New Post </Text>
                </View>
            </View>
            <View style={styles.fieldsContainer} >
            <ScrollView>
            <Image
                source={preview_images[this.state.previewImage]}
                style={styles.previewImage}
              />
              <View style={{ height: RFValue(this.state.dropdownHeight) }}>
                <DropDownPicker
                  items={[
                    { label: "Image 1", value: "image_1" },
                    { label: "Image 2", value: "image_2" },
                    { label: "Image 3", value: "image_3" },
                    { label: "Image 4", value: "image_4" },
                    { label: "Image 5", value: "image_5" }
                  ]}
                  defaultValue={this.state.previewImage}
                  containerStyle={{
                    height: RFValue(40),
                    borderRadius: 20,
                    marginBottom: 10,   
                    backgroundColor:"red"
                  }}
                  onOpen={() => {
                    this.setState({ dropdownHeight: 50 });
                  }}
                  onClose={() => {
                    this.setState({ dropdownHeight: 50 });
                  }}
                  style={{ backgroundColor: "transparent" }}
                  itemStyle={{
                    justifyContent: "flex-start"
                    
                  }}
                  dropDownStyle={{ backgroundColor: this.state.light_theme ? "#eee" : "#2f345d"}}
                  labelStyle={
                    this.state.light_theme
                    ? styles.dropdownLabelLight
                    : styles.dropdownLabel
                  }
                  arrowStyle={
                    this.state.light_theme
                    ? styles.dropdownLabelLight
                    : styles.dropdownLabel
                  }
                  onChangeItem={item =>
                    this.setState({
                      previewImage: item.value
                    })
                  }
                />
              </View>

              <TextInput
                style={  
                  this.state.light_theme
                  ? styles.inputFontLight
                  : styles.inputFont
                }
                onChangeText={caption => this.setState({ caption })}
                placeholder={"Caption"}
                placeholderTextColor= { this.state.light_theme ? "black" : "white"}
              />             
            </ScrollView>
          </View>          
        </View>
      );
    }
 }
 



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#303666",
    },
    containerLight: {
      flex: 1,
      backgroundColor: "white"
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35),
    },
    appTitle: {
        flex: 0.5,
        flexDirection: "row",
        justifyContent:'center',
        alignSelf:'center',
        marginBottom:-100,
        marginLeft:RFValue(0),
        position: 'sticky',
        overflow: "hidden",
       position: "absolute",
        height:"20%",
        width:"45%",
    },
    appIcon: {
        flex: 0.2,
        justifyContent: "center",
        alignItems: "center",
        position: 'sticky',
        margin:10,
    },
    inputFontLight: {
      height: RFValue(40),
      borderColor: "black",
      borderWidth: RFValue(1),
      borderRadius: RFValue(10),
      paddingLeft: RFValue(10),
      color: "black",
      fontFamily: "Bubblegum-Sans"
    },
    dropdownLabel: {
      color: "white",
      fontFamily: "Bubblegum-Sans"
    },
    dropdownLabelLight: {
      color: "black",
      fontFamily: "Bubblegum-Sans"
    },
    iconImage: {
        width: "100%",
        height: "100%",
        resizeMode: "contain",
    },
    appTitleTextContainer: {
        flex: 0.5,
        justifyContent: "center",
        position: 'sticky',
        height:RFValue("20%"),
        width:RFValue("130%"),
       // marginLeft:RFValue(20),
        flexDirection: "row",
    },
    appTitleText: {
        color: "white",
        fontSize: RFValue(30),
        position: 'sticky',
        textAlige:"center",
        alignSelf:'center',
        overflow:"hidden",
        justifyContent:'center',
    },
    
  fieldsContainer: {
    flex: 0.85,
    marginTop:RFValue(30),
  },
  previewImage: {
    width: "90%",
    height: RFValue(120),
    alignSelf: "center",
    borderRadius: RFValue(10),
    marginVertical: RFValue(10),
    resizeMode: "contain",
    //marginBottom:-100,
    margin:50,
  },
  inputFont: {
    height: RFValue(40),
    borderColor: "white",
    borderWidth: RFValue(1),
    borderRadius: RFValue(10),
    paddingLeft: RFValue(10),
    color: "white",
    //fontFamily: "Bubblegum-Sans"
  },
  appTitleTextLight: {
    color: "black",
    fontSize: RFValue(28),
    fontFamily: "Bubblegum-Sans"
  },
 
});