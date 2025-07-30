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

export default function DivineNamesDetailScreen() {
  const route = useRoute();
  const { name } = route.params;

  return (
    <ImageBackground source={backgroundImage} style={styles.background} resizeMode="cover">
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.spacer} />

        {/* Name and Meaning */}
        <View style={styles.whiteBox}>
          <Text style={styles.arabicLarge}>{name.arabicName}</Text>
          <Text style={styles.english}>{name.englishMeaning}</Text>
        </View>

        {/* Root Letters */}
        <View style={styles.whiteBox}>
          <Text style={styles.label}>Root Letters</Text>
          <Text style={styles.value}>{name.rootLetters || '—'}</Text>
        </View>

        {/* Derived Words */}
        {name.derived_words?.length > 0 && (
          <View style={styles.whiteBox}>
            <Text style={styles.label}>Derived Words</Text>
            {name.derived_words.map((entry, idx) => {
              const parts = entry.split(' (');
              const arabicPart = parts[0]?.trim();
              const englishPart = parts.length > 1 ? parts[1].replace(')', '').trim() : null;

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
        {name.sampleVerse && (
          <View style={styles.verseBox}>
            <Text style={styles.label}>Qur'anic Sample Verse</Text>
            <Text style={styles.verseArabic}>{name.sampleVerse.arabic}</Text>
            <Text style={styles.verseTranslation}>{name.sampleVerse.translation}</Text>
            <Text style={styles.verseReference}>{name.sampleVerse.reference}</Text>
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
  verseBox: {
    backgroundColor: '#f9f9f9',
    padding: 24,
    borderRadius: 16,
    marginBottom: 24,
    width: width * 0.92,
    alignItems: 'center',
    borderColor: '#dcdcdc',
    borderWidth: 1,
  },
  arabicLarge: {
    fontSize: 56,
    fontFamily: 'Scheherazade',
    color: '#14532d',
    textAlign: 'center',
    marginBottom: 12,
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
  verseArabic: {
    fontSize: 28,
    fontFamily: 'Scheherazade',
    color: '#14532d',
    textAlign: 'center',
    marginVertical: 10,
    lineHeight: 38,
  },
  verseTranslation: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginTop: 8,
    fontStyle: 'italic',
  },
  verseReference: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginTop: 6,
  },
});
