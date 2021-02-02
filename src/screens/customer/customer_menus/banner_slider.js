import React from 'react';
import {View} from 'react-native';
import Slider from 'react-native-hook-image-slider';

const Banner_Slider = () => {
  return (
    <View>
      <Slider
        images={[
          'https://s3.amazonaws.com/ionic-marketplace/food-ordering-restaurant-delivery-app/banner.jpg',
          'https://b.zmtcdn.com/data/menus/502/19084502/0efa91b9ec0a2d535d059297d6e95bd4.jpg',
          'https://i2.wp.com/7ntypes.com/wp-content/uploads/2019/02/Break-Foodish-Font-by-7NTypes_1.png?fit=1500%2C1000&ssl=1',
          'https://beautifulpixels.com/wp-content/uploads/2011/06/foodish-masthead-1280x720.jpg',
        ]}
        
      />
    </View>
  );
};

export default Banner_Slider;
