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
import { RFValue } from 'react-native-responsive-fontsize';
import PostCard from './postCard';

let posts = require('./temp_post.json');

export default class Feed extends Component{
    constructor(props) {
        super(props);        
      }
    renderItem = ({ item: story }) => {
           return <PostCard story={story} navigation={this.props.navigation} />;
      };
    
      keyExtractor = ( item ,index) => index.toString();
    render(){
        return(
            <View style={styles.container} >
                <SafeAreaView style={styles.droidSafeArea} />
                <View style={styles.appTitle} >
                    <View style={styles.appIcon} >
                        <Image
                           source={require("../assets/logo.png")}
                           style={styles.iconImage} />
                    </View>
                    <View style={styles.appTitleTextContainer} >
                        <Text style={styles.appTitleText} > Spectagram 1 </Text>
                    </View>
                </View>
                <View style={styles.cardContainer} >
                    <FlatList
                        keyExtractor={this.keyExtractor}
                        data={posts}
                        renderItem={this.renderItem}
                    />
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
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35),
    },
    appTitle: {
        flex: 0.16,
        flexDirection: "row",
        justifyContent:'center',
        alignSelf:'center',
        marginBottom:-100,
        marginLeft:RFValue(0),
        position: 'sticky',
        overflow: "hidden",
       position: "absolute",
        height:"15%",
    },
    appIcon: {
        flex: 0.2,
        justifyContent: "center",
        alignItems: "center",
        position: 'sticky',
        margin:3,
    },
    iconImage: {
        width: "100%",
        height: "100%",
        resizeMode: "contain",
    },
    appTitleTextContainer: {
        flex: 0.8,
        justifyContent: "center",
        position: 'sticky',
        
    },
    appTitleText: {
        color: "white",
        fontSize: RFValue(28),
        position: 'sticky',
    },
    cardContainer: {
        flex: 0.85,
    },
  }); 