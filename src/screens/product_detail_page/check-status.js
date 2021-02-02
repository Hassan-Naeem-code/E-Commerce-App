import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ToastAndroid,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

const CheckStatus = ({route, navigation}) => {
  const {time} = route.params;
  console.log('TIme is', time);
  let getTime = Number(time);
  return (
    <View style={styles.container}>
      <View style={styles.firstSection}>
        <View style={styles.row_center}>
          <View style={styles.flex_2_empty_center}></View>
        </View>
        <Image
          source={require('../../assets/Images/source.gif')}
          style={styles.main_image_display}
        />
        <Text style={styles.food_text}>
          Your Food Is been Preparing And Will Be Delivered In:
        </Text>
        <Text style={styles.time_text}>{time} Minutes</Text>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            navigation.popToTop();
          }}>
          <Text style={styles.btnText}>
            GO BACK TO HOME <Entypo name={'home'} size={18} color={'#fff'} />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default CheckStatus;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFEDF',
  },
  row_center: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flex_2_empty_center: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  main_image_display:{
    width: '100%', height: 510
  },
  firstSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  food_text: {
    fontSize: 15,
    fontWeight: 'bold',
    marginVertical: 10,
    color: 'rgb(118,118,118)',
  },
  time_text: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 3,
    color: 'rgb(255,99,71)',
  },
  btn: {
    backgroundColor: 'rgb(255,99,71)',
    color: '#fff',
    marginVertical: 10,
    fontSize: 15,
    textAlign: 'center',
    borderRadius: 50,
    padding: 15,
    width: '65%',
  },
  btnText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '900',
    fontStyle: 'italic',
    color: '#fff',
  },
});
