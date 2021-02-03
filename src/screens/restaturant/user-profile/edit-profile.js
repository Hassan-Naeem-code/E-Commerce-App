import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableOpacityBase,
  TextInput,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import storage from '@react-native-firebase/storage';
import ImagePicker from 'react-native-image-crop-picker';
import {useSelector, useDispatch} from 'react-redux';
import AnimatedLoader from 'react-native-animated-loader';
import {updateCurrentUserInfo} from '../../../../Store/actions/auth';
let profileURL;
const EditProfile = ({navigation}) => {
  const dispatch = useDispatch();
  const getState = useSelector(({auth}) => {
    return auth.auth;
  });
  const [coverImage, setcoverImage] = useState(getState.coverImage);
  const [profileImage, setprofileImage] = useState(getState.profileImage);
  const [restaurantname, setRestaurantName] = useState(getState.restaurantname);
  const [email, setEmail] = useState(getState.email);
  const [contactNumber, setContactNumber] = useState(getState.contactNumber);
  const [location, setLocation] = useState(getState.location);
  const [restaurantType, setRestaurantType] = useState(getState.typeRes);
  const [isPictureUploaded, setIsPictureUploaded] = useState(false);

  async function imagePickerFunc() {
    try {
      let response = await ImagePicker.openPicker({
        width: 100,
        height: 100,
        cropping: true,
        mediaType: 'photo',
      });
      // console.log(response);
      setIsPictureUploaded(true);
      let imageName = Date.now();
      let imagePath = response.path;
      setcoverImage(imagePath);

      let updateImagePath = await fetch(imagePath);
      const blob = await updateImagePath.blob();
      let imageRef = storage()
        .ref()
        .child(`Restaurant Cover Pictures/${imageName}`);
      let result = await imageRef.put(blob);
      let getURL = await imageRef.getDownloadURL();
      profileURL = getURL;
      setcoverImage(profileURL);
      setIsPictureUploaded(false);
    } catch (error) {
      console.error(`${error}`);
    }
  }

  async function profileImagePictureFunction() {
    try {
      let response = await ImagePicker.openPicker({
        width: 100,
        height: 100,
        cropping: true,
        mediaType: 'photo',
      });
      // console.log(response);
      setIsPictureUploaded(true);
      let imageName = Date.now();
      let imagePath = response.path;
      setprofileImage(imagePath);

      let updateImagePath = await fetch(imagePath);
      const blob = await updateImagePath.blob();
      let imageRef = storage()
        .ref()
        .child(`Restaurant Profile Pictures/${imageName}`);
      let result = await imageRef.put(blob);
      let getURL = await imageRef.getDownloadURL();
      profileURL = getURL;
      setprofileImage(profileURL);
      setIsPictureUploaded(false);
    } catch (error) {
      console.error(`${error}`);
    }
  }

  const updateRestaurantProfile = () => {
    let docid = getState.id;
    let restaurant = {
      coverImage,
      profileImage,
      restaurantname,
      email,
      contactNumber,
      location,
      restaurantType,
      docid,
    };
    dispatch(updateCurrentUserInfo(restaurant,navigation));
    setcoverImage(getState.coverImage);
    setprofileImage(getState.profileImage);
    setRestaurantName(getState.restaurantname);
    setEmail(getState.email);
    setContactNumber(getState.contactNumber);
    setLocation(getState.location);
    setRestaurantType(getState.typeRes);
   
  };
  console.log('Redux data is here:', getState);
  return (
    <View style={styles.container}>
      <View style={styles.firstArea}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: coverImage,
            }}
            style={styles.imageContainer}
          />
          <TouchableOpacity
            style={styles.coverImageEdit}
            onPress={imagePickerFunc}>
            <FontAwesome name={'pencil'} size={20} color={'rgb(255,99,71)'} />
          </TouchableOpacity>
        </View>
        <View style={styles.profileImage}>
          <Image
            source={{
              uri: profileImage,
            }}
            style={{width: 100, height: 100, borderRadius: 50}}
          />
          <TouchableOpacity
            style={styles.profileImageEdit}
            onPress={profileImagePictureFunction}>
            <FontAwesome name={'pencil'} size={20} color={'rgb(255,99,71)'} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.secondArea}>
        <ScrollView>
          <Text style={styles.heading_text}>Edit Profile</Text>
          <Text style={styles.entryFieldName}>Name</Text>
          <TextInput
            style={styles.field_width}
            value={restaurantname}
            onChangeText={(text) => {
              setRestaurantName(text);
            }}
            placeholder={'Enter Your Name'}
          />
          <Text style={styles.entryFieldName}>Email</Text>
          <TextInput
            style={styles.field_width}
            value={email}
            onChangeText={(text) => {
              setEmail(text);
            }}
            placeholder={'Enter Your Email'}
          />
          <Text style={styles.entryFieldName}>Contact Number</Text>
          <TextInput
            style={styles.field_width}
            value={contactNumber}
            onChangeText={(text) => {
              setContactNumber(text);
            }}
            keyboardType={'numeric'}
            placeholder={'Enter Your Contact Number'}
          />
          <Text style={styles.entryFieldName}>Location</Text>
          <TextInput
            style={styles.field_width}
            value={location}
            onChangeText={(text) => {
              setLocation(text);
            }}
            placeholder={'Enter Your Location'}
          />
          <Text style={styles.entryFieldName}>Restaurant Type</Text>
          <TextInput
            style={styles.field_width}
            value={restaurantType}
            onChangeText={(text) => {
              setRestaurantType(text);
            }}
            placeholder={'Enter Your Restaurant Type'}
          />
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity style={styles.btn} onPress={updateRestaurantProfile}>
              <Text style={styles.btnText}>Update</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <AnimatedLoader
          visible={isPictureUploaded}
          overlayColor="rgba(255,255,255,0.75)"
          source={require('../../../assets/Loader/nfc.json')}
          animationStyle={styles.lottie}
          speed={1}></AnimatedLoader>
      </View>
    </View>
  );
};

export default EditProfile;

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
  coverImageEdit: {
    position: 'absolute',
    right: 5,
    top: 5,
    backgroundColor: '#fff',
    borderRadius: 100,
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
  profileImageEdit: {
    position: 'absolute',
    top: 0,
    right: '40%',
    backgroundColor: '#fff',
    borderRadius: 100,
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
  heading_text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
    marginVertical: 10,
    color: 'rgb(118,118,118)',
  },
  entryFieldName: {
    fontSize: 18,
    fontWeight: '700',
    color: 'rgb(118,118,118)',
    marginLeft: 6,
    marginVertical: 5,
  },
  field_width: {
    marginHorizontal: 8,
    width: '100%',
    borderRadius: 50,
    backgroundColor: '#fff',
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
