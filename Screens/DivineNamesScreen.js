import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import DivineNames from '../data/DivineNamesDeck.js';
import backgroundImage from '../assets/backgrounds/pattern.png';

export default function DivineNamesScreen({ navigation }) {
  const [expandedId, setExpandedId] = useState(null);

  const toggleCard = (id) => {
    setExpandedId((prevId) => (prevId === id ? null : id));
  };

  const renderItem = ({ item }) => {
  const isExpanded = expandedId === item.id;

  return (
    <TouchableOpacity onPress={() => toggleCard(item.id)} style={styles.card}>
      <Text style={styles.arabic}>{item.arabicName}</Text>

      {isExpanded && (
        <View style={styles.details}>
          <Text style={styles.english}>{item.englishMeaning}</Text>

          <View style={styles.detailBlock}>
            <Text style={styles.label}>Root:</Text>
            <Text style={styles.value}>{item.rootLetters}</Text>
          </View>

          <View style={styles.detailBlock}>
            <Text style={styles.label}>Related Words:</Text>
            <Text style={styles.value}>
              {(item.relatedWords || []).join('، ')}
            </Text>
          </View>

          {item.sampleVerse && (
            <View style={styles.detailBlock}>
              <Text style={styles.label}>Verse:</Text>
              <Text style={styles.value}>{item.sampleVerse}</Text>
            </View>
          )}
        </View>
      )}
    </TouchableOpacity>
  );
};

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.heading}>99 Names of Allah</Text>
        <FlatList
          data={DivineNames}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          contentContainerStyle={styles.list}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#14532d',
    marginBottom: 16,
  },
  list: {
    paddingBottom: 100,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#14532d',
    padding: 16,
    marginBottom: 12,
    width: 300,
    alignItems: 'center',
  },
  arabic: {
    fontSize: 28,
    color: '#14532d',
    fontFamily: 'Scheherazade',
  },
  english: {
    fontSize: 16,
    color: '#14532d',
    marginTop: 4,
    marginBottom: 10,
    textAlign: 'center',
  },
  details: {
    marginTop: 12,
    alignItems: 'center',
    width: '100%',
  },
  detailBlock: {
    marginTop: 8,
    width: '100%',
  },
  label: {
    fontWeight: 'bold',
    color: '#006400',
    marginBottom: 2,
  },
  value: {
    color: '#14532d',
  },
  verseBox: {
    backgroundColor: '#f0fdf4',
    borderWidth: 1,
    borderColor: '#14532d',
    borderRadius: 8,
    padding: 10,
    marginTop: 6,
  },
  verseRef: {
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#006400',
  },
  verseText: {
    color: '#14532d',
    fontSize: 14,
  },
});
