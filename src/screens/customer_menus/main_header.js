import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {useSelector} from 'react-redux';

const Main_Header = () => {
  const getCartProduct = useSelector(({customer}) => {
    return customer.cart;
  });
  return (
    <View style={styles.container}>
      <View style={styles.inner_row}>
        <View style={styles.inner_row_column_first}>
          <TouchableOpacity>
            <Image
              source={{
                uri:
                  'https://pbs.twimg.com/profile_images/1354964729/Icon512.png',
              }}
              style={styles.first_area_image}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.inner_row_column_second}>
          <TextInput placeholder="Search Here" />
        </View>
        <View style={styles.inner_area_second_search_bar}>
          <TouchableOpacity style={styles.serch_area_color}>
            <Entypo name={'shopping-cart'} size={18} color={'rgb(255,99,71)'} />
            <View style={styles.inner_area_column_third}>
              <Text style={styles.inner_area_column_third_icon}>
                {getCartProduct.length}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Main_Header;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner_row: {
    flexDirection: 'row',
  },
  inner_row_column_first: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inner_row_column_second: {
    flex: 5,
  },
  inner_area_second_search_bar: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  serch_area_color: {
    backgroundColor: '#fff',
    borderRadius: 100,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  inner_area_column_third: {
    position: 'absolute',
    backgroundColor: 'rgb(255,99,71)',
    paddingTop: 2,
    paddingLeft: 4,
    paddingRight: 4,
    paddingBottom: 2,
    borderRadius: 100,
  },
  inner_area_column_third_icon:{
    fontSize: 11, color: 'white'
  },
  first_area_image: {
    width: 30,
    height: 30,
    borderRadius: 50,
  },
});
