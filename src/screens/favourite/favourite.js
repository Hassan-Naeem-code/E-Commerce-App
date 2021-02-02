import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  RefreshControl,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Header from '../customer_menus/main_header';
import auth from '@react-native-firebase/auth';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useSelector, useDispatch} from 'react-redux';
import {
  wishlishtRemoval,
  getAllWishlist,
} from '../../../Store/actions/customer';

const Favourite = () => {
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
        dispatch(getAllWishlist(user.uid));
      }
    });
    wait(1500);
  }, []);

  useEffect(() => {
    auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(getAllWishlist(user.uid));
      }
    });
  }, []);
  const getWishlist = useSelector(({customer}) => {
    return customer.wishlist;
  });
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
    <View style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <Header />
        {getWishlist && getWishlist.length > 0 ? (
          getWishlist.map((item, index) => {
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
                      <Text style={styles.food_text}>{item.dishName}</Text>
                    </TouchableOpacity>
                    <Text style={styles.food_desc}>
                      {item.location}, Pakistan
                    </Text>
                  </View>
                </View>
                <View style={styles.time_area}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('OrderDetails', {data: item});
                    }}>
                    <Text style={styles.time_text}>Delivery </Text>
                    <Text style={styles.time_text}>
                      {item.deliveryTime} min {''}
                      <Ionicons name={'time-sharp'} size={17} />
                    </Text>
                    <Text style={styles.time_text}>Wishlist </Text>
                    <TouchableOpacity
                      onPress={() => {
                        removeWishlisht(index, item.id);
                      }}>
                      <AntDesign
                        name={'heart'}
                        size={25}
                        color={'rgb(255,99,71)'}
                      />
                    </TouchableOpacity>
                  </TouchableOpacity>
                </View>
              </View>
            );
          })
        ) : (
          <View style={styles.emptyBoxWishlist}>
            <Image
              source={require('../../assets/Images/wishlist.png')}
              style={styles.empty_image}
            />
            <Text style={styles.emptyBoxText}>No Item To Show Here.</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default Favourite;
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
    elevation: 5,
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
    flexDirection: 'row',
    justifyContent: 'center',
  },
  time_text: {
    fontSize: 13,
    color: 'rgb(118,118,118)',
    marginVertical: 5,
  },
  emptyBoxWishlist: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center',
  },
  emptyBoxText: {
    fontSize: 22,
    fontFamily: 'Monsterat',
    fontWeight: 'bold',
    marginLeft: 10,
    marginVertical: 10,
    color: 'rgb(118,118,118)',
  },
  empty_image:{
    width: 100, height: 100, borderRadius: 100
  }
});
