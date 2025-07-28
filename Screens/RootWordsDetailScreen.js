import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Dimensions,
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import backgroundImage from '../assets/backgrounds/pattern.png';

export default function RootWordsDetailScreen() {
  const route = useRoute();
  const { word } = route.params;

  return (
    <ImageBackground source={backgroundImage} style={styles.background} resizeMode="cover">
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.spacer} />

        {/* Root and Meaning */}
        <View style={styles.whiteBox}>
          <Text style={styles.arabic}>{word.root}</Text>
          <Text style={styles.english}>{word.meaning}</Text>
        </View>

        {/* Theme */}
        <View style={styles.whiteBox}>
          <Text style={styles.label}>Theme:</Text>
          <Text style={styles.value}>{word.theme || '—'}</Text>
        </View>

        {/* Frequency */}
        <View style={styles.whiteBox}>
          <Text style={styles.label}>Frequency:</Text>
          <Text style={styles.value}>
            {word.frequency ? `${word.frequency}x` : '—'}
          </Text>
        </View>

        {/* Derived Words */}
        {word.derived_words?.length > 0 && (
          <View style={styles.whiteBox}>
            <Text style={styles.label}>Derived Words:</Text>
            {word.derived_words.map((entry, idx) => {
              const parts = entry.split(' – ');
              const arabicPart = parts[0]?.trim();
              const englishPart = parts.length > 1 ? parts[1]?.trim() : null;

              return (
                <View key={idx} style={styles.derivedItem}>
                  {arabicPart && <Text style={styles.derivedArabic}>{arabicPart}</Text>}
                  {englishPart && <Text style={styles.derivedEnglish}>{englishPart}</Text>}
                </View>
              );
            })}
          </View>
        )}

        {/* Sample Verse */}
        {word.sampleVerse && (
          <View style={styles.whiteBox}>
            <Text style={styles.label}>Sample Verse:</Text>
            <Text style={styles.value}>{word.sampleVerse}</Text>
          </View>
        )}

        <View style={{ height: 40 }} />
      </ScrollView>
    </ImageBackground>
  );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    paddingHorizontal: 20,
    paddingBottom: 40,
    alignItems: 'center',
  },
  spacer: {
    height: 100,
  },
  whiteBox: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 16,
    marginBottom: 20,
    width: width * 0.92,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
  },
  arabic: {
    fontSize: 48,
    fontFamily: 'Scheherazade',
    color: '#14532d',
    textAlign: 'center',
    marginBottom: 8,
  },
  english: {
    fontSize: 20,
    color: '#14532d',
    textAlign: 'center',
  },
  label: {
    fontWeight: 'bold',
    color: '#006400',
    fontSize: 18,
    marginBottom: 6,
    textAlign: 'center',
  },
  value: {
    color: '#14532d',
    fontSize: 16,
    textAlign: 'center',
  },
  derivedItem: {
    marginBottom: 10,
    alignItems: 'center',
  },
  derivedArabic: {
    fontSize: 24,
    fontFamily: 'Scheherazade',
    color: '#14532d',
    textAlign: 'center',
  },
  derivedEnglish: {
    fontSize: 14,
    color: '#14532d',
    textAlign: 'center',
  },
});
