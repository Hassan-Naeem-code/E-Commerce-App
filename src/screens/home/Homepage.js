import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity,ActivityIndicator} from 'react-native';
import {useSelector} from 'react-redux';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

const Homepage = ({navigation}) => {
  const loginPageAdmin = () => {
    // setIndicator(true);
    navigation.navigate('Login', {role: 'Admin'});
  };
  const loginPageCustomer = () => {
    navigation.navigate('BHomeNavs', {role: 'Customer'});
  };
  const loginPageRestaurant = () => {
    navigation.navigate('Login', {role: 'Restaurant'});
  };
  const getState = useSelector(({auth}) => {
    return auth.auth;
  });
  const [indicator, setIndicator] = useState(false);
  useEffect(() => {
    getState ? navigation.navigate('Home') : null;
  });
  return (
    <View style={styles.conatiner}>
      <Image
        source={require('../../assets/Images/cook.png')}
        style={styles.image}
      />

      <View style={styles.mainHeadingContainer}>
        <View style={styles.flex_2}></View>
        <View style={styles.flex_5}>
          <Text style={styles.imageHeading}>HK FOOD CENTER</Text>
        </View>
        <View style={styles.flex_2}></View>
      </View>
      <View style={styles.mainHeadingContainer}>
        <View style={styles.flex_2}></View>
        <View style={styles.flex_5}>
          <LinearGradient colors={['#FF8008', '#FFC837']} style={styles.btn}>
            <TouchableOpacity onPress={loginPageAdmin}>
              <View style={styles.row_center}>
                <View style={styles.flex_6}>
                  <Text style={styles.btnText}>ENTER AS ADMIN</Text>
                  {/* <ActivityIndicator
                    size="small"
                    color="#FF8008"
                    animating={indicator}
                  /> */}
                </View>
                {/* <View style={styles.flex_1}></View> */}
                <View style={styles.flex_1}>
                  <MaterialIcon
                    name={'admin-panel-settings'}
                    size={26}
                    color={'#fff'}
                  />
                </View>
              </View>
            </TouchableOpacity>
          </LinearGradient>
          <LinearGradient colors={['#FF8008', '#FFC837']} style={styles.btn}>
            <TouchableOpacity onPress={loginPageCustomer}>
              <View style={styles.row_center}>
                <View style={styles.flex_6}>
                  <Text style={styles.btnText}> ENTER AS CUSTOMER</Text>
                </View>
                {/* <View style={styles.flex_1}></View> */}
                <View style={styles.flex_1}>
                  <Entypo name={'users'} size={26} color={'#fff'} />
                </View>
              </View>
            </TouchableOpacity>
          </LinearGradient>
          <LinearGradient colors={['#FF8008', '#FFC837']} style={styles.btn}>
            <TouchableOpacity onPress={loginPageRestaurant}>
              <View style={styles.row_center}>
                <View style={styles.flex_6}>
                  <Text style={styles.btnText}> ENTER AS RESTAURANT</Text>
                </View>
                {/* <View style={styles.flex_1}></View> */}
                <View style={styles.flex_1}>
                  <Ionicons name={'fast-food'} size={26} color={'#fff'} />
                </View>
              </View>
            </TouchableOpacity>
          </LinearGradient>
        </View>
        <View style={styles.flex_2}></View>
      </View>
    </View>
  );
};

export default Homepage;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: '#FFFEDF',
  },
  flex_1: {
    flex: 1,
  },
  flex_2: {
    flex: 2,
  },
  flex_5: {
    flex: 5,
  },
  flex_6: {
    flex: 6,
  },
  row_center: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainHeadingContainer: {
    marginTop: 5,
    marginBottom: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageHeading: {
    color: 'rgb(255,99,71)',
    fontSize: 25,
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  image: {
    alignSelf: 'center',
    marginTop: 50,
    width: '50%',
    height: '25%',
  },
  btn: {
    color: '#fff',
    marginVertical: 10,
    fontSize: 15,
    textAlign: 'center',
    borderRadius: 10,
    padding: 15,
  },
  btnText: {
    fontSize: 15,
    fontWeight: '800',
    fontStyle: 'italic',
    color: '#fff',
  },
});
