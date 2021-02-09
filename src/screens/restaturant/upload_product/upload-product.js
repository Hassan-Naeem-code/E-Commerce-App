import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import Header from '../home/header';
import storage from '@react-native-firebase/storage';
import ImagePicker from 'react-native-image-crop-picker';
import {useDispatch, useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {restaurantFoodAddProcess} from '../../../../Store/actions/restaurantFoodAdd';
import AnimatedLoader from 'react-native-animated-loader';
let profileURL;
const UploadProduct = ({navigation}) => {
  const dispatch = useDispatch();
  const getState = useSelector(({auth}) => {
    return auth.auth;
  });
  const {
    restaurantname,
    location,
    contactNumber,
    typeRes,
    email,
    uid,
  } = getState;
  const [dishName, setDishName] = useState('');
  const [dishType, setDishType] = useState('');
  const [foodDesc, setFoodDesc] = useState('');
  const [foodPrice, setFoodPrice] = useState('');
  const [deliveryTime, setDeliveryTime] = useState('');
  const [qualityFood, setQualityFood] = useState('');
  const [foodImage, setFoodImage] = useState(
    'https://digitalsynopsis.com/wp-content/uploads/2016/06/loading-animations-preloader-gifs-ui-ux-effects-23.gif',
  );
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
      setFoodImage(imagePath);

      let updateImagePath = await fetch(imagePath);
      const blob = await updateImagePath.blob();
      let imageRef = storage().ref().child(`Food Images/${imageName}`);
      let result = await imageRef.put(blob);
      let getURL = await imageRef.getDownloadURL();
      profileURL = getURL;
      setFoodImage(profileURL);
      setIsPictureUploaded(false);
    } catch (error) {
      console.error(`${error}`);
    }
  }
  const addFood = () => {
    if (
      dishName !== '' &&
      dishType !== '' &&
      foodDesc !== '' &&
      foodPrice !== '' &&
      deliveryTime !== '' &&
      qualityFood !== '' &&
      foodImage !== '' &&
      restaurantname !== '' &&
      location !== '' &&
      contactNumber !== '' &&
      typeRes !== '' &&
      email !== '' &&
      uid !== ''
    ) {
      let food = {
        dishName,
        dishType,
        foodDesc,
        foodPrice,
        deliveryTime,
        qualityFood,
        foodImage,
        restaurantname,
        location,
        contactNumber,
        typeRes,
        email,
        uid,
      };
      dispatch(restaurantFoodAddProcess(food, navigation));
      setDishName('');
      setDishType('');
      setFoodDesc('');
      setFoodPrice('');
      setDeliveryTime('');
      setQualityFood('');
      setFoodImage(
        'https://digitalsynopsis.com/wp-content/uploads/2016/06/loading-animations-preloader-gifs-ui-ux-effects-23.gif',
      );
    } else {
      ToastAndroid.show('Please fill up all the fields', 2000);
    }
  };
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView>
          <View style={styles.fieldForAddProduct}>
            <Text style={styles.food_text}>ADD PRODUCT</Text>
          </View>
          <Text style={styles.food_title}>Name Of The Dish</Text>
          <View style={styles.product_field_area}>
            <TextInput
              placeholder="Enter Name Of The Dish"
              value={dishName}
              onChangeText={(text) => {
                setDishName(text);
              }}
              style={styles.field_width}
            />
          </View>
          <Text style={styles.food_title}>Type Of The Dish</Text>
          <View style={styles.product_field_area}>
            <TextInput
              placeholder="Enter Type Of The Dish"
              value={dishType}
              onChangeText={(text) => {
                setDishType(text);
              }}
              style={styles.field_width}
            />
          </View>
          <Text style={styles.food_title}>Description Of The Dish</Text>
          <View style={styles.product_field_area}>
            <TextInput
              placeholder="Enter The Description Of The Dish"
              value={foodDesc}
              onChangeText={(text) => {
                setFoodDesc(text);
              }}
              style={styles.field_width}
              multiline={true}
              numberOfLines={6}
            />
          </View>
          <Text style={styles.food_title}>Price Of The Dish</Text>
          <View style={styles.product_field_area}>
            <TextInput
              placeholder="Enter The Price Of The Dish"
              value={foodPrice}
              onChangeText={(text) => {
                setFoodPrice(text);
              }}
              keyboardType={'numeric'}
              style={styles.field_width}
            />
          </View>
          <Text style={styles.food_title}>
            Delivery Timing Of The Dish (Write in number only)
          </Text>
          <View style={styles.product_field_area}>
            <TextInput
              placeholder="Enter The Delivery Timing Of The Dish"
              value={deliveryTime}
              onChangeText={(text) => {
                setDeliveryTime(text);
              }}
              keyboardType={'numeric'}
              style={styles.field_width}
            />
          </View>
          <Text style={styles.food_title}>Quantity Of The Dish</Text>
          <View style={styles.product_field_area}>
            <TextInput
              placeholder="Enter Name Of The Dish"
              value={qualityFood}
              keyboardType={'numeric'}
              onChangeText={(text) => {
                setQualityFood(text);
              }}
              style={styles.field_width}
            />
          </View>
          <View style={styles.product_field_area}>
            <View
              style={{
                paddingLeft: 10,
                height: 200,
                marginBottom: 10,
                borderWidth: 1,
                borderStyle: 'dashed',
                borderRadius: 1,
              }}>
              <Text style={styles.uploadImageText}>Upload Image Here</Text>
              <TouchableOpacity
                style={{width: '100%'}}
                onPress={imagePickerFunc}>
                <Image
                  source={{uri: foodImage}}
                  style={{width: '100%', height: 150}}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <TouchableOpacity style={styles.btn} onPress={addFood}>
              <Text style={styles.btnText}>SUBMIT</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <AnimatedLoader
        visible={isPictureUploaded}
        overlayColor="rgba(255,255,255,0.75)"
        source={require('../../../assets/Loader/nfc.json')}
        animationStyle={styles.lottie}
        speed={1}></AnimatedLoader>
    </View>
  );
};

export default UploadProduct;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFEDF',
  },
  food_text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
    marginVertical: 10,
    color: 'rgb(118,118,118)',
  },
  food_title: {
    fontSize: 13,
    color: 'rgb(118,118,118)',
    fontStyle: 'italic',
    fontWeight: '700',
    marginLeft: 13,
    marginVertical: 6,
  },
  food_desc: {
    fontSize: 13,
    color: 'rgb(118,118,118)',
    fontStyle: 'italic',
    fontWeight: '700',
    marginLeft: 10,
    marginVertical: 10,
  },
  fieldForAddProduct: {
    flexDirection: 'row',
  },
  product_field_area: {
    backgroundColor: '#fff',
    borderRadius: 20,
    marginVertical: 4,
    marginHorizontal: 10,
    padding: 5,
  },
  field_width: {
    width: '50%',
    textAlign: 'center',
  },
  btn: {
    backgroundColor: 'rgb(255,99,71)',
    color: '#fff',
    marginTop: 10,
    fontSize: 15,
    textAlign: 'center',
    borderRadius: 50,
    padding: 15,
    width: '50%',
    marginBottom: 70,
  },
  btnText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '900',
    fontStyle: 'italic',
    color: '#fff',
  },
  uploadImageText: {
    textAlign: 'center',
    fontSize: 15,
    color: 'rgb(118,118,118)',
    fontStyle: 'italic',
    fontWeight: '800',
    marginVertical: 10,
  },
  lottie: {
    width: '100%',
    height: '100%',
  },
});
