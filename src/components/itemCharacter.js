import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import axios from 'axios';
import MyColors from '../theme/MyColors';

const ItemCharacter = ({ item }) => {
  const [itemData, setItemData] = useState({});

  useEffect(() => {
    const fetchImg = async () => {
      try {
        const response = await axios.get(item);
        setItemData({
          name:response.data.name,
          image:response.data.image
        });
      } catch (error) {
        console.error('Error fetching character data:', error);
      }
    };

    fetchImg();
  }, [item]);

  if (!itemData) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: itemData.image }} style={styles.image} />
      <Text style={styles.textName}>{itemData.name}</Text>
    </View>
  );
};

export default ItemCharacter;

const styles = StyleSheet.create({
  //kod yapısı önizleme için paylaşıldığından eklenmedi...
  });
