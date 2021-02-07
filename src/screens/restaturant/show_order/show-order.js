import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
} from 'react-native';
import Header from '../home/header';
import auth from '@react-native-firebase/auth';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector, useDispatch} from 'react-redux';
import {fecthAllOrders,fecthAllCarts} from '../../../../Store/actions/restaurantFoodAdd';

const ShowOrder = ({navigation}) => {
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState(false);
  const wait = (time) => {
    setTimeout(() => {
      setRefreshing(false);
    }, time);
  };
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    auth().onAuthStateChanged((user) => {
      if (user) {
        // dispatch(fecthAllOrders(user.uid));
        dispatch(fecthAllCarts());
      }
    });
    wait(1500);
  }, []);

  useEffect(() => {
    auth().onAuthStateChanged((user) => {
      if (user) {
        // dispatch(fecthAllOrders(user.uid));
        dispatch(fecthAllCarts(user.uid));
      }
    });
  }, []);
  const getData = useSelector(({restaurant}) => {
    return restaurant.orders;
  });
  useEffect(() => {
    console.log(getData);
  }, [])
  const getCartData = useSelector(({restaurant})=>{return restaurant.cartorder})
  console.log('Data of orders is here.............................',getCartData)
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        {getCartData && getCartData.length > 0
          ? getCartData.map((item, index) => {
              return (
                <View style={styles.product_card} key={index}>
                  <View style={styles.image_area}>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate('OrderDetails', {data: item});
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
                          navigation.navigate('OrderDetails', {data: item});
                        }}>
                        <Text style={styles.food_text}>
                          {/* {item.fName + ' ' + item.lName} */}
                          {item?.order?.name}
                        </Text>
                      </TouchableOpacity>
                      <Text style={styles.food_desc}>Karachi, Pakistan</Text>
                    </View>
                  </View>
                  <View style={styles.time_area}>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate('OrderDetails', {data: item});
                      }}>
                      <Text style={styles.time_text}>Delivery Time</Text>
                      <Text style={styles.time_text}>
                        {item.deliveryTime} min
                        <Ionicons name={'time-sharp'} size={17} />
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            })
          : null}
      </ScrollView>
    </View>
  );
};

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
    marginVertical: 10,
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
});

export default ShowOrder;
