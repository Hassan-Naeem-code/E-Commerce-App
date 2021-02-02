import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useDispatch} from 'react-redux';
import {logInUserEmailPassword} from '../../../Store/actions/auth';

const Login = ({route, navigation}) => {
  const {role} = route.params;
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [changeImageHeight, setImageHeight] = useState(false);
  const checkingRole = () => {
    if (role == 'Restaurant') {
      navigation.navigate('SignUp', {role: 'Restaurant'});
    } else {
      navigation.navigate('SignupCommon', {role: 'Customer'});
    }
  };
  const loginUser = () => {
    let user = {
      email,
      password,
    };
    dispatch(logInUserEmailPassword(user, navigation));
  };
  return (
    <View style={styles.container}>
      <View style={styles.direction_row}>
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
        <TextInput
          onChangeText={(text) => {
            setEmail(text);
          }}
          value={email}
          style={styles.textBox}
          placeholder="Enter Email Here"
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
          placeholder="Enter Password Here"
          onFocus={() => {
            setImageHeight(true);
          }}
          onBlur={() => {
            setImageHeight(false);
          }}
        />
        <TouchableOpacity style={styles.btn} onPress={loginUser}>
          <Text style={styles.btnText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={checkingRole}>
          <Text style={styles.registerText}>Register From Here</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFEDF',
  },
  direction_row: {
    flexDirection: 'row',
  },
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
