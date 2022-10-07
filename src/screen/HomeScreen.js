import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';

import EmailBox from '../components/EmailBox';

const statusBarHeigth= StatusBar.currentHeigth ? StatusBar.currentHeigth : 40;

export default function HomeScreen({ navigation }) {
    
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
        <EmailBox navigation = { navigation }/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:  statusBarHeigth,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  greyline: {
    height: 1,
    backgroundColor: 'lightgrey',
  },
});
