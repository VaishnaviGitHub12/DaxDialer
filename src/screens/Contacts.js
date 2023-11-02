import {
  View,
  Text,
  PermissionsAndroid,
  FlatList,
  Image,
  TouchableOpacity,
  Linking,
  Platform,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useIsFocused} from '@react-navigation/native';
import Communications from 'react-native-communications';
import { ContactContent } from '../../components/content';
const Contacts = ({navigation}) => {
  const [contactList, setContactList] = useState([]);
  const isFocused = useIsFocused();
  useEffect(() => {
    getPermission();
  }, [isFocused]);
  const getPermission = () => {
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
      title: 'Contacts',
      message: 'This app would like to view your contacts.',
      buttonPositive: 'Please accept bare mortal',
    }).then(res => {
      if (res == 'granted') {
        Contact.getAll()
          .then(con => {
            // work with contacts
            console.log(con);
            setContactList(con);
          })
          .catch(e => {
            console.log(e);
          });
      }
    });
  };
  return (
    <View style={{flex: 1, backgroundColor: '#000'}}>
      <FlatList
        data={ContactContent}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              style={{
                width: '90%',
                height: 70,
                alignSelf: 'center',
                borderWidth: 0.5,
                borderColor: '#fff',
                borderRadius: 10,
                marginTop: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
              onPress={() => {
                navigation.navigate('ContactDetails', {
                  data: item,
                });
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  source={require('../images/user.png')}
                  style={{width: 40, height: 40, marginLeft: 15}}
                />
                <View style={{padding: 10}}>
                  <Text style={{color: '#fff'}}>{item.name}</Text>
                  <Text style={{color: '#fff', marginTop: 4}}>
                    {item.contact}
                  </Text>
                </View>
              </View>
              <View style={{flexDirection: 'row', paddingRight: 15}}>
                <TouchableOpacity
                  onPress={() => {
                    const url = Communications.text(
                      item.contact,
                    );
                  }}>
                  <Image
                    source={require('../images/message.png')}
                    style={{
                      width: 24,
                      height: 24,
                      tintColor: '#fff',
                      marginRight: 20,
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    Linking.openURL(`tel:${item.contact}`);
                  }}>
                  <Image
                    source={require('../images/call.png')}
                    style={{width: 20, height: 20, tintColor: '#fff'}}
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Contacts;
