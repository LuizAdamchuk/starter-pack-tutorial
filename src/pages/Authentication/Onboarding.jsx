import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Animated, { multiply } from 'react-native-reanimated';
import { useValue, onScrollEvent, interpolateColor } from 'react-native-redash';

import { Slide } from './Slide';
import { Subslide } from './Subslide';

const { width, height } = Dimensions.get('window');
export const SLIDE_HEIGHT = 0.61 * height;
const BORDER_RADIUS = 75;
const slides = [
  {
    title: 'Promoções',
    subtitle: 'Titulo',
    description:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form!',
    color: '#BFEAF5',
  },
  {
    title: 'Primeiro',
    subtitle: 'Titulo',
    description:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form?',
    color: '#BEECC4',
  },
  {
    title: 'Segundo',
    subtitle: 'Titulo',
    description:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form!',
    color: '#FFE4D9',
  },
  {
    title: 'Terceiro',
    subtitle: 'Titulo',
    description:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form?',
    color: '#FFDDDD',
  },
];

export const Onboarding = () => {
  const x = useValue(0);
  const onScroll = onScrollEvent({ x });
  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, i) => i * width),
    outputRange: slides.map(slide => slide.color),
  });

  return (
    <Animated.View style={styles.container}>
      <Animated.View style={[styles.slider, { backgroundColor }]}>
        <Animated.ScrollView
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          scrollEventThrottle={1}
          {...{ onScroll }}
        >
          {slides.map(({ title }, index) => (
            <Slide key={index} right={!!(index % 2)} {...{ title }} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <Animated.View style={styles.footer}>
        <Animated.View
          style={{ ...StyleSheet.absoluteFillObject, backgroundColor }}
        />
        <Animated.View
          style={[
            styles.footerContent,
            {
              width: width * slides.length,
              flex: 1,
              transform: [{ translateX: multiply(x, -1) }],
            },
          ]}
        >
          {slides.map(({ subtitle, description }, index) => (
            <Subslide
              key={index}
              last={index === slides.length - 1}
              {...{ subtitle, description }}
            />
          ))}
        </Animated.View>
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
    flexDirection: 'row',
    backgroundColor: 'white',
    borderTopLeftRadius: BORDER_RADIUS,
  },
});
