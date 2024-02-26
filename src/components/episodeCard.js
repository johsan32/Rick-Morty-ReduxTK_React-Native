import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {windowWidth} from '../utils/dimension';
import MyColors from '../theme/MyColors';
import {MyFonts} from '../theme/MyFonts';
import ItemCharacter from './itemCharacter';

const EpisodeCard = ({item}) => {
  const navigation = useNavigation();
  return (
    <ImageBackground
      imageStyle={{opacity: 0.6, borderRadius: 10}}
      style={styles.imageBack}
      resizeMode="cover"
      source={require('../assets/images/computer.png')}>
      <View style={styles.indexWrapper}>
        <View style={styles.badge}>
          <Text style={styles.textIndex}>{item?.id}</Text>
        </View>
        <Text style={styles.textEpisode}>{item?.episode}</Text>
      </View>
      <View style={styles.characterWrapper}>
        <Text style={styles.textCharacter}>Characters</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={item?.characters}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => <ItemCharacter item={item} />}
        />
      </View>
      <TouchableOpacity
        onPress={() => console.log(item)}
        style={{
          marginHorizontal: 10,
          marginBottom: 10,
          justifyContent: 'flex-end',
        }}>
        <View style={styles.textWrapper}>
          <Text numberOfLines={1} style={styles.textName}>
            {item.name}
          </Text>
        </View>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default EpisodeCard;
const styles = StyleSheet.create({
  //kod yapısı önizleme için paylaşıldığından eklenmedi...
  });
