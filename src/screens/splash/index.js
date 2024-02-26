import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {TAB} from '../../utils/routes';
import {fetchCharacters} from '../../redux/features/actions/characterActions';

const SplashScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacters());
    setTimeout(() => {
      navigation.navigate(TAB);
    }, 800);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        style={{width: '100%', height: '100%'}}
        source={require('../../assets/images/rm-splash.png')}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
//kod yapısı önizleme için paylaşıldığından eklenmedi...
});
