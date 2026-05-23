import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFavorites } from '../context/FavoritesContext';

export default function DetailScreen({ route }) {
  const { item } = route.params;
  const { isFavorite, toggleFavorite } = useFavorites();
  const favoriteActive = isFavorite(item.id);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image source={{ uri: item.image }} style={styles.heroImage} />
        
        <View style={styles.infoContainer}>
          <View style={styles.titleRow}>
            <Text style={styles.name}>{item.name}</Text>
            <TouchableOpacity onPress={() => toggleFavorite(item)}>
              <Ionicons 
                name={favoriteActive ? "heart" : "heart-outline"} 
                size={32} 
                color={favoriteActive ? "#00b894" : "#7f8c8d"} 
              />
            </TouchableOpacity>
          </View>
          
          <Text style={styles.location}>{item.location}</Text>
          <Text style={styles.price}>{item.price}</Text>
          <View style={styles.divider} />
          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ffffff' },
  heroImage: { width: '100%', height: 300 },
  infoContainer: { padding: 20 },
  titleRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  name: { fontSize: 24, fontWeight: 'bold', color: '#2d3436', flex: 1 },
  location: { fontSize: 16, color: '#7f8c8d', marginTop: 5 },
  price: { fontSize: 20, fontWeight: 'bold', color: '#00b894', marginTop: 10 },
  divider: { height: 1, backgroundColor: '#dfe6e9', marginVertical: 20 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#2d3436', marginBottom: 8 },
  description: { fontSize: 15, color: '#636e72', lineHeight: 22 }
});