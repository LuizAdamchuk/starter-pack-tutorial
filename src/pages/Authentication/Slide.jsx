import React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
import { SLIDE_HEIGHT } from './Onboarding';

export const Slide = ({ title, right }) => {
  const transform = [
    { translateY: (SLIDE_HEIGHT - 100) / 2 },
    { translateX: right ? width / 2 - 50 : -width / 2 + 50 },
    {
      rotate: right ? '-90deg' : '90deg',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={(styles.titleContainer, { transform })}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
  },
  title: {
    fontSize: 70,
    fontFamily: 'Roboto_500Medium',
    color: 'white',
    textAlign: 'center',
  },
  titleContainer: {
    height: 100,
    justifyContent: 'center',
    transform: [
      { translateY: (SLIDE_HEIGHT - 100) / 2 },
      { translateX: -width / 2 },
    ],
  },
});
