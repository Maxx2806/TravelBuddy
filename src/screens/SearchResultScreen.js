import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { destinations } from '../data/destinations';

export default function SearchResultScreen({ route, navigation }) {
  const { query } = route.params;
  
  const results = destinations.filter(item => 
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Detail', { item })}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.location}>{item.location}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Hasil untuk "{query}"</Text>
      {results.length > 0 ? (
        <FlatList data={results} keyExtractor={item => item.id} renderItem={renderItem} />
      ) : (
        <Text style={styles.empty}>Tidak ada destinasi ditemukan.</Text>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f6fa', padding: 20 },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 15, color: '#2d3436' },
  card: { flexDirection: 'row', backgroundColor: '#fff', borderRadius: 10, marginBottom: 15, overflow: 'hidden', elevation: 2 },
  image: { width: 100, height: 100 },
  info: { padding: 15, justifyContent: 'center' },
  name: { fontSize: 16, fontWeight: 'bold', color: '#2d3436' },
  location: { fontSize: 14, color: '#7f8c8d', marginTop: 5 },
  empty: { textAlign: 'center', marginTop: 50, color: '#7f8c8d', fontSize: 16 }
});