import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

const CheckStatus = ({route, navigation}) => {
  const {time} = route.params;
  console.log('TIme is', time);
  let getTime = Number(time);
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <View style={styles.second_container}>
          <View style={styles.second_view}>
            <View style={styles.inner_view_under_second_view}>
              <View style={styles.empty_view}></View>
              <View style={styles.image_view}>
                <Image
                  source={require('../../assets/Images/cook.png')}
                  style={styles.main_image}
                />
              </View>
              <View style={styles.empty_view}></View>
            </View>
          </View>
          <View style={styles.centerContentStyle}>
            <View style={styles.main_view}>
              <View style={styles.inner_view_under_second_view_margin}>
                <View style={styles.flex_7}>
                  <Text style={styles.titleStyle}>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.popToTop();
                      }}>
                      <Text style={styles.titleStyle}>
                        GO BACK TO HOME{' '}
                        <Entypo name={'home'} size={18} color={'#fff'} />
                      </Text>
                    </TouchableOpacity>{' '}
                  </Text>
                </View>
                {/* <View style={styles.flex_2_center}></View> */}
              </View>
              <ScrollView>
                <View style={styles.area_for_donor_card}>
                  <View style={styles.container}>
                    <View style={styles.imageContainer}>
                      <Image
                        source={require('../../assets/Images/source.gif')}
                        style={styles.coverImage}
                      />
                    </View>
                  </View>
                  <Text style={styles.food_text}>
                    Your Food Is been Preparing And Will Be Delivered In:
                  </Text>
                  <Text style={styles.time_text}>{time} Minutes</Text>
                </View>
              </ScrollView>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};
export default CheckStatus;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFEDF',
  },
  food_text: {
    fontSize: 14,
    fontWeight: 'bold',
    marginVertical: 10,
    color: 'rgb(118,118,118)',
  },
  time_text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 2,
    marginBottom: 22,
    textAlign: 'center',
    color: 'rgb(255,99,71)',
  },
  second_container: {
    flex: 12,
    backgroundColor: '#FFFEDF',
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
    backgroundColor: '#FF6347',
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
  flex_3_center: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  nameStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  numberStyle: {
    fontSize: 16,
    fontWeight: '900',
    color: 'white',
  },
  bloodStyle: {
    fontSize: 16,
    fontWeight: '900',
  },
  centerContentStyle: {
    flex: 3,
    flexDirection: 'row',
    paddingHorizontal: 15,
  },
  main_view: {
    flex: 3,
    backgroundColor: '#FF6347',
    elevation: 5,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  second_view: {
    flex: 1,
    backgroundColor: '#FFFEDF',
    marginVertical: 15,
  },
  inner_view_under_second_view: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inner_view_under_second_view_margin: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  area_for_donor_card: {
    backgroundColor: 'white',
    padding: 10,
  },
  area_for_donor_card_detail: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF6347',
    padding: 10,
    borderRadius: 10,
    elevation: 5,
    marginVertical: 5,
  },
  empty_view: {
    flex: 2,
  },
  image_view: {
    flex: 3,
  },
  main_image: {
    width: '100%',
    height: 170,
  },
  login_image: {
    width: '60%',
    height: 150,
  },
  w_100: {
    width: '100%',
  },
  btn: {
    backgroundColor: '#FF6347',
    borderRadius: 25,
    width: '50%',
    padding: 13,
    marginVertical: 15,
  },
  btn_text: {
    color: 'white',
    fontSize: 15,
    fontWeight: '900',
    textAlign: 'center',
  },
  route_text: {
    color: '#FF6347',
    fontSize: 19,
    fontWeight: 'bold',
  },
  color_white: {
    color: 'white',
    fontSize: 15,
    fontWeight: '800',
  },
  flex_5_center: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flex_3_center: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flex_2_center: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flex_2_start: {
    flex: 2,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  flex_2: {
    flex: 2,
  },
  flex_3: {
    flex: 3,
  },
  flex_7: {
    flex: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flex_row: {
    flexDirection: 'row',
  },
  firstArea: {
    flex: 1,
    backgroundColor: 'black',
  },
  secondArea: {
    flex: 5,
    backgroundColor: '#FFFEDF',
  },
  innerAreaOfSecond: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 7,
  },
  thirdArea: {
    flex: 1,
    backgroundColor: 'green',
  },
  imageContainer: {
    position: 'relative',
  },
  coverImage: {
    width: '100%',
    height: 300,
    borderRadius: 50,
  },
});
