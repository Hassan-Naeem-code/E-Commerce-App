import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  RefreshControl,
} from 'react-native';
import {Form, Item, Input, Label, Right, Radio, Left} from 'native-base';
import Header from '../customer_menus/main_header';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';

const OrderPlace = () => {
  const dispatch = useDispatch();
  const getCartProduct = useSelector(({customer}) => {
    return customer.cart;
  });
  const getState = useSelector(({auth}) => {
    return auth.auth;
  });
  // Ahmed changes...!
  const [grandTotal, setGrandTotal] = useState(0);
  const [name, setName] = useState(getState.fname + getState.lname);
  const [email, setEmail] = useState(getState.email);
  const [number, setNumber] = useState(getState.phNumber);
  const [address, setAddress] = useState(getState.address);

  const calculateAmount = () => {
    let totalAmount = 0;
    for (let i = 0; i < getCartProduct.length; i++) {
      totalAmount = totalAmount + getCartProduct[i].totalPrice;
    }
    setGrandTotal(totalAmount);
  };

  useEffect(() => {
    calculateAmount();
    console.log('The Authenticate user is here:', getState);
  });
  // End...!
  return (
    <View style={styles.conatiner}>
      <ScrollView>
        <Header />
        <Text style={styles.food_text}>Order Summary</Text>
        {getCartProduct && getCartProduct.length > 0 ? (
          <View style={styles.sub_total_area}>
            <View style={styles.row_center}>
              <View style={styles.flex_4_start}>
                <Text style={styles.heading_for_total}>Sub Total:-</Text>
              </View>
              <View style={styles.flex_3_center}>
                <Text style={styles.price_color}>RS. {grandTotal}</Text>
              </View>
            </View>
            <View style={styles.row_center}>
              <View style={styles.flex_4_start}>
                <Text style={styles.heading_for_total}>Delivery Charges:-</Text>
              </View>
              <View style={styles.flex_3_center}>
                <Text style={styles.price_color}>RS.120</Text>
              </View>
            </View>
            <View style={styles.row_center}>
              <View style={styles.flex_7_start}></View>
            </View>
            <View style={styles.row_center}>
              <View style={styles.flex_4_start}>
                <Text style={styles.heading_for_total}>Final Charges:- </Text>
              </View>
              <View style={styles.flex_3_center}>
                <Text style={styles.price_color}>RS. {grandTotal + 120}</Text>
              </View>
            </View>
          </View>
        ) : null}
        <Text style={styles.food_text}>Payment Information</Text>
        <Form style={styles.form_style}>
          <Item floatingLabel>
            <Label style={styles.label_text}>User Name</Label>
            <Input
              editable={false}
              value={name}
              onChangeText={(text) => {
                setName(text);
              }}
              style={styles.field_text}
            />
          </Item>
          <Item floatingLabel last>
            <Label style={styles.label_text}>EMAIL ADDRESS</Label>
            <Input
              editable={false}
              value={email}
              onChangeText={(text) => {
                setEmail(text);
              }}
              style={styles.field_text}
            />
          </Item>
          <Item floatingLabel last>
            <Label style={styles.label_text}>
              MOBILE NUMBER{' '}
              <FontAwesome name={'edit'} size={20} color={'rgb(118,118,118)'} />
            </Label>
            <Input
              keyboardType={'numeric'}
              value={number}
              onChangeText={(text) => {
                setNumber(text);
              }}
              style={styles.field_text}
            />
          </Item>
          <Item floatingLabel last>
            <Label style={styles.label_text}>
              ADDRESS{' '}
              <FontAwesome name={'edit'} size={20} color={'rgb(118,118,118)'} />
            </Label>
            <Input
              value={address}
              onChangeText={(text) => {
                setAddress(text);
              }}
              style={styles.field_text}
            />
          </Item>
          <View style={styles.margin_vertical_8}>
            <Label style={styles.label_text}>DELIVERY METHOD</Label>
            <Left>
              <Radio
                color={'#f0ad4e'}
                selectedColor={'#5cb85c'}
                selected={false}
              />
            </Left>
          </View>
        </Form>
      </ScrollView>
    </View>
  );
};

export default OrderPlace;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: '#FFFEDF',
  },
  margin_vertical_8: {
    marginVertical: 8,
  },
  food_text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    marginVertical: 10,
    color: 'rgb(118,118,118)',
  },
  label_text: {
    fontSize: 12,
    fontWeight: '700',
    color: 'rgb(118,118,118)',
  },
  field_text: {
    fontSize: 13,
    fontWeight: '600',
  },
  form_style: {
    backgroundColor: '#fff',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    elevation: 5,
    marginBottom: 10,
  },
  sub_total_area: {
    flex: 1,
    backgroundColor: 'white',
    marginHorizontal: 7,
    marginVertical: 5,
    borderRadius: 30,
    elevation: 5,
  },
  row_center: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flex_4_start: {
    flex: 4,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  heading_for_total: {
    marginVertical: 10,
    marginHorizontal: 10,
    fontSize: 16,
  },
  flex_3_center: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  price_color: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'rgb(257,90,71)',
  },
  flex_7_start: {
    flex: 7,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    borderColor: 'rgb(257,90,71)',
    borderWidth: 1,
  },
});
