import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  RefreshControl,
} from 'react-native';
import {useSelector} from 'react-redux';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import auth from '@react-native-firebase/auth';
import EditProfile from './edit-profile';
import {useDispatch} from 'react-redux';
import {fetchUserInfo} from '../../../../Store/actions/auth';

const UserProfile = ({navigation}) => {
  const dispatch = useDispatch();
  const getState = useSelector(({auth}) => {
    return auth.auth;
  });
  const [coverPic, setCoverPic] = useState('');
  const [profilePic, setProfilePic] = useState('');
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
  return (
    <View style={styles.container}>
        <View style={styles.firstArea}>
          <View style={styles.imageContainer}>
            <Image
              source={{
                uri:
                getState.coverImage,
              }}
              style={styles.imageContainer}
            />
          </View>
          <View style={styles.profileImage}>
            <Image
              source={{
                uri:
                getState.profileImage,
              }}
              style={{width: 100, height: 100, borderRadius: 50}}
            />
          </View>
        </View>
        <View style={styles.secondArea}>
          <View style={styles.innerAreaOfSecond}>
            <Text style={styles.userName}>{getState.restaurantname}</Text>
          </View>
          <View style={styles.innerAreaOfSecond}>
            <TouchableOpacity
              style={styles.editProfileBtn}
              onPress={() => {
                navigation.navigate('EditProfile');
              }}>
              <Text style={styles.btnText}>
                <FontAwesome name={'edit'} size={20} />
                Edit Profile
              </Text>
            </TouchableOpacity>
          </View>
          <ScrollView refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }> 
            <View style={styles.product_card}>
              <View style={styles.image_area}>
                <Image
                  source={require('../../../assets/Images/cook.png')}
                  style={styles.product_image}
                />
              </View>
              <View style={styles.text_area}>
                <View style={styles.divide_column}>
                  <Text style={styles.food_text}>RESTAURANT NAME</Text>
                  <Text style={styles.food_desc}>
                    {getState.restaurantname}
                  </Text>
                </View>
              </View>
              <View style={styles.time_area}>
                <Text style={styles.time_text}>FOOD TYPE</Text>
                <Text style={styles.type}>{getState.typeRes}</Text>
              </View>
            </View>

            <View style={styles.product_card}>
              <View style={styles.image_area}>
                <Image
                  source={require('../../../assets/Images/email.jpg')}
                  style={styles.product_image}
                />
              </View>
              <View style={styles.text_area}>
                <View style={styles.divide_column}>
                  <Text style={styles.food_text}>RESTAURANT EMAIL</Text>
                  <Text style={styles.food_desc}>{getState.email}</Text>
                </View>
              </View>
              <View style={styles.time_area}>
                <Text style={styles.time_text}>FOOD TYPE</Text>
                <Text style={styles.type}>{getState.typeRes}</Text>
              </View>
            </View>

            <View style={styles.product_card}>
              <View style={styles.image_area}>
                <Image
                  source={require('../../../assets/Images/phone.png')}
                  style={styles.product_image}
                />
              </View>
              <View style={styles.text_area}>
                <View style={styles.divide_column}>
                  <Text style={styles.food_text}>RESTAURANT NUMBER</Text>
                  <Text style={styles.food_desc}>{getState.contactNumber}</Text>
                </View>
              </View>
              <View style={styles.time_area}>
                <Text style={styles.time_text}>FOOD TYPE</Text>
                <Text style={styles.type}>{getState.typeRes}</Text>
              </View>
            </View>

            <View style={styles.product_card}>
              <View style={styles.image_area}>
                <Image
                  source={require('../../../assets/Images/location.png')}
                  style={styles.product_image}
                />
              </View>
              <View style={styles.text_area}>
                <View style={styles.divide_column}>
                  <Text style={styles.food_text}>RESTAURANT LOCATION</Text>
                  <Text style={styles.food_desc}>{getState.location}</Text>
                </View>
              </View>
              <View style={styles.time_area}>
                <Text style={styles.time_text}>FOOD TYPE</Text>
                <Text style={styles.type}>{getState.typeRes}</Text>
              </View>
            </View>
          </ScrollView>
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
  firstArea: {
    flex: 1,
  },
  secondArea: {
    flex: 3,
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
    flex: 1,
    position: 'relative',
  },
  coverImage: {
    width: '100%',
    height: 100,
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
  userName: {
    marginVertical: 4,
    color: 'rgb(118,118,118)',
    fontSize: 20,
    fontWeight: '700',
  },
  editProfileBtn: {
    backgroundColor: 'rgb(255,99,71)',
    paddingVertical: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  btnText: {
    color: '#fff',
  },
  product_card: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 7,
    marginVertical: 5,
    borderRadius: 30,
  },
  image_area: {
    flex: 2,
    justifyContent: 'center',
    padding: 10,
  },
  product_image: {
    width: '100%',
    height: 100,
    borderRadius: 20,
  },
  text_area: {
    flex: 3,
    justifyContent: 'center',
  },
  divide_column: {
    flexDirection: 'column',
  },
  time_area: {
    flex: 2,
    justifyContent: 'center',
  },
  time_text: {
    fontSize: 13,
    color: 'rgb(118,118,118)',
  },
  type: {
    fontSize: 18,
    color: 'rgb(118,118,118)',
    fontWeight: '700',
  },
});
