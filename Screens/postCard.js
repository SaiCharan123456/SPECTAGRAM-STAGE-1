import React, { Component } from 'react';
import {
         StyleSheet,
         Text,
         View,
         Image,
         TouchableOpacity,
         } from 'react-native';
//import { black } from 'react-native-paper/lib/typescript/styles/colors';
//import { white } from 'react-native-paper/lib/typescript/styles/colors';

import { RFValue } from 'react-native-responsive-fontsize';

import Ionicons from 'react-native-vector-icons/Ionicons';



export default class PostCard extends Component{
    constructor(props) {
        super(props); 
        this.state = {
            light_theme: true
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
        return(
            <TouchableOpacity
            style={styles.container}
            onPress={() =>
              this.props.navigation.navigate("PostScreen", {
                story: this.props.story
              })
            }
          >
            <View style={
                this.state.light_theme
                ? styles.cardContainerLight
                : styles.cardContainer
                } >
                <View style={styles.cardContainer} >
                    <View style={styles.authorContainer} >
                        <View  >
                            <Image
                                source={require("../assets/profile_img.png")}
                                style={styles.profileImage}
                            />
                        </View>
                        <View style={styles.authorNameContainer} >
                            <Text style={ this.state.light_theme
                    ? styles.storyTitleTextLight
                    : styles.storyTitleText} >  {this.props.story.author} </Text>
                        </View>
                    </View> 
                    <Image 
                       source={require("../assets/post.jpeg")}   
                       style={styles.postImage}
                    />
                    <View style={styles.captionContainer} >
                        <Text style={this.state.light_theme
                    ? styles.storyAuthorTextLight
                    : styles.storyAuthorText} > { this.props.story.caption} </Text>
                    </View>
                    <View style={styles.actionContainer} >
                        <View style={styles.likeBotton} >
                            <Ionicons name={"heart"} style={RFValue(30)} color={this.state.light_theme ? "black" : "white"} />
                            <Text style={this.state.light_theme
                      ? styles.likeTextLight
                      : styles.likeText} > 12K </Text>
                        </View>
                    </View>                
                </View>
            </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        //  backgroundColor: "blue",
    },
    cardContainer: {
        flex: 0.85,
        borderWidth:2,
        borderRadius:20,
        borderColor:"black",
    },
    cardContainerLight: {
        margin: RFValue(13),
    
        backgroundColor: "white",
        borderRadius: RFValue(20),
        shadowColor: "rgb(0, 0, 0)",
        shadowOffset: {
          width: 3,
          height: 3
        },
        shadowOpacity: RFValue(0.5),
        shadowRadius: RFValue(5),
        elevation: RFValue(2)
      },
    actionContainer:{
        justifyContent:"center",
          padding:RFValue(15),
          alignItems:"center",
          flexDirection:'row',
     },
     likeText:{
         color:"white",
         fontSize:RFValue(20),
         marginLeft:RFValue(10),   
     },
     likeTextLight: {
        fontFamily: "Bubblegum-Sans",
        fontSize: RFValue(25),
        marginLeft: RFValue(5)
      },
     likeBotton:{
       justifyContent:"center",
        backgroundColor:"#eb3948",
          alignItems:"center",
          borderRadius:RFValue(30),
          height:RFValue(30),
          width:RFValue(350),
          flexDirection:'row',   
     },
     postImage:{
        height:RFValue(150),
        margin:20,
        resizeMode:"contain",
        width:"95%",
        alignSelf:"center",
     },
     profileImage:{
        height:RFValue(60),
        resizeMode:"contain",
        width:"110%",
      marginLeft:RFValue(30),
       // alignSelf:"center",
     },
     storyTitleTextLight: {
        fontFamily: "Bubblegum-Sans",
        fontSize: RFValue(25),
        color: "black"
      },
      storyAuthorTextLight: {
        fontFamily: "Bubblegum-Sans",
        fontSize: RFValue(18),
        color: "black"
      },
     captionText:{
        color:"white",
        fontSize:RFValue(20),
        marginLeft:RFValue(10),   
     },
     captionContainer:{
         justifyContent:'center',
         alignItems:'center',
         flex:0.2,
     },
     authorImageContainer:{
        justifyContent:'center',
        alignItems:'center',
        flex:0.05,  
     },
     authorNameContainer:{
        justifyContent:'center',
        alignSelf:'center',
       
     },
     authorNameText:{
        color:"white",
        justifyContent:'center',
        alignSelf:'center',
        fontSize:RFValue(25),
        textAlign:'center',  
         margin:100,
     },
     authorContainer:{
        justifyContent:'center',
        alignSelf:'center',
        flex:0.5,
        flexDirection:'row',
       
     }
  }); 