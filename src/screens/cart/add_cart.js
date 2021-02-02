import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import Header from '../customer_menus/main_header';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import {
  addToCart,
  minusFromCart,
  deleteFromCart,
} from '../../../Store/actions/customer';

const AddCart = ({navigation}) => {
  const [checkLength, setCheckLength] = useState('');

  // Ahmed changes...!
  const [grandTotal, setGrandTotal] = useState(0);

  const calculateAmount = () => {
    let totalAmount = 0;
    for (let i = 0; i < getCartProduct.length; i++) {
      totalAmount = totalAmount + getCartProduct[i].totalPrice;
    }
    setGrandTotal(totalAmount);
  };

  useEffect(() => {
    calculateAmount();
  });
  // End...!

  const dispatch = useDispatch();
  const getCartProduct = useSelector(({customer}) => {
    return customer.cart;
  });

  return (
    <View style={styles.container}>
      <ScrollView>
        <Header />
        {getCartProduct && getCartProduct.length > 0 ? (
          <>
            {/*Ahmed condition  */}
            {getCartProduct && getCartProduct.length > 0 ? (
              <View style={styles.main_area_for_total}>
                <View style={styles.row_center}>
                  <View style={styles.flex_4_start}>
                    <Text style={styles.main_heading_total}>Sub Total:-</Text>
                  </View>
                  <View style={styles.flex_3_center}>
                    <Text style={styles.total_price_font}>
                      RS. {grandTotal}
                    </Text>
                  </View>
                </View>
                <View style={styles.row_center}>
                  <View style={styles.flex_4_start}>
                    <Text style={styles.main_heading_total}>
                      Delivery Charges:-
                    </Text>
                  </View>
                  <View style={styles.flex_3_center}>
                    <Text style={styles.total_price_font}>RS.120</Text>
                  </View>
                </View>
                <View style={styles.row_center}>
                  <View style={styles.flex_7_start}></View>
                </View>
                <View style={styles.row_center}>
                  <View style={styles.flex_4_start}>
                    <Text style={styles.main_heading_total}>
                      Final Charges:-{' '}
                    </Text>
                  </View>
                  <View style={styles.flex_3_center}>
                    <Text style={styles.total_price_font}>
                      RS. {grandTotal + 120}
                    </Text>
                  </View>
                </View>
              </View>
            ) : null}
            {getCartProduct.map((item, index) => {
              return (
                <View style={styles.product_card} key={index}>
                  <View style={styles.image_area}>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate('ProductDetail', {data: item});
                      }}>
                      <Image
                        source={{uri: item.foodImage}}
                        style={styles.product_image}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.text_area}>
                    <View style={styles.divide_column}>
                      <TouchableOpacity
                        onPress={() => {
                          navigation.navigate('ProductDetail');
                        }}>
                        <Text style={styles.food_text}>{item.dishName}</Text>
                      </TouchableOpacity>
                      <Text style={styles.food_desc}>{item.location}</Text>
                      <Text style={styles.time_text}>Delivery Time</Text>
                      <Text style={styles.time_text}>
                        {item.deliveryTime} min
                        <Ionicons name={'time-sharp'} size={17} />
                      </Text>
                    </View>
                  </View>
                  <View style={styles.time_area}>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate('ProductDetail');
                      }}>
                      <Text style={styles.time_text_second}>Quantity:</Text>
                      <View style={styles.areaForPlusMinus}>
                        <View style={styles.firstArea}></View>
                        <View style={styles.secondArea}>
                          <View style={styles.areaForPlusMinus}>
                            <TouchableOpacity
                              onPress={() => {
                                dispatch(minusFromCart(item));
                              }}>
                              <View style={{flex: 2, alignItems: 'flex-end'}}>
                                <AntDesign
                                  size={20}
                                  name={'minuscircleo'}
                                  color={'rgb(255,91,71)'}
                                />
                              </View>
                            </TouchableOpacity>
                            <View style={styles.flex_3_center}>
                              <Text style={styles.font_for_item_quantity}>
                                {item.quantity}
                              </Text>
                            </View>
                            <TouchableOpacity
                              onPress={() => {
                                dispatch(addToCart(item));
                              }}>
                              <View style={styles.flex_2_start}>
                                <AntDesign
                                  size={20}
                                  name={'pluscircleo'}
                                  color={'rgb(255,91,71)'}
                                />
                              </View>
                            </TouchableOpacity>
                          </View>
                        </View>
                        <View style={styles.thirdArea}></View>
                      </View>
                      <Text style={styles.time_text_second}>Delete</Text>
                      <TouchableOpacity
                        onPress={() => {
                          dispatch(deleteFromCart(item));
                        }}>
                        <AntDesign
                          name={'delete'}
                          size={20}
                          color={'red'}
                          style={styles.icon_style}
                        />
                      </TouchableOpacity>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            })}
          </>
        ) : (
          <View style={styles.flex_1_center}>
            <Image
              source={require('../../assets/Images/empty-cart.png')}
              style={styles.empty_page_image}
            />
            <Text style={styles.food_text}>No data to show</Text>
          </View>
        )}
      </ScrollView>
      {getCartProduct && getCartProduct.length > 0 ? (
        <View style={styles.flex_1_flex_end}>
          <TouchableOpacity
            style={styles.btn_for_checkOut}
            onPress={() => {
              navigation.navigate('Order');
            }}>
            <Text style={styles.btn_text_for_checkout}>
              <AntDesign name={'shoppingcart'} size={22} color={'#fff'} />{' '}
              CHECKOUT
            </Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
};

export default AddCart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFEDF',
  },
  food_text: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
    marginVertical: 10,
    color: 'rgb(118,118,118)',
  },
  food_desc: {
    fontSize: 13,
    color: 'rgb(118,118,118)',
    fontStyle: 'italic',
    fontWeight: '700',
    marginLeft: 10,
    marginVertical: 4,
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
    height: 107,
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
  time_text_second: {
    fontSize: 13,
    color: 'rgb(118,118,118)',
    marginLeft: 10,
    marginTop: 5,
  },
  time_text: {
    fontSize: 13,
    color: 'rgb(118,118,118)',
    marginLeft: 10,
  },
  areaForPlusMinus: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 3,
  },
  firstArea: {
    flex: 1,
  },
  secondArea: {flex: 5},
  thirdArea: {flex: 1},
  main_area_for_total: {
    flex: 1,
    backgroundColor: 'white',
    marginHorizontal: 7,
    marginVertical: 5,
    borderRadius: 30,
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
  main_heading_total: {
    marginVertical: 10,
    marginHorizontal: 10,
    fontSize: 16,
  },
  flex_3_center: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  total_price_font: {
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
  font_for_item_quantity: {
    fontSize: 15,
    color: 'rgb(118,118,118)',
  },
  flex_2_start: {
    flex: 2,
    alignItems: 'flex-start',
  },
  icon_style: {
    textAlign: 'center',
    marginTop: 7,
  },
  flex_1_center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  empty_page_image: {
    width: 145,
    height: 130,
    borderRadius: 40,
  },
  flex_1_flex_end: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  btn_for_checkOut: {
    width: '100%',
    height: 40,
    backgroundColor: 'rgb(255,90,71)',
    marginTop: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn_text_for_checkout: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
