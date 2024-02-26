import React, {useEffect, useRef, useState} from 'react';
import {
  FlatList,
  View,
  StyleSheet,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  fetchCharacterPage,
  fetchCharacters,
} from '../../redux/features/actions/characterActions';
import CharacterCard from '../../components/characterCard';
import MyColors from '../../theme/MyColors';
import {MyFonts} from '../../theme/MyFonts';
import AppTextInput from '../../components/input';
import BottomSheet from 'react-native-gesture-bottom-sheet';
import BottomSheetModal from '../../components/bottomSheet';
import {getRequest} from '../../service/verb';
import {CHARACTER_URL} from '../../service/urls';

function HomeScreen() {
  const dispatch = useDispatch();
  const bottomSheet = useRef();
  const [loading, setLoading] = useState(false);
  const {characters} = useSelector(state => state.characters);
  const [page, setPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState({});
  const [genderFilter,setGenderFilter] =useState({});
  const [filteredData, setFilteredData] = useState([]);
  const [searchText, setSearchText] = useState(null);


  const handleCharacterPage = async () => {
    if (!loading) {
      setLoading(true);
      console.log(page);
      dispatch(fetchCharacterPage(page));
      setPage(page + 1);
    }
    setLoading(false);
  };

  const footerIndicator = () => {
    return loading ? (
      <View
        style={{
          paddingVertical: 20,
        }}>
        <ActivityIndicator animating size="large" />
      </View>
    ) : null;
  };
  const aplyPress = () => {
    getRequest(CHARACTER_URL, {status: statusFilter.value}).then(response => {
      setFilteredData(response.data.results);
      bottomSheet.current.close();
    });
    
    setGenderFilter("");
    setStatusFilter("");
  };

  const searchFilter = () => {
    getRequest(CHARACTER_URL, {
      name: searchText,
      status: statusFilter.value || genderFilter.value,
    }).then(response => {
      setFilteredData(response.data.results);
    });
    setSearchText('');
  };
  const handleFetchData = () => {
    dispatch(fetchCharacters());
    setFilteredData(characters);
  };

  useEffect(() => {
    if(characters){
    setFilteredData(characters);
    }
  }, []);

  
  console.log('filtere', statusFilter);

  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <AppTextInput
          handleBottomSheet={() => bottomSheet.current.show()}
          handleFetchData={handleFetchData}
          setSearchText={setSearchText}
          searchText={searchText}
          searchFilter={searchFilter}
        />
      </View>
      <BottomSheet
        hasDraggableIcon
        ref={bottomSheet}
        height={600}
        onRequestClose={() => {
          bottomSheet.current.close();
        }}>
        <BottomSheetModal
          setStatusFilter={setStatusFilter}
          statusFilter={statusFilter}
          aplyPress={aplyPress}
          genderFilter={genderFilter}
          setGenderFilter={setGenderFilter}
        />
      </BottomSheet>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={filteredData}
        keyExtractor={item => item.id}
        renderItem={({item}) => <CharacterCard item={item} />}
        onEndReached={handleCharacterPage}
        onEndReachedThreshold={0.5}
        ListFooterComponent={footerIndicator}
        numColumns={2}
      />
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  //kod yapısı önizleme için paylaşıldığından eklenmedi...
  });
