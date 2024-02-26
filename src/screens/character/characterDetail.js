import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {windowHeight, windowWidth} from '../../utils/dimension';
import MyColors from '../../theme/MyColors';
import Icon from 'react-native-vector-icons/Ionicons';
import {MyFonts} from '../../theme/MyFonts';

const CharacterDetail = ({route}) => {
  const navigation = useNavigation();
  const item = route.params.item;
console.log(item);
  return (
    <ImageBackground
      source={require('../../assets/images/portal.jpg')}
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
              resizeMode="stretch"
            />
          </TouchableOpacity>
            <Text style={styles.textHeader} >DETAIL</Text> 
          <TouchableOpacity
            style={[
              styles.headerRight,
              {
                backgroundColor:
                  item.status === 'Alive'
                    ? MyColors.green
                    : item.status === 'Dead'
                    ? MyColors.DEAD
                    : MyColors.UNKNOWN,
              },
            ]}>
            <Text style={styles.textRight}>{item.status}</Text>
          </TouchableOpacity>
        </View>
     
        <ImageBackground
          imageStyle={styles.imgStyle}
          source={require('../../assets/images/detail2.jpg')}
          style={styles.imgContainer}>
        
          <View style={styles.imgWrapper}>             
            <Image
              style={styles.image}
              source={{uri: item?.image}}
              resizeMode="stretch"
            />
          </View>
        </ImageBackground>
        <View style={styles.nameWrapper}>
          <Text style={styles.textName}>{item?.name}</Text>
          <Text style={[styles.textName, {color: MyColors.white}]}>
            {item?.species}
          </Text>
        </View>
      </View>
      <ImageBackground
        imageStyle={styles.imgBottomStyle}
        source={require('../../assets/images/detail2.jpg')}
        style={styles.imgInfoContainer}>
        <View style={styles.infoWrapper}>
          <ImageBackground
            imageStyle={styles.imgBottomAbsolute}
            source={require('../../assets/images/computer.png')}
            style={styles.imgInfoWrapper}>
            <View style={styles.property}>
              <Text style={styles.textType}>{item?.type || 'NA'}</Text>
            </View>
            <View style={[styles.property, styles.textLeft]}>
              <Text style={styles.textInfo}>Gender: </Text>
              <Text style={styles.textBottom}>{item?.gender}</Text>
            </View>
            <View style={[styles.property, styles.textLeft]}>
              <Text style={styles.textInfo}>Location: </Text>
              <Text style={styles.textBottom}>{item?.location.name}</Text>
            </View>
          </ImageBackground>
        </View>
      </ImageBackground>
    </ImageBackground>
  );
};
export default CharacterDetail;
const styles = StyleSheet.create({
  //kod yapısı önizleme için paylaşıldığından eklenmedi...
  });
