import * as React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  TextInput,
  Platform,
  FlatList,
  Button,
} from 'react-native';
import { TouchableOpacity as TO } from 'react-native-gesture-handler';
import RnIncrementDecrementBtn  from 
'react-native-increment-decrement-button';

import { NavigationContainer, useIsFocused } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


function Home(props) {
  return (
    <View style={{ flex: 1, justifyContent: 'top', alignItems: 'center', top: 40}}>
        <TouchableOpacity 
        onPress={() => props.navigation.navigate('list')}
        style={{
            backgroundColor: 'red',
            padding: 5, width: '45%', borderRadius: 10
        }}>
            <Text style={{
                textAlign: 'center', color: 'white', fontSize: 20
            }}>Go to list view</Text>
      </TouchableOpacity>
       <RnIncrementDecrementBtn minVal={-1000} minreq={-1000} max={1000} val={0} />
    </View>
  );
}

function list() {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          {key: 'Devin'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home" detachInactiveScreens>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="list" component={list} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});


export default App;
