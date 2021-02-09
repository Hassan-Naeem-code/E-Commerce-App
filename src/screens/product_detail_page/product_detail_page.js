import React, {useState} from 'react';
import {
  View,
  Text,
  ToastAndroid,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  RefreshControl,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
import Header from '../customer_menus/main_header';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch,useSelector} from 'react-redux';
import {signOut} from '../../../Store/actions/auth';
import {addToCart, minusFromCart} from '../../../Store/actions/customer';
let found = {};
const ProductDetailPage = ({navigation, route}) => {
  const {productData} = route.params;
  console.log('Product data is:.....................', productData);
  const dispatch = useDispatch();
  const [grandTotal, setGrandTotal] = useState(0);
  const getCartProduct = useSelector(({customer}) => {
    return customer.cart;
  });

  const LogOutUser = () => {
    dispatch(signOut(navigation));
  };
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <Header navigation={navigation} />
        <View style={styles.second_container}>
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
                <View style={styles.flex_2_center}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.goBack();
                    }}>
                    <MaterialCommunityIcon
                      name={'keyboard-backspace'}
                      size={27}
                      color={'white'}
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.flex_3_center}>
                  <Text style={styles.titleStyle}>Food Detail </Text>
                </View>
                <View style={styles.flex_2_center}></View>
              </View>
              <ScrollView>
                <View style={styles.area_for_donor_card}>
                  <View style={styles.container}>
                    <View style={styles.imageContainer}>
                      <Image
                        source={{
                          uri: productData.foodImage,
                        }}
                        style={styles.coverImage}
                      />
                    </View>
                  </View>
                  <View style={styles.row_center}>
                    <View style={styles.flex_2_center}>
                      <Text style={styles.productPrice}>
                        RS.{productData.foodPrice}/
                      </Text>
                    </View>
                    <View style={{flex: 2}}></View>
                    <View style={styles.flex_3_center}>
                      {getCartProduct &&
                      getCartProduct.some((el) => el.id === productData.id) ? (
                        <View style={styles.areaForPlusMinus}>
                          <View style={styles.firstArea}></View>
                          <View style={styles.secondArea}>
                            <View style={styles.areaForPlusMinus}>
                              <TouchableOpacity
                                onPress={() => {
                                  dispatch(minusFromCart(productData));
                                }}>
                                <View
                                  style={styles.inner_row_product_card_Icon}>
                                  <AntDesign
                                    size={20}
                                    name={'minuscircleo'}
                                    color={'rgb(255,91,71)'}
                                  />
                                </View>
                              </TouchableOpacity>
                              <View
                                style={styles.inner_row_product_card_icon_text}>
                                <Text
                                  style={styles.inner_row_product_grand_amount}>
                                  {getCartProduct.find(
                                    (pro) => pro.id === productData.id,
                                  )
                                    ? getCartProduct.find(
                                        (pro) => pro.id === productData.id,
                                      ).quantity
                                    : grandTotal}
                                </Text>
                              </View>
                              <TouchableOpacity
                                onPress={() => {
                                  dispatch(addToCart(productData));
                                }}>
                                <View
                                  style={
                                    styles.inner_row_product_orignal_image
                                  }>
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
                      ) : (
                        <TouchableOpacity
                          style={styles.btn_cart}
                          onPress={() => {
                            dispatch(addToCart(productData));
                            found.id = getCartProduct.find(
                              (el) => el.id === productData.id,
                            );
                          }}>
                          <Text style={styles.btnText}>Add To Cart</Text>
                        </TouchableOpacity>
                      )}
                    </View>
                  </View>
                  <Text style={styles.productHeading}>
                    {productData.dishName}
                  </Text>
                  <Text style={styles.prodcutDetailHeading}>
                    {productData.foodDesc}
                  </Text>
                  <TouchableOpacity
                        style={styles.buyNowBtn}
                        onPress={() => {
                          navigation.navigate('OrderForm', {
                            dataOfFood: productData,
                          });
                        }}>
                        <Text style={styles.btnText}>Buy Now</Text>
                      </TouchableOpacity>
                </View>
              </ScrollView>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default ProductDetailPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFEDF',
  },
  second_container: {
    flex: 12,
    backgroundColor: '#FFFEDF',
  },
  food_text: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 10,
    marginVertical: 10,
    color: 'rgb(118,118,118)',
  },
  firstSection: {
    flex: 1,
    backgroundColor: '#FFFEDF',
  },
  firstSectionArea: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerPartOne: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 3,
    // marginVertical: 10,
  },
  innerPartLeft: {
    flex: 5,
  },
  innerPartTwo: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 3,
    // marginVertical: 10,
    position: 'relative',
  },
  logoutBtnCircle: {
    backgroundColor: '#fff',
    borderRadius: 100,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  secondSection: {
    flex: 7,
    backgroundColor: '#FFFEDF',
    padding: 30,
  },
  productImage: {
    width: '100%',
    height: 200,
    borderRadius: 15,
  },
  productHeading: {
    marginVertical: 15,
    marginHorizontal: 8,
    color: 'rgb(118,118,118)',
    fontSize: 27,
    fontWeight: '700',
  },
  prodcutDetailHeading: {
    fontSize: 15,
    fontWeight: '500',
    color: 'rgb(118,118,118)',
    marginVertical: 2,
    marginHorizontal: 5,
  },
  productPrice: {
    fontSize: 21,
    fontWeight: '700',
    color: 'rgb(118,118,118)',
    marginVertical: 2,
    marginHorizontal: 5,
  },
  selectionArea: {
    flex: 1,
    marginVertical: 4,
    marginHorizontal: 4,
  },
  actionHeading: {
    marginVertical: 15,
    marginHorizontal: 8,
    color: 'rgb(118,118,118)',
    fontSize: 18,
    fontWeight: '700',
  },
  areaUnderActionHeading: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  firstAreaUnderHeading: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionBtn: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 10,
    fontSize: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  secondAreaFirstHeading: {
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  secondAreaSecondHeading: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondAreaUnderHeading: {
    flex: 2,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  areaLeftEmpty: {
    flex: 1,
  },
  thirdAreaLeftEmpty: {
    flex: 3,
  },
  thirdSection: {
    flex: 1,
    backgroundColor: '#FFFEDF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buyNowBtn: {
    backgroundColor: '#FF6347',
    color: '#fff',
    borderRadius: 20,
    paddingTop: 9,
    paddingBottom: 9,
    paddingLeft: 30,
    paddingRight: 30,
    marginTop: 5,
    alignItems:'center',
  },
  btnText: {
    color: '#fff',
  },
  row_center: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flex_2_center: {
    flex: 2,
    justifyContent: 'center',
  },
  flex_3_center: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  nameStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  numberStyle: {
    fontSize: 16,
    fontWeight: '900',
    color: 'white',
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
    backgroundColor: '#FF6347',
    elevation: 5,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  second_view: {
    flex: 1,
    backgroundColor: '#FFFEDF',
    marginBottom: 25,
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
    backgroundColor: 'white',
    padding: 10,
  },
  area_for_donor_card_detail: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF6347',
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
  },
  main_image: {
    width: '100%',
    height: 170,
  },
  login_image: {
    width: '60%',
    height: 150,
  },
  w_100: {
    width: '100%',
  },
  btn_cart: {
    backgroundColor: '#FF6347',
    borderRadius: 25,
    width: '70%',
    padding: 13,
    marginVertical: 15,
  },
  btn: {
    backgroundColor: '#FF6347',
    borderRadius: 25,
    width: '50%',
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
    color: '#FF6347',
    fontSize: 19,
    fontWeight: 'bold',
  },
  color_white: {
    color: 'white',
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
  flex_2_start: {
    flex: 2,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
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
  areaForPlusMinus: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 7,
  },
  firstArea: {
    flex: 1,
  },
  secondArea: {flex: 5},
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
    height: 200,
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
  inner_row_product_card_Icon: {
    flex: 2,
    alignItems: 'flex-end',
  },
  inner_row_product_card_icon_text: {
    flex: 3,
    alignItems: 'center',
  },
  inner_row_product_grand_amount: {
    fontSize: 15,
    color: 'rgb(118,118,118)',
  },
  inner_row_product_orignal_image: {
    flex: 2,
    alignItems: 'flex-start',
  },
});
