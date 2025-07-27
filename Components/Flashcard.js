import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import theme from '../theme';

export default function Flashcard({ word }) {
  if (!word) {
    return (
      <View style={styles.container}>
        <Text style={styles.warning}>No word loaded yet.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Arabic Root (if needed, add root-specific styling) */}
      <Text style={styles.arabic}>{word.root}</Text>

      {/* English Meaning */}
      <Text style={styles.english}>{word.meaning}</Text>

      {/* Quranic Snippet */}
      {word.quranic_snippet && (
        <Text style={styles.quranicSnippet}>{word.quranic_snippet}</Text>
      )}

      {/* Theme + Frequency */}
      <Text style={styles.metadata}>
        Theme: {word.theme} | Frequency: {word.frequency}
      </Text>

      {/* Derived Words */}
      {word.derived_words && (
        <>
          <Text style={styles.derivedLabel}>Derived Words:</Text>
          {word.derived_words.map((dw, i) => (
            <Text key={i} style={styles.derivedWord}>{dw}</Text>
          ))}
        </>
      )}

      {/* Reflection Prompt */}
      <Text style={styles.reflectionPrompt}>{word.reflection_prompt}</Text>
    </View>
  );
}

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
  },
  arabic: {
    ...theme.fonts.arabic,
    fontSize: 32,
    textAlign: 'center',
    marginBottom: theme.spacing.sm,
  },
  english: {
    fontSize: theme.fontSize.medium,
    color: theme.colors.textDark,
    textAlign: 'center',
    marginBottom: theme.spacing.sm,
  },
  quranicSnippet: {
    fontSize: theme.fontSize.medium,
    color: theme.colors.primary,
    textAlign: 'center',
    marginBottom: theme.spacing.sm,
    fontFamily: 'Neirizi', // or your preferred Arabic font
  },
  metadata: {
    fontSize: theme.fontSize.small,
    color: theme.colors.textDark,
    textAlign: 'center',
    marginBottom: theme.spacing.sm,
  },
  derivedLabel: {
    fontSize: theme.fontSize.medium,
    fontWeight: 'bold',
    color: theme.colors.primary,
    textAlign: 'center',
    marginTop: theme.spacing.md,
  },
  derivedWord: {
    fontSize: theme.fontSize.medium,
    color: theme.colors.primary,
    textAlign: 'center',
    fontFamily: 'Neirizi',
  },
  reflectionPrompt: {
    fontSize: theme.fontSize.small,
    color: theme.colors.textDark,
    fontStyle: 'italic',
    marginTop: theme.spacing.md,
    textAlign: 'center',
  },
  warning: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
  },
});
