import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { useFavorites } from '../context/FavoritesContext';

export default function FavoritesScreen({ navigation }) {
  const { favorites } = useFavorites();

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Detail', { item })}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTitle}>My Favorites</Text>
      {favorites.length > 0 ? (
        <FlatList data={favorites} keyExtractor={item => item.id} renderItem={renderItem} />
      ) : (
        <Text style={styles.empty}>Belum ada destinasi favorit.</Text>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f6fa', padding: 20 },
  headerTitle: { fontSize: 26, fontWeight: 'bold', color: '#2d3436', marginTop: 20, marginBottom: 20 },
  card: { flexDirection: 'row', backgroundColor: '#fff', borderRadius: 10, marginBottom: 15, overflow: 'hidden', elevation: 2 },
  image: { width: 100, height: 100 },
  info: { padding: 15, justifyContent: 'center' },
  name: { fontSize: 16, fontWeight: 'bold', color: '#2d3436' },
  price: { fontSize: 14, color: '#00b894', fontWeight: 'bold', marginTop: 5 },
  empty: { textAlign: 'center', marginTop: 50, color: '#7f8c8d', fontSize: 16 }
});