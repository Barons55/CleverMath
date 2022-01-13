import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <Card>
        <View style={styles.container}>
      <Text style={styles.paragraph}>
        Hello, world!
      </Text>
      <Text style={styles.paragraph}>
        Group.3 Karlis Barons
      </Text>
        <Text style={styles.paragraph}>
       This is Group.3 members Karlis Barons first react project
      </Text>
      <Image style={styles.logo} source={require('/assets/images.jpg')} />
    </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 180,
    width: 140,
  }
});
