import React from 'react';
// import {Alert} from 'react-native';
// import auth from '@react-native-firebase/auth';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useDispatch, useSelector} from 'react-redux';
// Before Sign Up Screens Starts
import BHomeNavs from '../customer/Home/home_navs';
import BHome from '../customer/Home/home';
import BFavourite from '../customer/favourite/fav';
import BShoppingCart from '../customer/cart/shopping-cart';
import BUserProfile from '../customer/user_profile/user-profile';

// Before Sign Up Screens Ends

// Common Screens Starts
import SignUp from '../signup/signup';
import SignupCommon from '../signup/signup-common';
import Login from '../login/login';

// Common Screens Ends

// Customer After login Screens Starts

import Home from '../home/home_nav';
import UserProfile from '../user-profile/user-profile';
import HomePage from '../home/Homepage';
import Favourite from '../favourite/favourite';
import ProductDeatilPage from '../product_detail_page/product_detail_page';
import OrderForm from '../product_detail_page/order-submission';
import CheckStatus from '../product_detail_page/check-status';

import Customer_Menu from '../customer_menus/customer_menu';
import Banner from '../customer_menus/banner_slider';
import Carousel from '../customer_menus/carousel_menu';
import ChineeseCard from '../customer_menus/chineese_card';
import DesiCard from '../customer_menus/desi_cards';
import Main_Header from '../customer_menus/main_header';
import Carts from '../cart/add_cart';
import Order from '../cart/order_place';
import Submit from '../cart/submit';

// Customer After Login Screens Ends

// Restaurant After Login Screens Starts

import RestaurantProfile from '../restaturant/user-profile/user-profile';
import RestaurantHome from '../restaturant/home/Homepage';
import RestaurantAddProduct from '../restaturant/upload_product/upload-product';
import ShowOrder from '../restaturant/show_order/show-order';
import SubmitCheck from '../restaturant/upload_product/submit_check';
import ProductDeatil from '../restaturant/home/product-detail';
import Orders from '../restaturant/user-profile/orders';
import PersonalInfor from '../restaturant/user-profile/personal-info';
import EditProfile from '../restaturant/user-profile/edit-profile';
import OrderDeatils from '../restaturant/show_order/order-details';
import Header from '../restaturant/home/header';
// Restaurant After Login Screens Ends

const Stack = createStackNavigator();
const {Screen, Navigator} = Stack;
const Navigation = () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name="HomePage"
          component={HomePage}
          options={{headerShown: false}}
        />
        <Screen name="Home" component={Home} options={{headerShown: false}} />
        <Screen name="Login" component={Login} options={{headerShown: false}} />
        <Screen
          name={'SignUp'}
          component={SignUp}
          options={{headerShown: false}}
        />
        <Screen
          name={'SignupCommon'}
          component={SignupCommon}
          options={{headerShown: false}}
        />
        <Screen
          name="Customer_Menu"
          component={Customer_Menu}
          options={{headerShown: false}}
        />
        <Screen
          name="UserProfile"
          component={UserProfile}
          options={{headerShown: false}}
        />
        <Screen
          name="Favourite"
          component={Favourite}
          options={{headerShown: false}}
        />
        <Screen
          name="ProductDeatilPage"
          component={ProductDeatilPage}
          options={{headerShown: false}}
        />
        <Screen
          name="Banner"
          component={Banner}
          options={{headerShown: false}}
        />
        <Screen
          name="Carousel"
          component={Carousel}
          options={{headerShown: false}}
        />
        <Screen
          name="ChineeseCard"
          component={ChineeseCard}
          options={{headerShown: false}}
        />
        <Screen
          name="DesiCard"
          component={DesiCard}
          options={{headerShown: false}}
        />
        <Screen
          name="Main_Header"
          component={Main_Header}
          options={{headerShown: false}}
        />

        <Screen
          name="RestaurantProfile"
          component={RestaurantProfile}
          options={{headerShown: false}}
        />
        <Screen
          name="RestaurantHome"
          component={RestaurantHome}
          options={{headerShown: false}}
        />
        <Screen
          name="RestaurantAddProduct"
          component={RestaurantAddProduct}
          options={{headerShown: false}}
        />
        <Screen
          name="ProductDeatil"
          component={ProductDeatil}
          options={{headerShown: false}}
        />
        <Screen
          name="ShowOrder"
          component={ShowOrder}
          options={{headerShown: false}}
        />
        <Screen
          name="BHomeNavs"
          component={BHomeNavs}
          options={{headerShown: false}}
        />
        <Screen name="BHome" component={BHome} options={{headerShown: false}} />
        <Screen
          name="BFavourite"
          component={BFavourite}
          options={{headerShown: false}}
        />
        <Screen
          name="BShoppingCart"
          component={BShoppingCart}
          options={{headerShown: false}}
        />
        <Screen
          name="BUserProfile"
          component={BUserProfile}
          options={{headerShown: false}}
        />
        <Screen
          name="SubmitCheck"
          component={SubmitCheck}
          options={{headerShown: false}}
        />
         <Screen
          name="Orders"
          component={Orders}
          options={{headerShown: false}}
        />
         <Screen
          name="PersonalInfor"
          component={PersonalInfor}
          options={{headerShown: false}}
        />
        <Screen
          name="EditProfile"
          component={EditProfile}
          options={{headerShown: false}}
        />
        <Screen
          name="CheckStatus"
          component={CheckStatus}
          options={{headerShown: false}}
        />
        <Screen
          name="OrderForm"
          component={OrderForm}
          options={{headerShown: false}}
        />
        <Screen
          name="OrderDeatils"
          component={OrderDeatils}
          options={{headerShown: false}}
        />
         <Screen
          name="Order"
          component={Order}
          options={{headerShown: false}}
        />
         <Screen
          name="Submit"
          component={Submit}
          options={{headerShown: false}}
        />
         <Screen
          name="Carts"
          component={Carts}
          options={{headerShown: false}}
        />
        <Screen
          name="Header"
          component={Header}
          options={{headerShown: false}}
        />
        
      </Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
