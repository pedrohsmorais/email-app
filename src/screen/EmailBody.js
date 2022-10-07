import React, { useEffect, useState } from 'react';
import { FontAwesome } from '@expo/vector-icons'
import { View,
   Text,
   StyleSheet, 
   Image
} from 'react-native';

export default function EmailBody( { route } ) {

  const [emailId, setEmailId] = useState([]);

  useEffect(() => {
      async function getData() {
          const response = await fetch(`https://mobile.ect.ufrn.br:3002/emails/${route.params.id}`);
          const emailId = await response.json();
          console.log(emailId);
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
      <Image style={styles.picture} source={{uri: emailId.picture}}/>
      <View style={styles.remetente}>
        <Text style={ {fontSize: 20} }>
          From: {emailId.from}
        </Text>
        <Text>
          To: {emailId.to}
        </Text> 
      </View>
      <Text>
        {emailId.time}
      </Text>
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
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
  },
  remetente:{
  },
  picture: {
    marginHorizontal: 10,
    width: 70,
    height: 70,
    borderRadius: 70/2,
  },
});