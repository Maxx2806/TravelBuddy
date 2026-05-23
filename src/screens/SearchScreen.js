import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SearchScreen({ navigation }) {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query.trim()) {
      navigation.navigate('SearchResult', { query });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTitle}>Search</Text>
      <View style={styles.searchBox}>
        <TextInput
          style={styles.input}
          placeholder="Cari destinasi..."
          value={query}
          onChangeText={setQuery}
          onSubmitEditing={handleSearch}
        />
        <TouchableOpacity style={styles.button} onPress={handleSearch}>
          <Ionicons name="search" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f6fa', padding: 20 },
  headerTitle: { fontSize: 26, fontWeight: 'bold', color: '#2d3436', marginTop: 20, marginBottom: 20 },
  searchBox: { flexDirection: 'row', backgroundColor: '#fff', borderRadius: 10, overflow: 'hidden', elevation: 2 },
  input: { flex: 1, paddingHorizontal: 15, fontSize: 16 },
  button: { backgroundColor: '#00b894', padding: 15, justifyContent: 'center', alignItems: 'center' }
});