import React from "react";
import { StyleSheet, Text, Button, SafeAreaView, StatusBar, Platform, View, TouchableOpacity} from "react-native";
import { Image } from 'react-native';
import { COLORS, SIZES } from '../constants';

export default function Home({navigation}) {
    return (
        <SafeAreaView>
            <View style={style.container}>
                <Text style={style.paragraph}> CleverMath </Text>
                <Text
                    style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 24, top:20 }}>
                    Math Quiz
                </Text>
                 <Image
        style={{ width: 220, height: 220, top: 40, left:70 }}
        source={{uri: 'https://i.imgflip.com/1jllo6.jpg'}}
      />
            </View>
      <Text>{"\n"}{"\n"}{"\n"}</Text>
                     <View style={style.startbutton}>
                       <TouchableOpacity 
                           onPress={() => navigation.navigate('Quiz')}
                           style={{
                               backgroundColor: COLORS.accent,
                               padding: 20, width: '50%', borderRadius: 20
                           }}>
                               <Text style={{
                                   textAlign: 'center', color: COLORS.white, fontSize: 20
                               }}>Start Quiz</Text>
                           </TouchableOpacity>
                           </View>
        </SafeAreaView>
        
    )
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        height: '50%'
    },
    paragraph: {
        margin: 24,
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
    },
     startbutton: {
        width: '100%',
        textAlign: "center",
        height: '70%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        
    }
});