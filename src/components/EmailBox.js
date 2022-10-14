import React, { useEffect, useState  } from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Image,
  FlatList,
  TouchableOpacity
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons'

export default function EmailBox({ navigation }) {

  const [email, setEmail] = useState([]);

  useEffect(() => {
      async function getData() {
          const response = await fetch('https://mobile.ect.ufrn.br:3002/emails');
          const email = await response.json();
          setEmail(email);
      }
      getData();
  }, [])

  function renderItem({item}){
    return (
      <View>
        <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('EmailBody', {id: item.id})}>
          <Image style={styles.picture}
          source={{uri: item.picture}}/>
            <View style={styles.infoBox}>
              <View style={styles.tittlebox}>
                <Text style={styles.tittle}>{item.from}</Text>
                <Text>{item.time}</Text>
              </View>
              <View>
                <Text style={styles.tittleContainer}>{item.tittle}</Text>
              </View>
              <View style={styles.resumeBox}>
                <Text style={styles.summaryContainer}>{item.summary}</Text>
                {
                  item.star ? (
                      <FontAwesome name='star' color='#f3c84d' size={24}/>
                  ) : (
                      <FontAwesome name='star-o' color='black' size={24}/>
                        
                  )
                }
              </View>
          </View>
        </TouchableOpacity> 
        <View style={styles.greyline}/>
      </View>
    );
}

  return(
    <View style={styles.listEmails}>
        <FlatList
        data={email}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  listEmails: {
    flex: 1,
  },
  box: {
    flex: 1,
    flexDirection: 'row',
    width: 400,
    height: 100,
    marginVertical: 2,
    alignItems: 'center',
  },
  infoBox:{
    flex: 1,
  },
  tittlebox:{
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginEnd: 15,
    marginStart: 6,
  },
  picture: {
    marginHorizontal: 10,
    width: 70,
    height: 70,
    borderRadius: 70/2,
  },
  summaryContainer: {
    marginTop: 5,
    color: 'grey',
  },
  greyline: {
    backgroundColor: 'lightgrey',
    height: 1,
  },
  resumeBox:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginEnd: 15,
    marginStart: 5,
    alignItems: 'center',
  },
  tittle:{
    fontWeight: 'bold',
  },
  tittleContainer:{
    marginStart: 5,
    marginTop: 5,
  },
});
