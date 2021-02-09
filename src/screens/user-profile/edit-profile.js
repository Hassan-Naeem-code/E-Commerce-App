import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  ToastAndroid,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Form, Item, Input, Label} from 'native-base';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {updateCurrentUserInfoCustomer} from '../../../Store/actions/auth';
import {useDispatch, useSelector} from 'react-redux';

const EditProfile = ({navigation}) => {
  const dispatch = useDispatch();
  const getUser = useSelector(({auth}) => {
    return auth.auth;
  });
  const [fname, setFName] = useState(getUser.fname);
  const [lname,setLName] = useState(getUser.lname);
  const [email, setEmail] = useState(getUser.email);
  const [address, setAddress] = useState(getUser.address);
  const [number, setNumber] = useState(getUser.phNumber);
  const [profileImage, setProfileImage] = useState(
    getUser.profileImage,
  );
  const [coverImage, setCoverImage] = useState(
    getUser.coverImage,
  );
  const check_Validate_sign_up = () => {
    if (
      fname == '' ||
      lname == '' ||
      email == '' ||
      address == '' ||
      number == '' ||
      (fname == '' &&
      lname == '' &&
        email == '' &&
        number == '' &&
        address == '')
    ) {
      ToastAndroid.show('Please Fill Up All The Fields', 2000);
    } else {
      let user = {
        fname,
        lname,
        email,
        address,
        number,
        profileImage,
        coverImage,
        id: getUser.id,
        uid: getUser.uid
      };
      dispatch(updateCurrentUserInfoCustomer(user, navigation));
    }
  };
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
            <ScrollView>
              {/* <Image
              source={require('../../assets/Images/drop.png')}
              style={styles.login_image}
            /> */}
              <Text style={styles.titleStyle}>EDIT PROFILE</Text>
              <Form style={styles.w_100}>
                <Item floatingLabel>
                  <Label>First Name</Label>
                  <Input
                    value={fname}
                    onChangeText={(text) => {
                      setFName(text);
                    }}
                    editable={false}
                  />
                </Item>
                <Item floatingLabel>
                  <Label>Last Name</Label>
                  <Input
                    value={lname}
                    onChangeText={(text) => {
                      setLName(text);
                    }}
                    editable={false}
                  />
                </Item>
                <Item floatingLabel>
                  <Label>Email</Label>
                  <Input
                    value={email}
                    onChangeText={(text) => {
                      setEmail(text);
                    }}
                    editable={false}
                  />
                </Item>
                <Item floatingLabel last>
                  <Label>Address</Label>
                  <Input
                    value={address}
                    onChangeText={(text) => {
                      setAddress(text);
                    }}
                  />
                </Item>
                <Item floatingLabel last>
                  <Label>Mobile Number</Label>
                  <Input
                    value={number}
                    onChangeText={(text) => {
                      setNumber(text);
                    }}
                    keyboardType={'numeric'}
                  />
                </Item>
              </Form>
              <TouchableOpacity
                style={styles.btn}
                onPress={check_Validate_sign_up}>
                <Text style={styles.btn_text}>
                  Submit{' '}
                  <Fontisto name={'blood-drop'} size={20} color={'#fff'} />
                </Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFEDF',
  },
  titleStyle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'rgb(255,91,70)',
    marginVertical: 10,
  },
  centerContentStyle: {
    flex: 3,
    flexDirection: 'row',
    paddingHorizontal: 15,
  },
  main_view: {
    flex: 3,
    backgroundColor: 'white',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    elevation: 5,
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
  empty_view: {
    flex: 2,
  },
  image_view: {
    flex: 3,
  },
  main_image: {
    width: '100%',
    height: 150,
    marginVertical: 10,
  },
  login_image: {
    width: '60%',
    height: 150,
  },
  w_100: {
    width: '100%',
  },
  btn: {
    backgroundColor: 'rgb(255,91,70)',
    borderRadius: 25,
    width: '50%',
    alignSelf: 'center',
    padding: 13,
    marginVertical: 15,
  },
  btn_text: {
    color: 'white',
    fontSize: 15,
    fontWeight: '900',
    textAlign: 'center',
  },
  route_text: {
    color: 'rgb(255,91,70)',
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
