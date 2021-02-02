import React,{useState,useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView, RefreshControl} from 'react-native';
import Header from '../customer_menus/main_header';
import Banner from '../customer_menus/banner_slider';
import MixCards from '../customer_menus/product_cards';
import DesiCards from '../customer_menus/desi_cards';
import ChineeseCards from '../customer_menus/chineese_card';
import Carousel from '../customer_menus/carousel_menu';
import {useDispatch,useSelector} from 'react-redux';
import {notAuthouriseDishes} from '../../../../Store/actions/restaurantFoodAdd';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState(false);
  const wait = (time) => {
    setTimeout(() => {
      setRefreshing(false);
    }, time);
  };
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    dispatch(notAuthouriseDishes());
    wait(1500);
  }, []);
  useEffect(()=>{
    dispatch(notAuthouriseDishes());
  },[]);
  const getDishes = useSelector(({restaurant}) => {
    return restaurant.tempDishes;
  });

  return (
    <View style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <Header />
        <Banner />
        <Text style={styles.food_text}>MIX FOOD</Text>
        <MixCards navigation={navigation} data = {getDishes} />
        <Text style={styles.food_text}>OUR MONTHLY HIGHLIGHTED FOODS</Text>
        <Carousel />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFEDF',
  },
  food_text: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 10,
    marginVertical: 10,
    color: 'rgb(118,118,118)',
  },
});
