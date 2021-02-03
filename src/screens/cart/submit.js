import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import Header from '../customer_menus/main_header';
import {useSelector} from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Submit = ({navigation}) => {
  const getCartProduct = useSelector(({customer}) => {
    return customer.cart;
  });
  console.log(
    'Now what is remaining in the cart of the redux is here:',
    getCartProduct,
  );
  return (
    <View style={styles.conatiner}>
      <View style={styles.flex_1_center}>
        <View style={styles.row_center}>
          <View style={{flex: 1}}></View>
          <View style={{flex: 5}}>
            <Image
              source={{
                uri:
                  'https://i.pinimg.com/236x/1a/75/f9/1a75f981dd0eb05f52b1c445bac38838.jpg',
              }}
              style={{width: '100%', height: 250, borderRadius: 200}}
            />
            <TouchableOpacity style={styles.btn} onPress={()=>{navigation.navigate('Customer')}}>
              <Text style={styles.btnText}>
                Back To Home{' '}
                <AntDesign name={'home'} size={20} color={'#fff'} />
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{flex: 1}}></View>
        </View>
      </View>
    </View>
  );
};

export default Submit;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: '#FFFEDF',
  },
  row_center: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    backgroundColor: 'rgb(250,129,16)',
    color: '#fff',
    marginVertical: 12,
    alignSelf: 'center',
    fontSize: 15,
    textAlign: 'center',
    borderRadius: 50,
    padding: 15,
    width: '80%',
  },
  btnText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '800',
    fontStyle: 'italic',
    color: '#fff',
  },
  flex_1_center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
