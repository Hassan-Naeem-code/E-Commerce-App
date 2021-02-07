import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ToastAndroid,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import Header from '../customer_menus/main_header';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useSelector, useDispatch} from 'react-redux';
import {customerOrder} from '../../../Store/actions/customer';

const OrderSubmission = ({route, navigation}) => {
  const {dataOfFood} = route.params;

  const getState = useSelector(({auth}) => {
    return auth.auth;
  });
  const dispatch = useDispatch();
  const [fName, setFName] = useState(getState.fname);
  const [lName, setLName] = useState(getState.lname);
  const [email, setEmail] = useState(getState.email);
  const [foodImage, setFoodImage] = useState(dataOfFood.foodImage);
  const [contactNumber, setContactNumber] = useState(getState.phNumber);
  const [address, setAddress] = useState(getState.address);
  const [deliveryTime, setDeliveryTime] = useState(dataOfFood.deliveryTime);
  const [foodName, setFoodName] = useState(dataOfFood.dishName);
  const [quatity, setQuantity] = useState('');
  const [price, setPrice] = useState(dataOfFood.foodPrice);

  const orderPlace = () => {
    let uid = dataOfFood.uid;
    let userUid = getState.uid;
    if(fName == '' || lName == '' || email == '' || contactNumber == '' || address == '' || foodName == '' || price == '' || deliveryTime == '' || quatity == '' || foodImage == '' || fName == '' && lName == '' && email == '' && contactNumber == '' && address == '' && foodName == '' && price == '' && deliveryTime == '' && quatity == '' && foodImage == '' ){
     ToastAndroid.show('Please First Fill Out All The Fields',2000); 
    }
    else{
      let order = {
        fName,
        lName,
        email,
        contactNumber,
        address,
        foodName,
        price,
        deliveryTime,
        quatity,
        foodImage,
        uid,
        userUid,
      };
      dispatch(customerOrder(order, navigation));
    }
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        {/* <Header /> */}
        <View style={styles.firstSection}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <AntDesign
              name={'arrowleft'}
              size={30}
              color={'rgb(118,118,118)'}
            />
          </TouchableOpacity>
          <View style={styles.innerSection}>
            <View style={styles.flex_2}>
              <Text style={styles.food_text}>Food Order</Text>
            </View>
            <View style={styles.flex_1}></View>
            <View style={styles.flex_4}>
              <Image
                source={{
                  uri: foodImage,
                }}
                style={styles.main_image_look}
              />
            </View>
          </View>
          <View style={styles.innerSection}>
            <View style={styles.flex_7}>
              <Text style={styles.food_text}>First Name*</Text>
              <TextInput
                value={fName}
                onChangeText={(text) => {
                  setFName(text);
                }}
                editable={false}
                style={styles.textField}
              />
              <Text style={styles.food_text}>Last Name*</Text>
              <TextInput
                value={lName}
                onChangeText={(text) => {
                  setLName(text);
                }}
                editable={false}
                style={styles.textField}
              />
              <Text style={styles.food_text}>Email*</Text>
              <TextInput
                value={email}
                onChangeText={(text) => {
                  setEmail(text);
                }}
                editable={false}
                style={styles.textField}
              />
              <Text style={styles.food_text}>Contact Number*</Text>
              <TextInput
                value={contactNumber}
                onChangeText={(text) => {
                  setContactNumber(text);
                }}
                editable={false}
                style={styles.textField}
              />
              <Text style={styles.food_text}>Address*</Text>
              <TextInput
                value={address}
                onChangeText={(text) => {
                  setAddress(text);
                }}
                style={styles.textField}
              />
              <Text style={styles.food_text}>Food Name*</Text>
              <TextInput
                value={foodName}
                onChangeText={(text) => {
                  setFoodName(text);
                }}
                editable={false}
                style={styles.textField}
              />
              <Text style={styles.food_text}>Food Price*</Text>
              <TextInput
                value={'Rs. ' + price}
                onChangeText={(text) => {
                  setPrice(text);
                }}
                editable={false}
                style={styles.textField}
              />
              <Text style={styles.food_text}>Food Delivery Time*</Text>
              <TextInput
                value={deliveryTime + ' minutes'}
                onChangeText={(text) => {
                  setDeliveryTime(text);
                }}
                editable={false}
                style={styles.textField}
              />
              <Text style={styles.food_text}>Food Quantity*</Text>
              <TextInput
                value={quatity}
                onChangeText={(text) => {
                  setQuantity(text);
                  let quantityChange = Number(text);
                  let actualPrice = Number(dataOfFood.foodPrice);
                  let finalPrice = quantityChange * actualPrice;
                  finalPrice = String(finalPrice);
                  setPrice(finalPrice);
                }}
                keyboardType={'numeric'}
                style={styles.textField}
              />
              <TouchableOpacity style={styles.btn} onPress={orderPlace}>
                <Text style={styles.btnText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default OrderSubmission;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFEDF',
  },
  firstSection: {
    flex: 1,
    padding: 25,
  },
  innerSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  food_text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    marginVertical: 10,
    color: 'rgb(118,118,118)',
  },
  textField: {
    backgroundColor: '#fff',
    borderRadius: 25,
  },
  btn: {
    backgroundColor: 'rgb(255,99,71)',
    color: '#fff',
    marginVertical: 20,
    fontSize: 15,
    textAlign: 'center',
    borderRadius: 50,
    padding: 15,
    width: '100%',
  },
  btnText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '800',
    fontStyle: 'italic',
    color: '#fff',
  },
  flex_1: {
    flex: 1,
  },
  flex_2: {
    flex: 2,
  },
  flex_4: {
    flex: 4,
  },
  flex_7: {
    flex: 7,
  },
  main_image_look: {
    width: '100%',
    height: 150,
    borderRadius: 25,
  },
});
