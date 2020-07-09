import React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const Slide = ({ label, right }) => {
  return (
    <View style={{ width }}>
      <Text>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
