import React, { useEffect, useState } from 'react';
import { FontAwesome } from '@expo/vector-icons'
import { View,
   Text,
   StyleSheet, 
   Image
} from 'react-native';
import { WebView } from 'react-native-webview';

export default function EmailBody( { route } ) {

  const [emailId, setEmailId] = useState([]);

  useEffect(() => {
      async function getData() {
          const response = await fetch(`https://mobile.ect.ufrn.br:3002/emails/${route.params.id}`);
          const emailId = await response.json();
          setEmailId(emailId);
      }
      getData();
  }, [])

 return (
   <View style={styles.container}>
    <View style={styles.titleContainer}>
      <Text style={styles.title}>
        {emailId.tittle}
      </Text>
      {
        emailId.star ? ( <FontAwesome name='star' color='#f3c84d' size={24}/>) : ( <FontAwesome name='star-o' color='black' size={24}/> )
      }
    </View>
    <View style={styles.infoContainer}>
      <View style={styles.remetente}>
      <Image style={styles.picture} source={{uri: emailId.picture}}/>
        <View style={styles.remetenteinfo}>
          <Text style={ {fontSize: 20} }>
            From: {emailId.from}
          </Text>
          <Text>
            To: {emailId.to}
          </Text> 
        </View> 
      </View>
      <Text>
        {emailId.time}
      </Text>
    </View>
    <View style={styles.webView}>
      <WebView
      source={{ html: `<div style=\"font-size: 50; margin: 50px 15px 0 15px \">${emailId.body}<div>`}}/>
    </View>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    background: 'red'
  },
  titleContainer:{
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 5,
    paddingHorizontal: 20,
     height: 90,
     backgroundColor: 'lightgrey',
  },
  title:{
    fontSize: 28,
  },
  infoContainer:{
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  remetente:{
    flexDirection: 'row',
  },
  remetenteinfo:{
   justifyContent: 'center',
  },
  picture: {
    marginHorizontal: 10,
    width: 60,
    height: 60,
    borderRadius: 60/2,
  },
  webView:{
    flex: 1,
    width: "100%",
  }
});