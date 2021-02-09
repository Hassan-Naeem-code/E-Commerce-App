import React, {useState,useEffect} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import {Form, Item, Input, Label} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import auth from '@react-native-firebase/auth';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Header from '../customer_menus/main_header';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {signOut,fetchUserInfo} from '../../../Store/actions/auth';
import {useDispatch, useSelector} from 'react-redux';

const UserProfile = ({navigation}) => {
  const dispatch = useDispatch();
  const getUser = useSelector(({auth}) => {
    return auth.auth;
  });
  const signOutUser = () => {
    dispatch(signOut());
  };
  const [refreshing, setRefreshing] = useState(false);
  const wait = (time) => {
    setTimeout(() => {
      setRefreshing(false);
    }, time);
  };
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(fetchUserInfo(user.uid));
      }
    });
    wait(1500);
  }, []);
  useEffect(() => {
    auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(fetchUserInfo(user.uid));
      }
    });
  }, []);
  console.log('User loged in is:..................', getUser);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <View style={styles.container}>
        <View style={styles.second_view}>
          <View style={styles.inner_view_under_second_view}>
            <View style={styles.empty_view}></View>
            <View style={styles.image_view}>
              <Image
                source={require('../../assets/Images/cook.png')}
                style={styles.main_image}
              />
            </View>
            <View style={styles.empty_view}></View>
          </View>
        </View>
        <View style={styles.centerContentStyle}>
          <View style={styles.main_view}>
            <View style={styles.inner_view_under_second_view_margin}>
              <View style={styles.flex_5_center}>
                <Text style={styles.titleStyle}>Food Delivery App </Text>
              </View>
              <View style={styles.flex_2_center}>
                {/* <TouchableOpacity onPress={signOutUser}>
                  <Text style={styles.color_white}>
                    {' '}
                    {'  '}
                    <AntDesign name={'logout'} size={20} color={'#FFFEDF'} />
                  </Text>
                </TouchableOpacity> */}
              </View>
            </View>
            <ScrollView refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
              <View style={styles.area_for_donor_card}>
                <View style={styles.container}>
                  <View style={styles.imageContainer}>
                    <Image
                      source={{
                        uri: getUser.coverImage,
                      }}
                      style={styles.coverImage}
                    />
                    <TouchableOpacity
                      style={styles.edit_btn}
                      onPress={() => {
                        navigation.navigate('EditProfileCustomer');
                      }}>
                      <FontAwesome name={'edit'} size={25} color={'#FFFEDF'} />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.profileImage}>
                    <Image
                      source={{
                        uri: getUser.profileImage,
                      }}
                      style={{width: 100, height: 100, borderRadius: 50}}
                    />
                  </View>
                </View>
              </View>

              <View style={styles.area_for_donor_card_detail}>
                <View style={styles.inner_view_under_second_view}>
                  <View style={styles.flex_2}>
                    <Image
                      source={{uri: getUser.profileImage}}
                      style={{width: '70%', height: 60, borderRadius: 100}}
                    />
                  </View>
                  <View style={styles.flex_3}>
                    <View style={styles.flex_row}>
                      <View style={styles.flex_7}>
                        <Text style={styles.nameStyle}>
                          {getUser.fname + ' ' + getUser.lname}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.flex_2_center}>
                    <Text style={styles.bloodStyle}>
                      <MaterialCommunityIcon
                        name={'food'}
                        size={35}
                        color={'rgb(255,99,71)'}
                      />
                    </Text>
                  </View>
                </View>
              </View>

              <View style={styles.area_for_donor_card_detail}>
                <View style={styles.inner_view_under_second_view}>
                  <View style={styles.flex_2}>
                    <Image
                      source={require('../../assets/Images/email.jpg')}
                      style={{width: '70%', height: 60, borderRadius: 100}}
                    />
                  </View>
                  <View style={styles.flex_3}>
                    <View style={styles.flex_row}>
                      <View style={styles.flex_7}>
                        <Text style={styles.numberStyle}>{getUser.email}</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.flex_2_center}>
                    <Text style={styles.bloodStyle}>
                      <MaterialCommunityIcon
                        name={'food'}
                        size={35}
                        color={'rgb(255,99,71)'}
                      />
                    </Text>
                  </View>
                </View>
              </View>

              <View style={styles.area_for_donor_card_detail}>
                <View style={styles.inner_view_under_second_view}>
                  <View style={styles.flex_2}>
                    <Image
                      source={require('../../assets/Images/location.png')}
                      style={{width: '70%', height: 60, borderRadius: 100}}
                    />
                  </View>
                  <View style={styles.flex_3}>
                    <View style={styles.flex_row}>
                      <View style={styles.flex_7}>
                        <Text style={styles.numberStyle}>
                          {getUser.address}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.flex_2_center}>
                    <Text style={styles.bloodStyle}>
                      <MaterialCommunityIcon
                        name={'food'}
                        size={35}
                        color={'rgb(255,99,71)'}
                      />
                    </Text>
                  </View>
                </View>
              </View>

              <View style={styles.area_for_donor_card_detail}>
                <View style={styles.inner_view_under_second_view}>
                  <View style={styles.flex_2}>
                    <Image
                      source={require('../../assets/Images/phone.png')}
                      style={{width: '70%', height: 60, borderRadius: 100}}
                    />
                  </View>
                  <View style={styles.flex_3}>
                    <View style={styles.flex_row}>
                      <View style={styles.flex_7}>
                        <Text style={styles.numberStyle}>
                          {getUser.phNumber}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.flex_2_center}>
                    <Text style={styles.bloodStyle}>
                      <MaterialCommunityIcon
                        name={'food'}
                        size={35}
                        color={'rgb(255,99,71)'}
                      />
                    </Text>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFEDF',
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFEDF',
  },
  // area_for_donor_card_detail: {
  //   backgroundColor: '#FFFEDF',
  //   padding: 10,
  //   borderRadius: 10,
  //   elevation: 5,
  //   marginVertical: 15,
  // },
  nameStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'rgb(255,99,71)',
  },
  numberStyle: {
    fontSize: 16,
    fontWeight: '900',
    color: 'rgb(255,99,71)',
  },
  bloodStyle: {
    fontSize: 16,
    fontWeight: '900',
  },
  centerContentStyle: {
    flex: 3,
    flexDirection: 'row',
    paddingHorizontal: 15,
  },
  main_view: {
    flex: 3,
    backgroundColor: 'rgb(255,99,71)',
    elevation: 5,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  second_view: {
    flex: 1,
    backgroundColor: '#FFFEDF',
  },
  inner_view_under_second_view: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inner_view_under_second_view_margin: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  area_for_donor_card: {
    backgroundColor: '#FFFEDF',
    padding: 10,
  },
  area_for_donor_card_detail: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFEDF',
    padding: 10,
    borderRadius: 10,
    elevation: 5,
    marginVertical: 5,
  },
  empty_view: {
    flex: 2,
  },
  image_view: {
    flex: 3,
    marginVertical: 10,
  },
  main_image: {
    width: '100%',
    height: 150,
  },
  login_image: {
    width: '60%',
    height: 150,
  },
  w_100: {
    width: '100%',
  },
  btn: {
    backgroundColor: '#FFFEDF',
    borderRadius: 5,
    width: '40%',
    padding: 13,
    marginVertical: 8,
    alignSelf: 'center',
  },
  btn_text: {
    color: 'rgb(255,99,71)',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  route_text: {
    color: 'rgb(255,99,71)',
    fontSize: 19,
    fontWeight: 'bold',
  },
  color_white: {
    color: '#FFFEDF',
    fontSize: 15,
    fontWeight: '800',
  },
  flex_5_center: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flex_3_center: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flex_2_center: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flex_2: {
    flex: 2,
  },
  flex_3: {
    flex: 3,
  },
  flex_7: {
    flex: 7,
  },
  flex_row: {
    flexDirection: 'row',
  },
  firstArea: {
    flex: 1,
    backgroundColor: 'black',
  },
  secondArea: {
    flex: 5,
    backgroundColor: '#FFFEDF',
  },
  innerAreaOfSecond: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 7,
  },
  thirdArea: {
    flex: 1,
    backgroundColor: 'green',
  },
  imageContainer: {
    position: 'relative',
  },
  coverImage: {
    width: '100%',
    height: 150,
    borderRadius: 15,
  },
  profileImage: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  edit_btn: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});
