import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Header from '../home/header';

const orderDetails = ({route, navigation}) => {
  const {data} = route.params;
  console.log('Prevoius Screen Data Get Here', data);
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.firstSection}>
        <View style={styles.fullSection}>
          <ScrollView>
            <View style={styles.sectionDivider}>
              <View style={styles.firstPortions}>
                <Text style={styles.firstAreaText}>Order Details</Text>
              </View>
              <View style={styles.secondPortions}>
                <Image
                  source={{uri: data.foodImage}}
                  style={styles.foodImage}
                />
              </View>
            </View>
            <View style={styles.sectionDivider}>
              <View style={styles.firstPortions}>
                <Text style={styles.firstDataText}>NAME:</Text>
              </View>
              <View style={styles.secondPortions}>
                <Text style={styles.sectionDataText}>
                  {data.fName + ' ' + data.lName}
                </Text>
              </View>
            </View>
            <View style={styles.sectionDivider}>
              <View style={styles.firstPortions}>
                <Text style={styles.firstDataText}>EMAIL:</Text>
              </View>
              <View style={styles.secondPortions}>
                <Text style={styles.sectionDataText}>{data.email}</Text>
              </View>
            </View>
            <View style={styles.sectionDivider}>
              <View style={styles.firstPortions}>
                <Text style={styles.firstDataText}>MOB NUM#:</Text>
              </View>
              <View style={styles.secondPortions}>
                <Text style={styles.sectionDataText}>{data.contactNumber}</Text>
              </View>
            </View>
            <View style={styles.sectionDivider}>
              <View style={styles.firstPortions}>
                <Text style={styles.firstDataText}>ADDRESS:</Text>
              </View>
              <View style={styles.secondPortions}>
                <Text style={styles.sectionDataText}>{data.address}</Text>
              </View>
            </View>
            <View style={styles.sectionDivider}>
              <View style={styles.firstPortions}>
                <Text style={styles.firstDataText}>FOOD NAME:</Text>
              </View>
              <View style={styles.secondPortions}>
                <Text style={styles.sectionDataText}>{data.foodName}</Text>
              </View>
            </View>
            <View style={styles.sectionDivider}>
              <View style={styles.firstPortions}>
                <Text style={styles.firstDataText}>QUANTITY:</Text>
              </View>
              <View style={styles.secondPortions}>
                <Text style={styles.sectionDataText}>{data.quatity}</Text>
              </View>
            </View>
            <View style={styles.sectionDivider}>
              <View style={styles.firstPortions}>
                <Text style={styles.firstDataText}>FOOD PRICE:</Text>
              </View>
              <View style={styles.secondPortions}>
                <Text style={styles.sectionDataText}>{data.price}</Text>
              </View>
            </View>
            <View style={styles.sectionDivider}>
              <View style={styles.firstPortions}>
                <Text style={styles.firstDataText}>TIME REMAIN:</Text>
              </View>
              <View style={styles.secondPortions}>
                <Text style={styles.sectionDataText}>
                  {data.deliveryTime} minutes
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};
export default orderDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFEDF',
  },
  firstSection: {
    flex: 1,
    padding: 28,
  },
  fullSection: {
    borderColor: 'rgb(118,118,118)',
    borderWidth: 3,
    borderRadius:15,
    padding: 5,
  },
  sectionDivider: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  firstPortions: {
    flex: 3,
  },
  secondPortions: {
    flex: 4,
  },
  foodImage: {
    width: '100%',
    height: 130,
    borderRadius: 20,
  },
  firstAreaText: {
    color: 'rgb(118,118,118)',
    fontSize: 20,
    fontWeight: '900',
  },
  firstDataText: {
    color: 'rgb(118,118,118)',
    fontSize: 17,
    fontWeight: 'bold',
  },
  sectionDataText: {
    color: 'rgb(255,99,71)',
    fontSize: 17,
    fontWeight: '900',
    marginVertical: 5,
  },
});
