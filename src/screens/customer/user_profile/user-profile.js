import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const UserProfile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.centerlised}>
        <Image
          source={require('../../../assets/Images/cook.png')}
          style={styles.image}
        />
        <Text style={styles.text}>You need to Login To See More</Text>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            navigation.navigate('Login', {role: 'Customer'});
          }}>
          <Text style={styles.btnText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default UserProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFEDF',
  },
  centerlised: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '50%',
    height: '22%',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    marginVertical: 10,
    color: 'rgb(118,118,118)',
  },
  btn: {
    backgroundColor: 'rgb(255,99,71)',
    color: '#fff',
    marginVertical: 10,
    fontSize: 15,
    textAlign: 'center',
    borderRadius: 50,
    padding: 15,
    width: '70%',
  },
  btnText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '800',
    fontStyle: 'italic',
    color: '#fff',
  },
});
