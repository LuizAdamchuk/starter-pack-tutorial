import React from 'react';

import { Text, StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export const Button = ({ variant, label, onPress }) => {
  const backgroundColor =
    variant === 'primary' ? '#2cb9b0' : 'rgba(12,13,52,0.05)';
  const color = variant === 'primary' ? 'white' : '#000';

  return (
    <RectButton
      style={[styles.container, { backgroundColor }]}
      {...{ onPress }}
    >
      <Text style={[styles.label, { color }]}>{label}</Text>
    </RectButton>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 24,
    height: 48,
    width: 240,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  label: {
    fontSize: 16,
    fontFamily: 'Roboto_400Regular',
    textAlign: 'center',
  },
});
