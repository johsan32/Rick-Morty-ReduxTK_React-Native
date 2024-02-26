import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {windowWidth} from '../utils/dimension';
import MyColors from '../theme/MyColors';
import {MyFonts} from '../theme/MyFonts';
import { L_DETAIL } from '../utils/routes';

const LocationCard = ({item}) => {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate(L_DETAIL, {item:item})} style={{flex: 1}}>
      <ImageBackground
        imageStyle={{opacity: 0.8, borderRadius: 10}}
        style={styles.imageBack}
        resizeMode="cover"
        source={require('../assets/images/earth.png')}>
        <View style={styles.indexWrapper}>
          <View style={styles.badge}>
            <Text style={styles.textIndex}>{item?.residents?.length}</Text>
          </View>

          <Text style={styles.textResident}>Resident</Text>
        </View>
        <View style={styles.textWrapper}>
          <Text numberOfLines={1} style={styles.textName}>
            {item.name}
          </Text>
          <View style={styles.statusWrapper}>
            <Text style={styles.textStatusInfo}>{item.dimension}</Text>
          </View>
          <View style={styles.typeWrapper}>
            <Text style={styles.textType}>Type: </Text>
            <Text style={styles.textTypeInfo}>{item.type}</Text>
          </View>
        </View>
      </ImageBackground>
    </Pressable>
  );
};

export default LocationCard;
const styles = StyleSheet.create({
  //kod yapısı önizleme için paylaşıldığından eklenmedi...
  });
