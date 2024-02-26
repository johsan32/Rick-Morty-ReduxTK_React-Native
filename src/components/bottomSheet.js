import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {gender, status} from '../constants/filterProperty';
import MyColors from '../theme/MyColors';
import {MyFonts} from '../theme/MyFonts';

const BottomSheetModal = ({
  statusFilter,
  setStatusFilter,
  aplyPress,
  genderFilter,
  setGenderFilter,
}) => {
  return (
    <ImageBackground
      imageStyle={{opacity: 0.7, borderRadius: 8}}
      style={styles.imageBack}
      resizeMode="cover"
      source={require('../assets/images/portal.jpg')}>
      <View>
        <Pressable onPress={() => setStatusFilter('')}>
          <Text style={styles.textStatus}>Status</Text>
        </Pressable>

        <View style={styles.container}>
          {status.map(item => (
            <TouchableOpacity
              key={item.id}
              onPress={() => setStatusFilter(item)}
              style={[
                styles.btnStatus,
                {
                  backgroundColor:
                    statusFilter.value == item.value
                      ? MyColors.white
                      : MyColors.yellow,
                },
              ]}>
              <Text style={styles.btnText}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View>
        <Pressable onPress={() => setGenderFilter('')}>
          <Text style={styles.textStatus}>Gender</Text>
        </Pressable>
        <View style={styles.container}>
          {gender.map(item => (
            <View key={item.id} style={{flexDirection: 'row'}}>
              <TouchableOpacity
                key={item.id}
                onPress={() => setGenderFilter(item)}
                style={[
                  styles.btnStatus,
                  {
                    backgroundColor:
                      genderFilter.value == item.value
                        ? MyColors.white
                        : MyColors.yellow,
                  },
                ]}>
                <Text style={styles.btnText}>{item.name}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>

      <TouchableOpacity onPress={aplyPress} style={styles.btnAply}
      s
      >
        <Text style={styles.btnAplyText}>Apply</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default BottomSheetModal;

const styles = StyleSheet.create({
  //kod yapısı önizleme için paylaşıldığından eklenmedi...
  });
