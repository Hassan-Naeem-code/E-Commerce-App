import React from 'react';
import {View, Text, Image, TouchableOpacity, ToastAndroid} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useSelector} from 'react-redux';
const Desi_Cards = ({navigation: {navigate}}) => {
  const getState = useSelector(({auth}) => {
    return auth.auth;
  });
  const takeAway = () => {
    navigate('ProductDeatilPage');
  };
  return (
    <View style={{flex: 1}}>
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        <View style={{width: '50%', marginVertical: 8}}>
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
                  uri:
                    'https://www.awesomecuisine.com/wp-content/uploads/2007/10/Chicken-Biryani_resized-500x436.jpg',
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
                    RS.120./
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
                Masala Biryani
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{width: '50%', marginVertical: 8}}>
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 10,
              marginRight: 10,
              backgroundColor: '#fff',
            }}>
            <Image
              source={{
                uri:
                  'https://www.awesomecuisine.com/wp-content/uploads/2007/10/Chicken-Biryani_resized-500x436.jpg',
              }}
              style={{width: '100%', height: 200}}
            />
            <View style={{flexDirection: 'row', marginVertical: 5}}>
              <View style={{flex: 4, alignItems: 'center'}}>
                <Text
                  style={{
                    color: 'rgb(118,118,118)',
                    fontSize: 18,
                    fontWeight: 'bold',
                  }}>
                  RS.120./
                </Text>
              </View>
              <View style={{flex: 4, alignItems: 'center'}}>
                <AntDesign
                  name={'hearto'}
                  size={18}
                  color={'rgb(118,118,118)'}
                />
              </View>
            </View>
            <Text
              style={{
                color: 'rgb(118,118,118)',
                fontSize: 18,
                fontWeight: 'bold',
                marginVertical: 5,
              }}>
              Masala Biryani
            </Text>
          </View>
        </View>

        <View style={{width: '50%', marginVertical: 8}}>
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 10,
              marginRight: 10,
              backgroundColor: '#fff',
            }}>
            <Image
              source={{
                uri:
                  'https://www.awesomecuisine.com/wp-content/uploads/2007/10/Chicken-Biryani_resized-500x436.jpg',
              }}
              style={{width: '100%', height: 200}}
            />
            <View style={{flexDirection: 'row', marginVertical: 5}}>
              <View style={{flex: 4, alignItems: 'center'}}>
                <Text
                  style={{
                    color: 'rgb(118,118,118)',
                    fontSize: 18,
                    fontWeight: 'bold',
                  }}>
                  RS.120./
                </Text>
              </View>
              <View style={{flex: 4, alignItems: 'center'}}>
                <AntDesign
                  name={'hearto'}
                  size={18}
                  color={'rgb(118,118,118)'}
                />
              </View>
            </View>
            <Text
              style={{
                color: 'rgb(118,118,118)',
                fontSize: 18,
                fontWeight: 'bold',
                marginVertical: 5,
              }}>
              Masala Biryani
            </Text>
          </View>
        </View>
        <View style={{width: '50%', marginVertical: 8}}>
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 10,
              marginRight: 10,
              backgroundColor: '#fff',
            }}>
            <Image
              source={{
                uri:
                  'https://cdn.mangobaaz.com/wp-content/uploads/2017/05/18157912_1294116740672986_7244905290129569276_n.jpg',
              }}
              style={{width: '100%', height: 200}}
            />
            <View style={{flexDirection: 'row', marginVertical: 5}}>
              <View style={{flex: 4, alignItems: 'center'}}>
                <Text
                  style={{
                    color: 'rgb(118,118,118)',
                    fontSize: 18,
                    fontWeight: 'bold',
                  }}>
                  RS.120./
                </Text>
              </View>
              <View style={{flex: 4, alignItems: 'center'}}>
                <AntDesign
                  name={'hearto'}
                  size={18}
                  color={'rgb(118,118,118)'}
                />
              </View>
            </View>
            <Text
              style={{
                color: 'rgb(118,118,118)',
                fontSize: 18,
                fontWeight: 'bold',
                marginVertical: 5,
              }}>
              Masala Biryani
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Desi_Cards;
