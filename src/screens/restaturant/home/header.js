import React from 'react';
import {View, TouchableOpacity, TextInput, Image} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useDispatch} from 'react-redux';
import {signOutRestaurant} from '../../../../Store/actions/auth';

const Header = ({navigation}) => {
  const dispatch = useDispatch();
  const signOutUser = ()=>{
    dispatch(signOutRestaurant(navigation));
  }
  return (
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
      <View
        style={{
          flex: 5,
          backgroundColor: '#fff',
          borderRadius: 20,
          marginTop: 7,
        }}>
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
          }}
          onPress={signOutUser}>
          <AntDesign name={'logout'} size={18} color={'rgb(255,99,71)'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
