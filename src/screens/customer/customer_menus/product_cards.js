import React from 'react';
import {View, Text, Image, TouchableOpacity, ToastAndroid} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useSelector} from 'react-redux';
const Product_Cards = ({navigation: {navigate}}) => {
  const getState = useSelector(({auth}) => {
    return auth.auth;
  });
  const getDishes = useSelector(({restaurant}) => {
    return restaurant.tempDishes;
  });
  const takeAway = () => {
    navigate('BFavourite');
  };
  console.log('dats dvsdnvkjsdbkvnv0',getDishes);
  return (
    <View style={{flex: 1}}>
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        {getDishes.map((item, index) => {
          return(

            <View style={{width: '50%', marginVertical: 8}} key={index}>
                <View
                  style={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: 10,
                    marginRight: 10,
                    backgroundColor: '#fff',
                  }}>
                  <TouchableOpacity onPress={takeAway} style={{width: '100%'}}>
                    <Image
                      source={{
                        uri: item.foodImage,
                      }}
                      style={{width: '100%', height: 200}}
                    />
                  </TouchableOpacity>
                  <View style={{flexDirection: 'row', marginVertical: 5}}>
                    <View style={{flex: 4, alignItems: 'center'}}>
                      <TouchableOpacity onPress={takeAway}>
                        <Text
                          style={{
                            color: 'rgb(118,118,118)',
                            fontSize: 18,
                            fontWeight: 'bold',
                          }}>
                          RS. {item.foodPrice} ./
                        </Text>
                      </TouchableOpacity>
                    </View>
                    <View style={{flex: 4, alignItems: 'center'}}>
                      <TouchableOpacity>
                        <AntDesign
                          name={'hearto'}
                          size={18}
                          color={'rgb(118,118,118)'}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <TouchableOpacity onPress={takeAway}>
                    <Text
                      style={{
                        color: 'rgb(118,118,118)',
                        fontSize: 18,
                        fontWeight: 'bold',
                        marginVertical: 5,
                      }}>
                      {item.dishName}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
          )
            })
          }
      </View>
    </View>
  );
};

export default Product_Cards;
