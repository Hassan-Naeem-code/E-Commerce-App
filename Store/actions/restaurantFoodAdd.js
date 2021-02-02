import {RESTAURANT_FOOD_ADD,NOT_AUTHORISE_USER_DISHES,RESTAURANT_ORDERS} from '../constants/actiontypes';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {ToastAndroid} from 'react-native';

export function restaurantFoodAddProcess(food, navigation) {
  return async (dispatch) => {
    await firestore().collection('dishes').add(food);
    ToastAndroid.show('Food Dish Added Successfully', 2000);
    navigation.navigate('Home');
  };
}

export function fecthAllDishes(uid) {
  return async (dispatch) => {
    let dishItem = await firestore()
      .collection('dishes')
      .where('uid', '==', uid)
      .get();
    dishItem.forEach(function (doc) {
      let dish = doc.data();
      dish.id = doc.id;
      dispatch({type: RESTAURANT_FOOD_ADD, payload: dish});
    });
  };
}

export function notAuthouriseDishes(){
  return async (dispatch)=>{
    let dishItem = await firestore()
      .collection('dishes')
      .get();
    dishItem.forEach(function (doc) {
      let dish = doc.data();
      dish.id = doc.id;
      dispatch({type: NOT_AUTHORISE_USER_DISHES, payload: dish});
    });
  }
}

export function fecthAllOrders(uid) {
  return async (dispatch) => {
    let arr = [];
    let dishItem = await firestore()
      .collection('orders')
      .where('uid', '==', uid)
      .get();
    dishItem.forEach(function (doc) {
      let dish = doc.data();
      dish.id = doc.id;
      // let dishes  = ds.collection('order_dishes').where('order_id','==',doc.id).get()
      // let obj = {
      //   order_id: doc.id,
      //   dishes: dishes
      // }
      arr.push(dish);
    });
    dispatch({type: RESTAURANT_ORDERS, payload: arr});
  };
}