import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {signOut} from '../../../../Store/actions/auth';
import {useDispatch} from 'react-redux';

const ProductDetail = ({navigation, route}) => {
  const {productData} = route.params;
  const dispatch = useDispatch();
  
  const LogOutUser=()=>{
      dispatch(signOut(navigation));
  }
  return (
    <View style={styles.container}>
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
            <TouchableOpacity style={styles.logoutBtnCircle} onPress={LogOutUser}>
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
          <Text style={styles.productHeading}>{productData.dishName}</Text>
          <Text style={styles.prodcutDetailHeading}>
            {productData.foodDesc}
          </Text>
          <View style={styles.areaUnderActionHeading}>
            <View style={styles.firstAreaUnderHeading}>
              <Text style={styles.actionHeading}>Location:</Text>
            </View>
            <View style={styles.secondAreaUnderHeading}>
              <Text style={styles.actionHeading}>{productData.location}</Text>
            </View>
          </View>
          <View style={styles.areaUnderActionHeading}>
            <View style={styles.firstAreaUnderHeading}>
              <Text style={styles.actionHeading}>Delivery Time:</Text>
            </View>
            <View style={styles.secondAreaUnderHeading}>
              <Text style={styles.actionHeading}>
                <Ionicons name={'time-sharp'} size={17} />{' '}
                {productData.deliveryTime} minutes
              </Text>
            </View>
          </View>
          <View style={styles.selectionArea}>
            <View style={styles.areaUnderActionHeading}>
              <View style={styles.firstAreaUnderHeading}>
                <Text style={styles.actionHeading}>ACTIONS</Text>
              </View>
              <View style={styles.areaLeftEmpty}></View>
              <View style={styles.secondAreaFirstHeading}>
                <TouchableOpacity style={styles.actionBtn}>
                  <FontAwesome
                    name={'edit'}
                    size={18}
                    color={'rgb(255,99,71)'}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.secondAreaSecondHeading}>
                <TouchableOpacity style={styles.actionBtn} >
                  <AntDesign name={'delete'} size={18} color={'rgb(255,0,0)'} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={styles.thirdSection}>
        <AntDesign name={'copyright'} size={20} color={'black'} />
        <Text>Copyright All Rights Reserved 2021.</Text>
      </View>
    </View>
  );
};
export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginVertical: 18,
  },
  innerPartLeft: {
    flex: 5,
  },
  innerPartTwo: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 18,
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
  },
  productImage: {
    width: '100%',
    height: 200,
    borderRadius: 15,
    marginLeft: 2,
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
});
