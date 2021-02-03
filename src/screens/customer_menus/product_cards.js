import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ToastAndroid,
  Alert,
  StyleSheet,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import auth from '@react-native-firebase/auth';
import {useSelector, useDispatch} from 'react-redux';
import {
  addToWishLish,
  getAllWishlist,
  addToCart,
  wishlishtRemoval,
  minusFromCart,
} from '../../../Store/actions/customer';
let getTrueIndex;
let checkBool = false;
let found = {};
const Product_Cards = ({navigation: {navigate}}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(getAllWishlist(user.uid));
      }
    });
  });
  const getState = useSelector(({auth}) => {
    return auth.auth;
  });
  const getDishes = useSelector(({restaurant}) => {
    return restaurant.tempDishes;
  });
  const getWishlist = useSelector(({customer}) => {
    return customer.wishlist;
  });

  const getCartProduct = useSelector(({customer}) => {
    return customer.cart;
  });

  // Ahmed changes...!
  const [grandTotal, setGrandTotal] = useState(0);

  const calculateAmount = () => {
    let totalAmount = 0;
    for (let i = 0; i < getCartProduct.length; i++) {
      totalAmount = totalAmount + getCartProduct[i].quantity;
    }
    console.log(totalAmount);
    setGrandTotal(totalAmount);
  };

  useEffect(() => {
    calculateAmount();
  }, []);
  // End...!

  useEffect(() => {
    console.log(
      'Get product in the  cart present in the redux is.......................................................................................',
      getCartProduct,
    );
    console.log(
      'Get product in the  wishlisht present in the redux is.......................................................................................',
      getWishlist,
    );
    console.log("get data ............0",getDishes);
  });

  const [check, setCheck] = useState(true);
  const [getIndex, setGetIndex] = useState(0);

  const checkCondition = (data, index) => {
    auth().onAuthStateChanged((user) => {
      if (user) {
        let product = data;
        product.uid = product.uid;
        product.user = user.uid;
        dispatch(addToWishLish(product));
      }
    });
  };

  const removeWishlisht = (index, item) => {
    auth().onAuthStateChanged((user) => {
      let findId = getWishlist.find(function (getId) {
        return getId.id == item;
      });
      const {itemDoc} = findId;
      if (user) {
        dispatch(wishlishtRemoval(index, itemDoc));
      }
    });
  };
  return (
    <View style={styles.conatiner}>
      <View style={styles.inner_row_area}>
        {getDishes.map((item, index) => {
          return (
            <View style={styles.inner_row_product_card} key={index}>
              <View style={styles.inner_row_product_card_area}>
                <TouchableOpacity
                  onPress={() => {
                    navigate('ProductDeatilPage', {productData: item});
                  }}
                  style={styles.width_100}>
                  <Image
                    source={{
                      uri: item.foodImage,
                    }}
                    style={styles.inner_row_product_card_image}
                  />
                </TouchableOpacity>
                <View style={styles.inner_row_second_area}>
                  <View style={styles.inner_row_second_area_separation}>
                    <TouchableOpacity
                      onPress={() => {
                        navigate('ProductDeatilPage', {productData: item});
                      }}>
                      <Text style={styles.inner_row_product_price}>
                        RS. {item.foodPrice}
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={styles.inner_row_product_card_inner_area_seperation}>
                    {getWishlist &&
                    getWishlist.some((el) => el.id === item.id) ? (
                      <TouchableOpacity
                        onPress={() => {
                          removeWishlisht(index, item.id);
                        }}>
                        <AntDesign
                          name={'heart'}
                          size={18}
                          color={'rgb(255,99,71)'}
                        />
                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity
                        onPress={() => {
                          checkCondition(item, index);
                        }}>
                        <AntDesign
                          name={'hearto'}
                          size={18}
                          color={'rgb(118,118,118)'}
                        />
                      </TouchableOpacity>
                    )}
                  </View>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    navigate('ProductDeatilPage', {productData: item});
                  }}>
                  <Text style={styles.inner_row_product_card_name}>
                    {item.dishName}
                  </Text>
                </TouchableOpacity>
                {getCartProduct &&
                getCartProduct.some((el) => el.id === item.id) ? (
                  <View style={styles.areaForPlusMinus}>
                    <View style={styles.firstArea}></View>
                    <View style={styles.secondArea}>
                      <View style={styles.areaForPlusMinus}>
                        <TouchableOpacity
                          onPress={() => {
                            dispatch(minusFromCart(item));
                          }}>
                          <View style={styles.inner_row_product_card_Icon}>
                            <AntDesign
                              size={20}
                              name={'minuscircleo'}
                              color={'rgb(255,91,71)'}
                            />
                          </View>
                        </TouchableOpacity>
                        <View style={styles.inner_row_product_card_icon_text}>
                          <Text style={styles.inner_row_product_grand_amount}>
                            {grandTotal}
                          </Text>
                        </View>
                        <TouchableOpacity
                          onPress={() => {
                            dispatch(addToCart(item));
                          }}>
                          <View style={styles.inner_row_product_orignal_image}>
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
                    style={styles.btn}
                    onPress={() => {
                      dispatch(addToCart(item));
                      found.id = getCartProduct.find((el) => el.id === item.id);
                    }}>
                    <Text style={styles.btnText}>Add To Cart</Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default Product_Cards;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: 'rgb(255,99,71)',
    color: '#fff',
    marginVertical: 10,
    fontSize: 15,
    textAlign: 'center',
    borderRadius: 50,
    padding: 5,
    width: '70%',
  },
  btnText: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '800',
    color: '#fff',
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
  thirdArea: {flex: 1},
  conatiner: {
    flex: 1,
  },
  inner_row_area: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  inner_row_product_card: {
    width: '50%',
    marginVertical: 8,
  },
  inner_row_product_card_area: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#fff',
    elevation: 5,
  },
  width_100: {
    width: '100%',
  },
  inner_row_product_card_image: {
    width: '100%',
    height: 200,
  },
  inner_row_second_area: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  inner_row_second_area_separation: {
    flex: 4,
    alignItems: 'center',
  },
  inner_row_product_price: {
    color: 'rgb(118,118,118)',
    fontSize: 18,
    fontWeight: 'bold',
  },
  inner_row_product_card_inner_area_seperation: {
    flex: 4,
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
  inner_row_product_card_name: {
    color: 'rgb(118,118,118)',
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  inner_row_product_card_Icon: {
    flex: 2,
    alignItems: 'flex-end',
  },
  inner_row_product_card_icon_text: {
    flex: 3,
    alignItems: 'center',
  },
});
