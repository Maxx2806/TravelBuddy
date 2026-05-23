import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { destinations } from '../data/destinations';

export default function HomeScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.card} 
      onPress={() => navigation.navigate('Detail', { item })}
    >
      <Image source={{ uri: item.image }} style={styles.cardImage} />
      <View style={styles.cardInfo}>
        <Text style={styles.cardName}>{item.name}</Text>
        <Text style={styles.cardLocation}>{item.location}</Text>
        <Text style={styles.cardPrice}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTitle}>Destinations</Text>
      <FlatList
        data={destinations}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f6fa' },
  headerTitle: { fontSize: 26, fontWeight: 'bold', marginHorizontal: 20, marginTop: 20, marginBottom: 15, color: '#2d3436' },
  listContainer: { paddingHorizontal: 20, paddingBottom: 20 },
  card: { backgroundColor: '#ffffff', borderRadius: 12, marginBottom: 15, overflow: 'hidden', elevation: 3 },
  cardImage: { width: '100%', height: 180 },
  cardInfo: { padding: 15 },
  cardName: { fontSize: 18, fontWeight: 'bold', color: '#2d3436' },
  cardLocation: { fontSize: 14, color: '#7f8c8d', marginVertical: 4 },
  cardPrice: { fontSize: 16, fontWeight: 'bold', color: '#00b894' }
});