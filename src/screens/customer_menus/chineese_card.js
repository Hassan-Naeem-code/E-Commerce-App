import React from 'react';
import {View, Text, Image, TouchableOpacity, ToastAndroid} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useSelector} from 'react-redux';
const Chineese_Cards = ({navigation: {navigate}}) => {
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
                    'https://i.insider.com/59b9777c59d82e3f008b4745?width=1100&format=jpeg&auto=webp',
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
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ0BG1-U7HpOE23RAPNAJlCLMOAHKYO4V2Jw&usqp=CAU',
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
                  'https://fthmb.tqn.com/AzejH7JM1Mclws6Wq1kZZ0UFHGo=/chinese-pan-fried-dumplings-694499_dumpling-step-08-8a2fa534bd9a4802b9fafbe3f716a80e.jpg',
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
      </View>
    </View>
  );
};

export default Chineese_Cards;
