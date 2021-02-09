import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Customer from '../customer_menus/customer_menu';
import Carts from '../cart/add_cart';
import SecondCarts from '../cart/add_cart';
import Favourite from '../favourite/favourite';
import RestaurantProfile from '../restaturant/user-profile/user-profile';
import RestaurantHome from '../restaturant/home/Homepage';
import RestaurantAddProduct from '../restaturant/upload_product/upload-product';
import ShowOrder from '../restaturant/show_order/show-order';
import ProductDetail from '../restaturant/home/product-detail';
import UserProfile from '../user-profile/user-profile';
import EditProfileCustomer from '../user-profile/edit-profile';
import {useSelector, useDispatch} from 'react-redux';
import EditProfile from '../restaturant/user-profile/edit-profile';
import ProductDeatilPage from '../product_detail_page/product_detail_page';
import OrderForm from '../product_detail_page/order-submission';
import CheckStatus from '../product_detail_page/check-status';
import OrderDetails from '../restaturant/show_order/order-details';
import Order from '../cart/order_place';
import Submit from '../cart/submit';
import {fetchUserInfo} from '../../../Store/actions/auth';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const {Screen, Navigator} = Tab;

const Home = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="RestaurantHome"
        component={RestaurantHome}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const DashBoard = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Customer"
        component={Customer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProductDeatilPage"
        component={ProductDeatilPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OrderForm"
        component={OrderForm}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CheckStatus"
        component={CheckStatus}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const Profile = () => {
  return (
    <Stack.Navigator>
      <Screen
        name="RestaurantProfile"
        component={RestaurantProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const User = () => {
  return (
    <Stack.Navigator>
      <Screen
        name="UserProfile"
        component={UserProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditProfileCustomer"
        component={EditProfileCustomer}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const Orders = () => {
  return (
    <Stack.Navigator>
      <Screen
        name="ShowOrder"
        component={ShowOrder}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OrderDetails"
        component={OrderDetails}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
const Cart = () => {
  return (
    <Stack.Navigator>
      <Screen name="Carts" component={Carts} options={{headerShown: false}} />
      <Stack.Screen
        name="Order"
        component={Order}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Submit"
        component={Submit}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    auth().onAuthStateChanged((user) => {
      if (user) {
        console.log('Auth user.................................', user);
        console.log('Auth user.................................', user.uid);
        dispatch(fetchUserInfo(user.uid));
      }
    });
  }, []);
  const getState = useSelector(({auth}) => {
    return auth.auth;
  });
  return (
    <>
      {getState && getState.roles == 'Customer' ? (
        <Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              if (route.name === 'DashBoard') {
                iconName = focused ? 'home' : 'home';
              } else if (route.name === 'Favourite') {
                iconName = focused ? 'heart' : 'heart-o';
              } else if (route.name === 'Cart') {
                iconName = focused ? 'shopping-cart' : 'shopping-cart';
              } else if (route.name === 'User') {
                iconName = focused ? 'user' : 'user-o';
              }

              // You can return any component that you like here!
              return <FontAwesome name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'rgb(255,99,71)',
            inactiveTintColor: '#000',
            tabStyle: {
              backgroundColor: '#FFFEDF',
              borderColor: '#FFFEDF',
            },
          }}>
          <Screen name="DashBoard" component={DashBoard} />
          <Screen name="Favourite" component={Favourite} />
          <Screen name="Cart" component={Cart} />
          <Screen name="User" component={User} />
        </Navigator>
      ) : (
        <Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home';
              } else if (route.name === 'RestaurantAddProduct') {
                iconName = focused ? 'plus-square' : 'plus-square-o';
              } else if (route.name === 'Orders') {
                iconName = focused ? 'address-card' : 'address-card-o';
              } else if (route.name === 'Profile') {
                iconName = focused ? 'user' : 'user-o';
              }

              // You can return any component that you like here!
              return <FontAwesome name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'rgb(255,99,71)',
            inactiveTintColor: '#000',
            tabStyle: {
              backgroundColor: '#FFFEDF',
              borderColor: '#FFFEDF',
            },
          }}>
          <Screen name="Home" component={Home} />
          <Screen
            name="RestaurantAddProduct"
            component={RestaurantAddProduct}
          />
          <Screen name="Orders" component={Orders} />
          <Screen name="Profile" component={Profile} />
        </Navigator>
      )}
    </>
  );
};

export default HomePage;
