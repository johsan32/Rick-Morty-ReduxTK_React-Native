import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {C_DETAIL} from '../utils/routes';
import {windowWidth} from '../utils/dimension';
import MyColors from '../theme/MyColors';
import {MyFonts} from '../theme/MyFonts';

const CharacterCard = ({item}) => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      imageStyle={{opacity: 0.5, borderRadius: 10}}
      style={styles.imageBack}
      resizeMode="cover"
      source={require('../assets/images/portal.jpg')}>
      <View style={styles.indexWrapper}>
        <Text style={styles.textIndex}>{item.id}</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(C_DETAIL, {item});
        }}
        style={{margin: 10, flex: 1}}>
        <Image
          source={{uri: item.image}}
          style={styles.image}
          resizeMode="contain"
        />

        <View style={styles.textWrapper}>
          <Text numberOfLines={1} style={styles.textName}>
            {item.name}
          </Text>
          <View style={styles.statusWrapper}>
            <Text style={styles.textStatus}>Status:</Text>
            <Text
              style={[
                styles.textStatusInfo,
                {
                  backgroundColor:
                    item.status === 'Alive'
                      ? MyColors.green
                      : item.status === 'Dead'
                      ? MyColors.DEAD
                      : MyColors.UNKNOWN,
                },
              ]}>
              {item.status}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default CharacterCard;
const styles = StyleSheet.create({
  //kod yapısı önizleme için paylaşıldığından eklenmedi...
  });