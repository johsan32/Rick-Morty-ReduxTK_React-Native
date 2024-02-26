import React, {useEffect, useState} from 'react';
import {
  FlatList,
  View,
  StyleSheet,
  ActivityIndicator,
  ImageBackground,
  Text,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import MyColors from '../../theme/MyColors';
import {MyFonts} from '../../theme/MyFonts';
import {
  fetchLocation,
  fetchLocationPage,
} from '../../redux/features/actions/locationAction';
import LocationCard from '../../components/locationCard';
import { windowWidth} from '../../utils/dimension';

function LocationScreen() {
  const dispatch = useDispatch();
  const {location, loading} = useSelector(state => state.location);
  const [loadFetch, setLoadFetch] = useState(false);
  const [page, setPage] = useState(1);
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
  const handleLocationPage = () => {
    if (!loadFetch) {
      setLoadFetch(true);
      console.log(page);
      dispatch(fetchLocationPage(page));
      setPage(page + 1);
    }
    setLoadFetch(false);
  };

  useEffect(() => {
    dispatch(fetchLocation());
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        imageStyle={{opacity: 0.4}}
        style={styles.imageBack}
        resizeMode="cover"
        source={require('../../assets/images/earth.png')}>
        {location && (
          <View style={{height: 40, alignItems: 'center'}}>
            <Text style={styles.textHeader}>LOCATION</Text>
          </View>
        )}

        <FlatList
          showsVerticalScrollIndicator={false}
          data={location}
          keyExtractor={item => item.id}
          renderItem={({item}) => <LocationCard item={item} />}
          onEndReached={handleLocationPage}
          onEndReachedThreshold={0.5}
          ListFooterComponent={footerIndicator}
          numColumns={2}
        />
      </ImageBackground>
    </View>
  );
}

export default LocationScreen;

const styles = StyleSheet.create({
  //kod yapısı önizleme için paylaşıldığından eklenmedi...
  });