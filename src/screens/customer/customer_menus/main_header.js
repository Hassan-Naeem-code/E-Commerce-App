import React from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

const Main_Header = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity>
            <Image
              source={{
                uri:
                  'https://pbs.twimg.com/profile_images/1354964729/Icon512.png',
              }}
              style={{width: 30, height: 30, borderRadius: 50}}
            />
          </TouchableOpacity>
        </View>
        <View style={{flex: 5}}>
          <TextInput placeholder="Search Here" />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#fff',
              borderRadius: 100,
              paddingHorizontal: 10,
              paddingVertical: 10,
            }}>
            <Entypo name={'shopping-cart'} size={18} color={'rgb(255,99,71)'} />
            <View
              style={{
                position: 'absolute',
                backgroundColor: 'rgb(255,99,71)',
                paddingTop: 2,
                paddingLeft: 4,
                paddingRight: 4,
                paddingBottom: 2,
                borderRadius: 100,
              }}>
              <Text style={{fontSize: 11, color: 'white'}}>0</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Main_Header;
