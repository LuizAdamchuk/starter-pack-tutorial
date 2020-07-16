import React from 'react';

import { View, StyleSheet, Dimensions, Text, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';

import { Button } from '../../components/Button';
import img5 from '../../assets/5.png';

export const Welcome = () => {
  return (
    <>
      <View style={styles.header}>
        <View style={[styles.headerContent]}>
          <Animatable.Image
            animation="fadeInUp"
            style={styles.picture}
            source={img5}
            resizeMode="contain"
          />
        </View>
      </View>
      <View style={styles.footer}>
        <Animatable.View animation="pulse" style={styles.footerContent}>
          <Text style={styles.title}>NomeAplicativo</Text>
          <Text style={styles.subtitle}>
            Faça login na sua conta ou se cadastre para uma experiência incrivel
          </Text>
          <Button variant="primary" label="Já tem cadastro? Faça Login" />
          <Button variant="white" label="Junte-se a nós, é gratuito!" />
          <Button variant="transparent" label="Esqueceu a senha?" />
        </Animatable.View>
      </View>
    </>
  );
};

const { width, height } = Dimensions.get('window');
export const SLIDE_HEIGHT = 0.61 * height;
export const BORDER_RADIUS = 75;

const styles = StyleSheet.create({
  header: {
    flex: 0.65,
    backgroundColor: 'white',
  },
  headerContent: {
    flex: 1,
    borderBottomRightRadius: BORDER_RADIUS,
    backgroundColor: '#999',
    alignItems: 'center',
  },

  footer: {
    flex: 1,
    backgroundColor: '#999',
  },
  footerContent: {
    flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 16,
    backgroundColor: 'white',
    borderTopLeftRadius: BORDER_RADIUS,
    alignItems: 'center',
  },
  picture: {
    width: width * 0.9,
    height: height * 0.45,
    alignSelf: 'center',
  },
  title: {
    fontSize: 40,
    fontFamily: 'Roboto_500Medium',
    color: '#666',
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 20,
    textAlign: 'center',
    color: '#888',
    marginVertical: 16,
  },
});
