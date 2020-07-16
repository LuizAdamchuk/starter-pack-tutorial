import React, { useRef } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Animated, { multiply, divide } from 'react-native-reanimated';
import { useScrollHandler, interpolateColor } from 'react-native-redash';

import { Slide } from './Slide';
import { Subslide } from './Subslide';
import { Dot } from './Dot';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');
export const SLIDE_HEIGHT = 0.61 * height;
export const BORDER_RADIUS = 75;
const slides = [
  {
    title: 'Promoções',
    subtitle: 'Titulo',
    description:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form!',
    color: '#BFEAF5',
    picture: require('../../assets/1.png'),
  },
  {
    title: 'Primeiro',
    subtitle: 'Titulo',
    description:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form?',
    color: '#BEECC4',
    picture: require('../../assets/2.png'),
  },
  {
    title: 'Segundo',
    subtitle: 'Titulo',
    description:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form!',
    color: '#FFE4D9',
    picture: require('../../assets/3.png'),
  },
  {
    title: 'Terceiro',
    subtitle: 'Titulo',
    description:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form?',
    color: '#FFDDDD',
    picture: require('../../assets/4.png'),
  },
];

export const Onboarding = () => {
  const navigation = useNavigation();
  const scroll = useRef(null);
  const { scrollHandler, x } = useScrollHandler();
  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, i) => i * width),
    outputRange: slides.map(slide => slide.color),
  });

  return (
    <Animated.View style={styles.container}>
      <Animated.View style={[styles.slider, { backgroundColor }]}>
        <Animated.ScrollView
          ref={scroll}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          scrollEventThrottle={1}
          {...scrollHandler}
        >
          {slides.map(({ title, picture }, index) => (
            <Slide key={index} right={!!(index % 2)} {...{ title, picture }} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <Animated.View style={styles.footer}>
        <Animated.View
          style={[{ ...StyleSheet.absoluteFillObject, backgroundColor }]}
        />
        <View style={[styles.footerContent]}>
          <View style={styles.pagination}>
            {slides.map((_, index) => (
              <Dot key={index} currentIndex={divide(x, width)} {...{ index }} />
            ))}
          </View>
          <Animated.View
            style={{
              flex: 1,
              flexDirection: 'row',
              width: width * slides.length,
              transform: [{ translateX: multiply(x, -1) }],
            }}
          >
            {slides.map(({ subtitle, description }, index) => {
              const last = index === slides.length - 1;
              return (
                <Subslide
                  key={index}
                  {...{ subtitle, description, last }}
                  onPress={() => {
                    if (last) {
                      navigation.navigate('Welcome');
                    } else if (scroll.current) {
                      scroll.current
                        .getNode()
                        .scrollTo({ x: width * (index + 1), animated: true });
                    }
                  }}
                />
              );
            })}
          </Animated.View>
        </View>
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  slider: {
    height: SLIDE_HEIGHT,
    borderBottomRightRadius: BORDER_RADIUS,
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: BORDER_RADIUS,
  },
  pagination: {
    ...StyleSheet.absoluteFillObject,
    height: BORDER_RADIUS,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
});
