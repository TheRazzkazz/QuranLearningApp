import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import theme from '../theme';

const Flashcard = ({ cardData, isFlipped = false }) => {
  if (!cardData) {
    return (
      <View style={[styles.container, styles.errorContainer]}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
        <Text style={styles.errorText}>Loading Quranic data...</Text>
      </View>
    );
  }

  const {
    root = '---',
    arabicRoot = '---',
    meaning = '',
    derived_words = [],
    quranic_snippet = {},
    theme: cardTheme = ''
  } = cardData;

  const renderArabicText = (text, style = {}) => (
    <Text style={[theme.fonts.arabic, styles.arabicText, style]}>
      {text || '---'}
    </Text>
  );

  const renderEnglishText = (text, style = {}) => (
    <Text style={[theme.fonts.english, styles.englishText, style]}>
      {text || '---'}
    </Text>
  );

  const renderRootSplit = () => {
    if (!root || typeof root !== 'string') return null;
    return (
      <Text style={styles.rootSplit}>
        {root.split('').join(' – ')}
      </Text>
    );
  };

  return (
    <View style={styles.container}>
      {!isFlipped ? (
        <View style={styles.cardFace}>
          {renderArabicText(arabicRoot || root, { fontSize: 42 })}
          {renderRootSplit()}
          {cardTheme && renderEnglishText(cardTheme, styles.themeText)}
        </View>
      ) : (
        <View style={styles.cardFace}>
          {renderArabicText(arabicRoot || root)}

          {meaning && renderEnglishText(meaning, styles.meaningText)}

          {derived_words.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Derived Words:</Text>
              {derived_words.slice(0, 3).map((word, index) => (
                <View key={`derived-${index}`} style={styles.derivedWord}>
                  {renderArabicText(word?.arabic)}
                  {renderEnglishText(word?.translation, styles.translation)}
                  {word?.verse && renderEnglishText(`Quran ${word.verse}`, styles.verse)}
                </View>
              ))}
            </View>
          )}

          {quranic_snippet?.text && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Quranic Verse:</Text>
              {renderArabicText(quranic_snippet.text, styles.quranicSnippet)}
              {renderEnglishText(quranic_snippet.reference, styles.reference)}
            </View>
          )}
        </View>
      )}
    </View>
  );
};

Flashcard.propTypes = {
  cardData: PropTypes.shape({
    root: PropTypes.string,
    arabicRoot: PropTypes.string,
    meaning: PropTypes.string,
    derived_words: PropTypes.arrayOf(
      PropTypes.shape({
        arabic: PropTypes.string,
        translation: PropTypes.string,
        verse: PropTypes.string
      })
    ),
    quranic_snippet: PropTypes.shape({
      text: PropTypes.string,
      reference: PropTypes.string
    }),
    theme: PropTypes.string
  }),
  isFlipped: PropTypes.bool
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    borderRadius: theme.radius.card,
    padding: theme.spacing.lg,
    margin: theme.spacing.md,
    shadowColor: theme.colors.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 6,
    minHeight: 320,
    justifyContent: 'center'
  },
  cardFace: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  arabicText: {
    textAlign: 'center',
    color: theme.colors.primary,
    lineHeight: 48
  },
  rootSplit: {
    fontSize: theme.fontSize.medium,
    color: theme.colors.secondary,
    textAlign: 'center',
    marginTop: theme.spacing.xs
  },
  englishText: {
    textAlign: 'center',
    color: theme.colors.textDark
  },
  meaningText: {
    fontSize: theme.fontSize.medium,
    marginVertical: theme.spacing.sm,
    fontFamily: 'Roboto-Medium'
  },
  themeText: {
    fontSize: theme.fontSize.small,
    color: theme.colors.secondary,
    fontFamily: 'Roboto-Bold'
  },
  section: {
    marginVertical: theme.spacing.sm
  },
  sectionTitle: {
    fontSize: theme.fontSize.small,
    fontWeight: 'bold',
    color: theme.colors.primary,
    marginBottom: theme.spacing.xs,
    textAlign: 'center'
  },
  derivedWord: {
    marginBottom: theme.spacing.sm,
    alignItems: 'center'
  },
  translation: {
    fontSize: theme.fontSize.medium,
    marginTop: theme.spacing.xs
  },
  verse: {
    fontSize: theme.fontSize.small,
    color: theme.colors.textSecondary,
    fontStyle: 'italic'
  },
  quranicSnippet: {
    lineHeight: 36,
    marginVertical: theme.spacing.sm
  },
  reference: {
    fontSize: theme.fontSize.small,
    color: theme.colors.textSecondary
  },
  errorContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  errorText: {
    marginTop: theme.spacing.md,
    color: theme.colors.textSecondary
  }
});

export default Flashcard;
