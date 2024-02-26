import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {windowWidth} from '../../utils/dimension';
import MyColors from '../../theme/MyColors';
import Icon from 'react-native-vector-icons/Ionicons';
import {MyFonts} from '../../theme/MyFonts';
import ItemLocation from '../../components/itemLocation';

const LocationDetail = ({route}) => {
  const navigation = useNavigation();
  const item = route.params.item;

  return (
    <ImageBackground
      imageStyle={{opacity: 0.5}}
      source={require('../../assets/images/earth.png')}
      style={styles.container}>
      <View style={{flex: 1, alignItems: 'center'}}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.headerLeft}
            onPress={() => navigation.goBack()}>
            <Icon name="caret-back-sharp" size={38} color={MyColors.yellow} />
            <Image
              style={styles.imageLeft}
              source={require('../../assets/images/Rick.png')}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerRight}>
            <Text style={styles.textRight}>{item.dimension}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.nameWrapper}>
          <Text style={styles.textName}>{item?.name}</Text>
          <Text style={[styles.textType, {color: MyColors.white}]}>
            {item?.type}
          </Text>
        </View>
        <View style={styles.characterWrapper}>
          <Text style={styles.textCharacter}>Residents</Text>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={item?.residents}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => <ItemLocation item={item} />}
            numColumns={2}
          />
        </View>
      </View>
    </ImageBackground>
  );
};
export default LocationDetail;
const styles = StyleSheet.create({
  //kod yapısı önizleme için paylaşıldığından eklenmedi...
  });