import React from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import backgroundImage from '../assets/backgrounds/pattern.png';

export default function NameDetailScreen({ route }) {
  const { nameData } = route.params;

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.arabic}>{nameData.arabicName}</Text>
        <Text style={styles.english}>{nameData.englishMeaning}</Text>

        <View style={styles.section}>
          <Text style={styles.label}>Root:</Text>
          <Text style={styles.value}>{nameData.root}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Related Words:</Text>
          <Text style={styles.value}>{nameData.relatedWords.join('، ')}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Qur’anic Verses:</Text>
          {nameData.foundIn.map((verse, index) => (
            <View key={index} style={styles.verseBox}>
              <Text style={styles.verseRef}>{verse.surah} ({verse.verse})</Text>
              <Text style={styles.verseText}>{verse.text}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    padding: 20,
    alignItems: 'center',
  },
  arabic: {
    fontSize: 36,
    color: '#14532d',
    fontFamily: 'Scheherazade',
    marginBottom: 10,
  },
  english: {
    fontSize: 18,
    color: '#14532d',
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    width: '100%',
    marginBottom: 16,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#006400',
    marginBottom: 4,
  },
  value: {
    fontSize: 16,
    color: '#14532d',
  },
  verseBox: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#14532d',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },
  verseRef: {
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#006400',
  },
  verseText: {
    fontSize: 16,
    color: '#14532d',
  },
});
