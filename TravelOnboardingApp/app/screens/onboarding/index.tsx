/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {
  Text,
  SafeAreaView,
  Animated,
  View,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import {COLORS, FONTS, SIZES, images} from '../../constants';

// images
const {onboarding1, onboarding2, onboarding3} = images;

// dummy data
const onBoardings: {
  title: string;
  description: string;
  img: ImageSourcePropType;
}[] = [
  {
    title: "Let's Travelling",
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    img: onboarding1,
  },
  {
    title: 'Navigation',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    img: onboarding2,
  },
  {
    title: 'Destination',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    img: onboarding3,
  },
];

const OnBoarding = () => {
  const [completed, setCompleted] = React.useState(false);
  const [scrollX, setScrollX] = React.useState(new Animated.Value(0));

  React.useEffect(() => {
    // to check if user has finished scrolling the onboarding pages
    const idEvent = scrollX.addListener(({value}) => {
      if (Math.floor(value / SIZES.width) === onBoardings.length - 1) {
        setCompleted(true);
      }
    });

    return () => scrollX.removeListener(idEvent);
  }, [scrollX]);

  function renderContent() {
    return (
      <Animated.ScrollView
        horizontal
        pagingEnabled
        scrollEnabled
        decelerationRate={0}
        scrollEventThrottle={16}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {
            useNativeDriver: false,
          },
        )}>
        {onBoardings.map((item, index) => (
          <View key={index} style={{width: SIZES.width}}>
            {/* Image */}
            <View style={styles.imageContainer}>
              <Image
                source={item.img}
                resizeMode="cover"
                style={styles.image}
              />
            </View>
            {/* Text */}
            <View style={styles.textContainer}>
              <Text style={styles.textTitle}>{item.title}</Text>
              <Text style={styles.textDescription}>{item.description}</Text>
            </View>

            {/* Button */}
            <TouchableOpacity
              onPress={() => console.log('Button is pressed')}
              style={styles.button}>
              <Text style={styles.buttonText}>
                {completed ? "Let's Go" : 'Skip'}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </Animated.ScrollView>
    );
  }
  function renderDots() {
    const dotPosition = Animated.divide(scrollX, SIZES.width);
    return (
      <View style={styles.dotContainer}>
        {onBoardings.map((_, index) => {
          const opacity = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });
          const dotSize = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [SIZES.base, 17, SIZES.base],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View
              key={`dot-${index}`}
              // @ts-ignore
              opacity={opacity}
              style={[
                styles.dot,
                {
                  width: dotSize,
                  height: dotSize,
                },
              ]}
            />
          );
        })}
      </View>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <View>{renderContent()}</View>
      <View style={styles.dotRootContainer}>{renderDots()}</View>
    </SafeAreaView>
  );
};

export default OnBoarding;
