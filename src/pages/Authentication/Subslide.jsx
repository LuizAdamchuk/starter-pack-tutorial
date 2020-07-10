import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Button } from '../../components/Button';

export const Subslide = ({ subtitle, description, last, onPress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.description}>{description}</Text>
      <Button
        label={last ? 'Vamos começar?' : 'Próximo'}
        variant={last ? 'primary' : 'default'}
        {...{ onPress }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 44,
    lineHeight: 32,
    marginBottom: 16,
  },
  subtitle: {
    fontFamily: 'Roboto_500Medium',
    fontSize: 24,
    textAlign: 'center',
  },
  description: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
  },
});
