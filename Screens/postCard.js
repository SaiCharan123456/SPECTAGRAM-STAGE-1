import React, { Component } from 'react';
import {
        Platform,
         StatusBar,
         StyleSheet,
         Text,
         View,
         SafeAreaView,
         FlatList,
         Image,
         } from 'react-native';
//import { black } from 'react-native-paper/lib/typescript/styles/colors';
//import { white } from 'react-native-paper/lib/typescript/styles/colors';

import { RFValue } from 'react-native-responsive-fontsize';

import Ionicons from 'react-native-vector-icons/Ionicons';



export default class PostCard extends Component{
    constructor(props) {
        super(props);        
      }

    render(){
        return(
            <View style={styles.container} >
                <View style={styles.cardContainer} >
                    <View style={styles.authorContainer} >
                        <View  >
                            <Image
                                source={require("../assets/profile_img.png")}
                                style={styles.profileImage}
                            />
                        </View>
                        <View style={styles.authorNameContainer} >
                            <Text style={styles.authorNameText} >  {this.props.story.author} </Text>
                        </View>
                    </View> 
                    <Image 
                       source={require("../assets/post.jpeg")}   
                       style={styles.postImage}
                    />
                    <View style={styles.captionContainer} >
                        <Text style={styles.captionText} > { this.props.story.caption} </Text>
                    </View>
                    <View style={styles.actionContainer} >
                        <View style={styles.likeBotton} >
                            <Ionicons name={"heart"} style={RFValue(30)} color={"white"} />
                            <Text style={styles.likeText} > 12K </Text>
                        </View>
                    </View>                
                </View>
            </View>
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