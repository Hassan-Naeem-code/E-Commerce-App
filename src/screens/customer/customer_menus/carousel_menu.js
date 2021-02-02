import React, {useRef, useState, useEffect} from 'react';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';

const ENTRIES1 = [
  {
    title: 'Paratha With Sabzi And Raita',
    subtitle: 'Paratha With Sabzi And Raita',
    illustration: 'https://tap-assets-prod.dexecure.net/wp-content/uploads/sites/9/2017/06/desi-food-habits.jpg',
  },
  {
    title: 'Nargisi Kooftay',
    subtitle: 'Nargisi Kooftay',
    illustration: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3GbtNbMcqEh_EHWb6Y-tgh1AGA-NuQ1zGLg&usqp=CAU',
  },
  {
    title: 'Beef Nihari',
    subtitle: 'Beef Nihari',
    illustration: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRelq9x4y2i97c2TKFo8OFEXMMYO_-yz4rLZQ&usqp=CAU',
  },
  {
    title: 'Dhaga Kabab',
    subtitle: 'Dhaga Kabab',
    illustration: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSjnh-WYo78HWecuQZxKnwYSHzZW6oZbRJGg&usqp=CAU',
  },
  {
    title: 'Chicken Biryani',
    subtitle: 'Chicken Biryani',
    illustration: 'https://www.sooperchef.pk/uploads/topics/2017/06/chicken-bbq-biryani-web-cover.jpg',
  },
];
const {width: screenWidth} = Dimensions.get('window');

const Carousel_Menu = (props) => {
  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);

  const goForward = () => {
    carouselRef.current.snapToNext();
  };

  useEffect(() => {
    setEntries(ENTRIES1);
  }, []);

  const renderItem = ({item, index}, parallaxProps) => {
    return (
      <View style={styles.item}>
        <ParallaxImage
          source={{uri: item.illustration}}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      
      <Carousel
        ref={carouselRef}
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth - 60}
        data={entries}
        renderItem={renderItem}
        hasParallaxImages={true}
      />
    </View>
  );
};

export default Carousel_Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFEDF',
  },
  item: {
    width: screenWidth - 60,
    height: screenWidth - 60,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
});
