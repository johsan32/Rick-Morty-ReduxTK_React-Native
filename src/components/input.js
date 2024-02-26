import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import MyColors from '../theme/MyColors';
import BottomSheetModal from './bottomSheet';

export default function AppTextInput({
  searchFilter,
  setSearchText,
  searchText,
  handleBottomSheet,
  handleFetchData,
}) {
  const [openSheet, setOpenShet] = useState();
  console.log(searchText);
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        value={searchText}
        onChangeText={text => setSearchText(text)}
        placeholderTextColor={MyColors.background}
        placeholder="Search Characters"
        onSubmitEditing={searchFilter}
      />

      <TouchableOpacity style={styles.searchBtn} onPress={searchFilter}>
        <FontAwesome name="search" size={25} color={MyColors.black} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.filterBtn}
        onPress={handleBottomSheet}
        onLongPress={handleFetchData}>
        <FontAwesome name="filter" size={28} color={MyColors.white} />
      </TouchableOpacity>
      {openSheet && <BottomSheetModal />}
    </View>
  );
}

const styles = StyleSheet.create({
  //kod yapısı önizleme için paylaşıldığından eklenmedi...
  });