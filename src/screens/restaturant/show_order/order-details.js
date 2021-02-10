import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import Header from '../home/header';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'; 
import {useSelector,useDispatch} from 'react-redux';

const orderDetails = ({route, navigation}) => {
  const {data} = route.params;
  const {order} = data;
  console.log('Data of previous screen is...........',data);
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
                  source={require('../../../assets/Images/cook.png')}
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
                  <Text style={styles.titleStyle}>{data.dishName}</Text>
                </View>
                <View style={styles.flex_2_center}></View>
              </View>
              <ScrollView>
                <View style={styles.area_for_donor_card}>
                  <View style={styles.container}>
                    <View style={styles.imageContainer}>
                      <Image
                        source={{
                          uri: data.foodImage,
                        }}
                        style={styles.coverImage}
                      />
                    </View>
                  </View>
                  <View style={styles.area_for_donor_card_detail}>
                    <View style={styles.inner_view_under_second_view}>
                      <View style={styles.flex_2}>
                        <Image
                          source={require('../../../assets/Images/cook.png')}
                          style={{width: '70%', height: 60, borderRadius: 100}}
                        />
                      </View>
                      <View style={styles.flex_3}>
                        <View style={styles.flex_row}>
                          <View style={styles.flex_7}>
                            <Text style={styles.nameStyle}>
                              {order.name}
                            </Text>
                          </View>
                        </View>
                      </View>
                      <View style={styles.flex_2_center}>
                        <Text style={styles.bloodStyle}>
                          <MaterialCommunityIcon
                            name={'food'}
                            size={35}
                            color={'white'}
                          />
                        </Text>
                      </View>
                    </View>
                  </View>

                  <View style={styles.area_for_donor_card_detail}>
                    <View style={styles.inner_view_under_second_view}>
                      <View style={styles.flex_2}>
                        <Image
                          source={require('../../../assets/Images/cook.png')}
                          style={{width: '70%', height: 60, borderRadius: 100}}
                        />
                      </View>
                      <View style={styles.flex_3}>
                        <View style={styles.flex_row}>
                          <View style={styles.flex_7}>
                            <Text style={styles.numberStyle}>
                              {order.address}
                            </Text>
                          </View>
                        </View>
                      </View>
                      <View style={styles.flex_2_center}>
                        <Text style={styles.bloodStyle}>
                          <MaterialCommunityIcon
                            name={'food'}
                            size={35}
                            color={'white'}
                          />
                        </Text>
                      </View>
                    </View>
                  </View>
                  
                  <View style={styles.area_for_donor_card_detail}>
                    <View style={styles.inner_view_under_second_view}>
                      <View style={styles.flex_2}>
                        <Image
                          source={require('../../../assets/Images/cook.png')}
                          style={{width: '70%', height: 60, borderRadius: 100}}
                        />
                      </View>
                      <View style={styles.flex_3}>
                        <View style={styles.flex_row}>
                          <View style={styles.flex_7}>
                            <Text style={styles.numberStyle}>
                              {order.number}
                            </Text>
                          </View>
                        </View>
                      </View>
                      <View style={styles.flex_2_center}>
                        <Text style={styles.bloodStyle}>
                          <MaterialCommunityIcon
                            name={'food'}
                            size={35}
                            color={'white'}
                          />
                        </Text>
                      </View>
                    </View>
                  </View>
                  
                  <View style={styles.area_for_donor_card_detail}>
                    <View style={styles.inner_view_under_second_view}>
                      <View style={styles.flex_2}>
                        <Image
                         source={require('../../../assets/Images/cook.png')}
                          style={{width: '70%', height: 60, borderRadius: 100}}
                        />
                      </View>
                      <View style={styles.flex_3}>
                        <View style={styles.flex_row}>
                          <View style={styles.flex_7}>
                            <Text style={styles.numberStyle}>
                              {order.email}
                            </Text>
                          </View>
                        </View>
                      </View>
                      <View style={styles.flex_2_center}>
                        <Text style={styles.bloodStyle}>
                          <MaterialCommunityIcon
                            name={'food'}
                            size={35}
                            color={'white'}
                          />
                        </Text>
                      </View>
                    </View>
                  </View>
                  
                  <View style={styles.area_for_donor_card_detail}>
                    <View style={styles.inner_view_under_second_view}>
                      <View style={styles.flex_2}>
                        <Image
                          source={require('../../../assets/Images/cook.png')}
                          style={{width: '70%', height: 60, borderRadius: 100}}
                        />
                      </View>
                      <View style={styles.flex_3}>
                        <View style={styles.flex_row}>
                          <View style={styles.flex_7}>
                            <Text style={styles.numberStyle}>
                             Charges: Rs. {data.totalPrice} 
                            </Text>
                          </View>
                        </View>
                      </View>
                      <View style={styles.flex_2_center}>
                        <Text style={styles.bloodStyle}>
                          <MaterialCommunityIcon
                            name={'food'}
                            size={35}
                            color={'white'}
                          />
                        </Text>
                      </View>
                    </View>
                  </View>
                  
                  <View style={styles.area_for_donor_card_detail}>
                    <View style={styles.inner_view_under_second_view}>
                      <View style={styles.flex_2}>
                        <Image
                         source={require('../../../assets/Images/cook.png')}
                          style={{width: '70%', height: 60, borderRadius: 100}}
                        />
                      </View>
                      <View style={styles.flex_3}>
                        <View style={styles.flex_row}>
                          <View style={styles.flex_7}>
                            <Text style={styles.numberStyle}>
                             Delivery Time: {data.deliveryTime} min
                            </Text>
                          </View>
                        </View>
                      </View>
                      <View style={styles.flex_2_center}>
                        <Text style={styles.bloodStyle}>
                          <MaterialCommunityIcon
                            name={'food'}
                            size={35}
                            color={'white'}
                          />
                        </Text>
                      </View>
                    </View>
                  </View>

                  <View style={styles.area_for_donor_card_detail}>
                    <View style={styles.inner_view_under_second_view}>
                      <View style={styles.flex_2}>
                        <Image
                          source={require('../../../assets/Images/cook.png')}
                          style={{width: '70%', height: 60, borderRadius: 100}}
                        />
                      </View>
                      <View style={styles.flex_3}>
                        <View style={styles.flex_row}>
                          <View style={styles.flex_7}>
                            <Text style={styles.numberStyle}>
                             Food Quantity: {data.quantity}
                            </Text>
                          </View>
                        </View>
                      </View>
                      <View style={styles.flex_2_center}>
                        <Text style={styles.bloodStyle}>
                          <MaterialCommunityIcon
                            name={'food'}
                            size={35}
                            color={'white'}
                          />
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </ScrollView>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};
export default orderDetails;

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
    alignItems: 'center',
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
