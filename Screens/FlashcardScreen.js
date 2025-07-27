import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import core30Roots from '../data/core30Roots.js';
import theme from '../appTheme.js';
import backgroundImage from '../assets/backgrounds/pattern.png';

export default function FlashcardScreen() {
  const route = useRoute();
  const { deckId } = route.params || {};

  const deckData = deckId === 'core30' ? core30Roots : [];

  const [index, setIndex] = useState(0);
  const [showEnglish, setShowEnglish] = useState(false);

  const currentCard = deckData[index];

  const handleNext = () => {
    setShowEnglish(false);
    setIndex((prevIndex) => (prevIndex + 1) % deckData.length);
  };
  const handlePrevious = () => {
  setShowEnglish(false);
  setIndex((prevIndex) =>
    prevIndex === 0 ? deckData.length - 1 : prevIndex - 1
  );
};

  return (
    <ImageBackground
      source={backgroundImage}
      resizeMode="cover"
      style={styles.background}
      imageStyle={{ opacity: 1 }}
    >
      <View style={styles.content}>
        {currentCard ? (
          <TouchableOpacity
            style={styles.card}
            onPress={() => setShowEnglish(!showEnglish)}
          >
            {showEnglish ? (
              <>
                <Text style={styles.english}>{currentCard.meaning}</Text>

                <Text style={styles.metaLabel}>Theme:</Text>
                <Text style={styles.metaValue}>{currentCard.theme || '—'}</Text>

                <Text style={styles.metaLabel}>Frequency:</Text>
                <Text style={styles.metaValue}>
                  {currentCard.frequency ? `${currentCard.frequency}` : '—'}
                </Text>

                {currentCard.derived_words?.length ? (
                  <>
                    <Text style={styles.derivedLabel}>Derived Words:</Text>
                    <View style={styles.derivedContainer}>
                      {currentCard.derived_words.map((word, index) => {
                        if (typeof word !== 'string' || !word.includes(' – ')) return null;

                        const [arabic, english] = word.split(' – ');
                        return (
                          <View key={index} style={{ marginBottom: theme.spacing.xs }}>
                            <Text style={styles.derivedArabic}>{arabic.trim()}</Text>
                            <Text style={styles.derivedEnglish}>({english.trim()})</Text>
                          </View>
                        );
                      })}
                    </View>
                  </>
                ) : null}
              </>
            ) : (
              <>
  <Text style={styles.arabic}>{currentCard.root}</Text>

  {currentCard.root && (
    <Text style={styles.rootSplit}>
      {currentCard.root.replace(/[\u064B-\u0652]/g, '').split('').join(' – ')}
    </Text>
  )}
</>
            )}
          </TouchableOpacity>
        ) : (
          <Text style={{ color: 'red', padding: 20 }}>
            ⚠️ No flashcard loaded. Something went wrong.
          </Text>
        )}

<View style={styles.buttonRow}>
  <TouchableOpacity onPress={handlePrevious} style={styles.button}>
    <Text style={styles.buttonText}>Previous</Text>
  </TouchableOpacity>

  <TouchableOpacity onPress={handleNext} style={styles.button}>
    <Text style={styles.buttonText}>Next</Text>
  </TouchableOpacity>
</View>

      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing.md,
  },
  card: {
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    borderRadius: theme.radius.card,
    padding: theme.spacing.lg,
    shadowColor: theme.colors.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 6,
    marginBottom: theme.spacing.md,
  },
  arabic: {
    ...theme.fonts.arabic,
    marginBottom: theme.spacing.sm,
  },
  english: {
    fontSize: theme.fontSize.medium,
    color: theme.colors.textDark,
    textAlign: 'center',
  },
  metaLabel: {
    fontSize: theme.fontSize.small,
    fontWeight: 'bold',
    color: theme.colors.primary,
    marginTop: theme.spacing.md,
    textAlign: 'center',
  },
  metaValue: {
    fontSize: theme.fontSize.small,
    color: theme.colors.textDark,
    textAlign: 'center',
    marginBottom: theme.spacing.sm,
  },
  derivedLabel: {
    marginTop: theme.spacing.md,
    fontWeight: 'bold',
    color: theme.colors.primary,
    textAlign: 'center',
  },
  derivedContainer: {
    marginTop: theme.spacing.sm,
    alignItems: 'center',
  },
  derivedArabic: {
    ...theme.fonts.arabic,
    fontSize: theme.fontSize.large,
    textAlign: 'center',
  },
  derivedEnglish: {
    fontSize: theme.fontSize.small,
    color: theme.colors.textDark,
    textAlign: 'center',
    marginBottom: theme.spacing.xs,
  },
  button: {
    backgroundColor: theme.colors.primary,
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.lg,
    borderRadius: theme.radius.button,
    marginTop: theme.spacing.md,
  },
  buttonText: {
    color: theme.colors.textLight,
    fontWeight: 'bold',
    fontSize: theme.fontSize.medium,
  },
    rootSplit: {
    fontSize: theme.fontSize.medium,
    color: theme.colors.secondary,
    textAlign: 'center',
    marginTop: theme.spacing.xs,
    fontFamily: 'Scheherazade',
  },

});
