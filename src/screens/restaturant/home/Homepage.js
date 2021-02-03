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
import Header from './header';
import auth from '@react-native-firebase/auth';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector, useDispatch} from 'react-redux';
import {fecthAllDishes} from '../../../../Store/actions/restaurantFoodAdd';
import Navigation from '../../routes/navigation';

const Homepage = ({navigation}) => {
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
        dispatch(fecthAllDishes(user.uid));
      }
    });
    wait(1500);
  }, []);

  useEffect(() => {
    auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(fecthAllDishes(user.uid));
      }
    });
  }, []);
  const getData = useSelector(({restaurant}) => {
    return restaurant.dishes;
  });
  console.log('Data is ', getData);
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        {getData && getData.length > 0
          ? getData.map((item, index) => {
              return (
                <View style={styles.product_card} key={index}>
                  <View style={styles.image_area}>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate('ProductDetail', {
                          productData: item,
                        });
                      }}>
                      <Image
                        source={{
                          uri: item.foodImage,
                        }}
                        style={styles.product_image}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.text_area}>
                    <View style={styles.divide_column}>
                      <Text style={styles.food_text}>{item.dishName}</Text>
                      <Text style={styles.food_desc}>{item.location}</Text>
                    </View>
                  </View>
                  <View style={styles.time_area}>
                    <Text style={styles.time_text}>Delivery Time</Text>
                    <Text style={styles.time_text}>
                      {item.deliveryTime} min{' '}
                      <Ionicons name={'time-sharp'} size={17} />
                    </Text>
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

export default Homepage;
