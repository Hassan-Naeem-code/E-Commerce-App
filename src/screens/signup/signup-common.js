import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useDispatch} from 'react-redux';
import storage from '@react-native-firebase/storage';
import {signUpUserEmailPassword} from '../../../Store/actions/auth';

const SignupCommon = ({route, navigation}) => {
  const {role} = route.params;
  const dispatch = useDispatch();
  const [fname, setFName] = useState('');
  const [lname, setLName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phNumber, setPhNumber] = useState('');
  const [address, setAddress] = useState('');
  const [roles,setRoles] = useState('Customer');
  const [coverImage,setCoverImage] = useState('https://s3.envato.com/files/273273308/01_preview.__large_preview.jpg');
  const [profileImage,setProfileImage] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSX5E_Y5KajrGgCXru5JaFqHj1f4knkuEGwA&usqp=CAU');
  const [changeImageHeight, setImageHeight] = useState(false);
  const [changeViewOne, setChangeViewOne] = useState(true);
  const [changeViewTwo, setChangeViewTwo] = useState(false);
  const [changeViewThree, setChangeViewThree] = useState(false);
  const goToLogin = () => {
    navigation.navigate('Login');
  };
  const changeViewFunc = () => {
    if ((fname && lname == '') || fname == '' || lname == '') {
      ToastAndroid.show('Plase Fill The Required Fields', 2000);
    } else {
      setChangeViewOne(false);
      setChangeViewTwo(true);
    }
  };
  const changeViewFuncSecond = () => {
    if ((phNumber && address == '') || phNumber == '' || address == '') {
      ToastAndroid.show('Plase Fill The Required Fields', 2000);
    } else {
      setChangeViewTwo(false);
      setChangeViewThree(true);
    }
  };
  const signUpUser = () => {


    let user = {
      fname,lname,email,password,phNumber,address,roles,coverImage,profileImage
    }
    dispatch(signUpUserEmailPassword(user,navigation));
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#FFFEDF',
      }}>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.arrowTransformation}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <AntDesign name={'arrowleft'} size={30} color={'#000'} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.mainArea}>
        <Image
          source={require('../../assets/Images/cook.png')}
          style={changeImageHeight == false ? styles.image : styles.imageFocus}
        />
        {changeViewOne == true ? (
          <>
            <TextInput
              onChangeText={(text) => {
                setFName(text);
              }}
              value={fname}
              style={styles.textBox}
              placeholder="Enter Your First Name"
              onFocus={() => {
                setImageHeight(true);
              }}
              onBlur={() => {
                setImageHeight(false);
              }}
            />
            <TextInput
              onChangeText={(text) => {
                setLName(text);
              }}
              value={lname}
              style={styles.textBox}
              placeholder="Enter Your Last Name"
              onFocus={() => {
                setImageHeight(true);
              }}
              onBlur={() => {
                setImageHeight(false);
              }}
            />
            <TouchableOpacity style={styles.btn} onPress={changeViewFunc}>
              <Text style={styles.btnText}>NEXT</Text>
            </TouchableOpacity>
          </>
        ) : null}
        {changeViewTwo == true ? (
          <>
            <TextInput
              onChangeText={(text) => {
                setPhNumber(text);
              }}
              value={phNumber}
              style={styles.textBox}
              keyboardType={'numeric'}
              placeholder="Enter Your Phone Number"
              onFocus={() => {
                setImageHeight(true);
              }}
              onBlur={() => {
                setImageHeight(false);
              }}
            />
            <TextInput
              onChangeText={(text) => {
                setAddress(text);
              }}
              value={address}
              style={styles.textBox}
              placeholder="Enter Your Address"
              onFocus={() => {
                setImageHeight(true);
              }}
              onBlur={() => {
                setImageHeight(false);
              }}
            />
            <TouchableOpacity style={styles.btn} onPress={changeViewFuncSecond}>
              <Text style={styles.btnText}>Next</Text>
            </TouchableOpacity>
          </>
        ) : null}

        {changeViewThree == true ? (
          <>
            <TextInput
              onChangeText={(text) => {
                setEmail(text);
              }}
              value={email}
              style={styles.textBox}
              placeholder="Enter Your Email"
              onFocus={() => {
                setImageHeight(true);
              }}
              onBlur={() => {
                setImageHeight(false);
              }}
            />
            <TextInput
              onChangeText={(text) => {
                setPassword(text);
              }}
              value={password}
              style={styles.textBox}
              secureTextEntry={true}
              placeholder="Enter Your Password"
              onFocus={() => {
                setImageHeight(true);
              }}
              onBlur={() => {
                setImageHeight(false);
              }}
            />
            <TouchableOpacity style={styles.btn} onPress={signUpUser}>
              <Text style={styles.btnText}>SIGN UP</Text>
            </TouchableOpacity>
          </>
        ) : null}
        <TouchableOpacity onPress={goToLogin}>
          <Text style={styles.registerText}>Already Have An Account Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignupCommon;
const styles = StyleSheet.create({
  arrowTransformation: {
    flex: 2,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginVertical: 15,
    marginLeft: 10,
  },
  mainArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFEDF',
  },
  image: {
    width: '50%',
    height: '22%',
  },
  imageFocus: {
    width: '50%',
    height: '35%',
  },
  textBox: {
    backgroundColor: '#fff',
    borderColor: '#000',
    borderRadius: 25,
    width: '70%',
    textAlign: 'center',
    fontSize: 20,
    marginVertical: 10,
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
  registerText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: 'rgb(255,99,71)',
  },
});
