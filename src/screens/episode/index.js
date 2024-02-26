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
import {windowWidth} from '../../utils/dimension';
import {
  fetchEpisodePage,
  fetchEpisodes,
} from '../../redux/features/actions/episodeAction';
import EpisodeCard from '../../components/episodeCard';

function EpisodeScreen() {
  const dispatch = useDispatch();
  const {episodes, loading, episodeP} = useSelector(state => state.episodes);
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
  const handleEpisodePAge = () => {
    if (!loadFetch) {
      setLoadFetch(true);
      console.log(page);
      dispatch(fetchEpisodePage(page));
      setPage(page + 1);
    }
    setLoadFetch(false);
  };

  useEffect(() => {
   dispatch(fetchEpisodes());
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
      imageStyle={{opacity: 0.2}}
        style={styles.imageBack}
        resizeMode="cover"
        source={require('../../assets/images/computer.png')}>
        <View style={{height: 40, alignItems: 'center'}}>
          <Text style={styles.textHeader}>EPISODES</Text>
        </View>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={episodes}
          keyExtractor={item => item.id}
          renderItem={({item}) => <EpisodeCard item={item} />}
          onEndReached={handleEpisodePAge}
          onEndReachedThreshold={0.5}
          ListFooterComponent={footerIndicator}
        />
      </ImageBackground>
    </View>
  );
}

export default EpisodeScreen;
const styles = StyleSheet.create({
  //kod yapısı önizleme için paylaşıldığından eklenmedi...
  });
