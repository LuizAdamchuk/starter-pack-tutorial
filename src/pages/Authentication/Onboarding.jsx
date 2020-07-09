import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { Slide } from './Slide';

const { width, height } = Dimensions.get('window');

export const Onboarding = () => {
  return (
    <View style={styles.container}>
      <View style={styles.slider}>
        <ScrollView
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
        >
          <Slide label="Promoções" />
          <Slide label="Primeiro passo" />
          <Slide label="Segundo passo" />
          <Slide label="Terceiro passo" />
        </ScrollView>
      </View>
      <View style={styles.footer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slider: {
    height: 0.61 * height,
  },
  footer: {
    flex: 1,
  },
});
