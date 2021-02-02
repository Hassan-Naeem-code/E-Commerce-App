import React from 'react';
import {View, Text, StyleSheet, ScrollView, RefreshControl} from 'react-native';
import Header from './main_header';
import Banner from './banner_slider';
import MixCards from './product_cards';
import DesiCards from './desi_cards';
import ChineeseCards from './chineese_card';
import Carousel from './carousel_menu';
const Customer_Menu = ({navigation}) => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, []);
  return (
    <View style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <Header />
        <Banner />
        <Text style={styles.food_text}>MIX FOOD</Text>
        <MixCards navigation={navigation} />
        <Text style={styles.food_text}>DESI FOOD</Text>
        <DesiCards navigation={navigation} />
        <Text style={styles.food_text}>CHINEESE FOOD</Text>
        <ChineeseCards navigation={navigation} />
        <Text style={styles.food_text}>OUR MONTHLY HIGHLIGHTED FOODS</Text>
        <Carousel />
      </ScrollView>
    </View>
  );
};

export default Customer_Menu;

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
