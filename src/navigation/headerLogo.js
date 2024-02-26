import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import MyColors from '../theme/MyColors';
export default function HeaderLeft() {
  return (
    <View style={{backgroundColor: MyColors.black, alignItems: 'center'}}>
      <Image
        style={{height: 50, width: 250, marginTop: 0}}
        resizeMode="contain"
        source={require('../assets/images/logo.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
