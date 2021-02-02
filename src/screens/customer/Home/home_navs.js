import React,{useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import auth from '@react-native-firebase/auth';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Customer from './home';
import Favourite from '../favourite/fav';
import Cart from '../cart/shopping-cart';
import UserProfile from '../user_profile/user-profile';

const Tab = createBottomTabNavigator();
const {Screen, Navigator} = Tab;

const HomeNavs = ()=> {
    return (
        <Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
  
            if (route.name === 'Customer') {
              iconName = focused ? 'home' : 'home';
            } else if (route.name === 'Favourite') {
              iconName = focused ? 'heart' : 'heart-o';
            } else if (route.name === 'Cart') {
              iconName = focused ? 'shopping-cart' : 'shopping-cart';
            } else if (route.name === 'UserProfile') {
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
        <Screen name="Customer" component={Customer} />
        <Screen name="Favourite" component={Favourite} />
        <Screen name="Cart" component={Cart} />
        <Screen name="UserProfile" component={UserProfile} />
      </Navigator>
    )
}

export default HomeNavs;
