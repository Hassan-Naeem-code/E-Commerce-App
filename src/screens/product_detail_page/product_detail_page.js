import React, {useState} from 'react';
import {
  View,
  Text,
  ToastAndroid,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  RefreshControl,
  Image,
} from 'react-native';
import Header from '../customer_menus/main_header';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';
import {signOut} from '../../../Store/actions/auth';

const ProductDetailPage = ({navigation, route}) => {
  const {productData} = route.params;
  console.log('Product data is:', productData);
  const dispatch = useDispatch();

  const LogOutUser = () => {
    dispatch(signOut(navigation));
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <Header />
        <View style={styles.firstSection}>
          <View style={styles.firstSectionArea}>
            <View style={styles.innerPartOne}>
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}>
                <AntDesign
                  name={'arrowleft'}
                  size={30}
                  color={'rgb(118,118,118)'}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.innerPartLeft}></View>
            <View style={styles.innerPartTwo}>
              <TouchableOpacity
                style={styles.logoutBtnCircle}
                onPress={LogOutUser}>
                <AntDesign name={'logout'} size={18} color={'rgb(255,99,71)'} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.secondSection}>
          <Image
            source={{
              uri: productData.foodImage,
            }}
            style={styles.productImage}
          />
          <ScrollView>
            <View style={styles.row_center}>
              <View style={styles.flex_2_center}>
                <Text style={styles.productPrice}>
                  RS.{productData.foodPrice}/
                </Text>
              </View>
              <View style={{flex: 2}}></View>
              <View
                style={styles.flex_3_center}>
                <TouchableOpacity
                  style={styles.buyNowBtn}
                  onPress={() => {
                    navigation.navigate('OrderForm', {dataOfFood: productData});
                  }}>
                  <Text style={styles.btnText}>Buy Now</Text>
                </TouchableOpacity>
              </View>
            </View>
            <Text style={styles.productHeading}>{productData.dishName}</Text>
            <Text style={styles.prodcutDetailHeading}>
              {productData.foodDesc}
            </Text>
          </ScrollView>
        </View>
        <View style={styles.thirdSection}>
          <AntDesign name={'copyright'} size={20} color={'black'} />
          <Text>Copyright All Rights Reserved 2021.</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductDetailPage;

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
  firstSection: {
    flex: 1,
    backgroundColor: '#FFFEDF',
  },
  firstSectionArea: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerPartOne: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 3,
    // marginVertical: 10,
  },
  innerPartLeft: {
    flex: 5,
  },
  innerPartTwo: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 3,
    // marginVertical: 10,
    position: 'relative',
  },
  logoutBtnCircle: {
    backgroundColor: '#fff',
    borderRadius: 100,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  secondSection: {
    flex: 7,
    backgroundColor: '#FFFEDF',
    padding: 30,
  },
  productImage: {
    width: '100%',
    height: 200,
    borderRadius: 15,
  },
  productHeading: {
    marginVertical: 15,
    marginHorizontal: 8,
    color: 'rgb(118,118,118)',
    fontSize: 27,
    fontWeight: '700',
  },
  prodcutDetailHeading: {
    fontSize: 15,
    fontWeight: '500',
    color: 'rgb(118,118,118)',
    marginVertical: 2,
    marginHorizontal: 5,
  },
  productPrice: {
    fontSize: 21,
    fontWeight: '700',
    color: 'rgb(118,118,118)',
    marginVertical: 2,
    marginHorizontal: 5,
  },
  selectionArea: {
    flex: 1,
    marginVertical: 4,
    marginHorizontal: 4,
  },
  actionHeading: {
    marginVertical: 15,
    marginHorizontal: 8,
    color: 'rgb(118,118,118)',
    fontSize: 18,
    fontWeight: '700',
  },
  areaUnderActionHeading: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  firstAreaUnderHeading: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionBtn: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 10,
    fontSize: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  secondAreaFirstHeading: {
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  secondAreaSecondHeading: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondAreaUnderHeading: {
    flex: 2,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  areaLeftEmpty: {
    flex: 1,
  },
  thirdAreaLeftEmpty: {
    flex: 3,
  },
  thirdSection: {
    flex: 1,
    backgroundColor: '#FFFEDF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buyNowBtn: {
    backgroundColor: 'rgb(255,99,71)',
    color: '#fff',
    borderRadius: 20,
    paddingTop: 9,
    paddingBottom: 9,
    paddingLeft: 30,
    paddingRight: 30,
    marginTop: 5,
  },
  btnText: {
    color: '#fff',
  },
  row_center: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flex_2_center: {
    flex: 2,
    justifyContent: 'center',
  },
  flex_3_center:{
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
