import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const desertBackground = require('../assets/backgrounds/desert-stream.png');

const DEFAULT_EMOJIS = ['🌙', '🧠', '❤️', '🌍', '🔥', '🌱', '🇮', '👼', '⚖️', '🐾'];

const LESSON_MAP = [
  {
    unitTitle: 'Unit 1: Identity & Existence',
    lessons: [
      {
        id: '1.1',
        title: 'Names of Mercy',
        roots: ['ر - ح - م', 'غ - ف - ر', 'و - د - د'],
        emoji: '🌙',
        status: 'completed',
      },
      {
        id: '1.2',
        title: 'Creator & Originator',
        roots: ['خ - ل - ق', 'ب - د - ع', 'ص - و - ر'],
        emoji: '🧠',
        status: 'unlocked',
      },
      {
        id: '1.3',
        title: 'Our Soul & Self',
        roots: ['ن - ف - س', 'ر - و - ح', 'ق - ل - ب'],
        emoji: '❤️',
        status: 'unlocked',
      },
      {
        id: '1.4',
        title: 'The Human Form',
        roots: ['ع - ق - ل', 'ج - س - د', 'ب - ص - ر'],
        emoji: '🌍',
        status: 'locked',
      },
      {
        id: '1.5',
        title: 'Our Purpose',
        roots: ['ع - ب - د', 'خ - ل - ف', 'ع - م - ل'],
        emoji: '🔥',
        status: 'locked',
      },
      {
        id: '1.6',
        title: 'Life on Earth',
        roots: ['د - ن - ي', 'ز - ر - ع', 'ح - ي - ي'],
        emoji: '🌱',
        status: 'locked',
      },
      {
        id: '1.7',
        title: 'The Body & Senses',
        roots: ['س - م - ع', 'ب - ص - ر', 'ل - س - ن'],
        emoji: '🇮',
        status: 'locked',
      },
      {
        id: '1.8',
        title: 'Spiritual Hierarchy',
        roots: ['ع - ب - د', 'م - ل - ك', 'ج - ن - ن'],
        emoji: '👼',
        status: 'locked',
      },
      {
        id: '1.9',
        title: 'Gender & Creation',
        roots: ['ذ - ك - ر', 'أ - ن - ث', 'ن - س - ل'],
        emoji: '⚖️',
        status: 'locked',
      },
      {
        id: '1.10',
        title: 'Animals & Nature',
        roots: ['ب - ه - م', 'ط - ي - ر', 'ن - ع - م'],
        emoji: '🐾',
        status: 'locked',
      },
    ],
  },
];

export default function LessonPathScreen({ navigation }) {
  const [expandedUnits, setExpandedUnits] = useState(new Set());

  const toggleUnit = (unitTitle) => {
    setExpandedUnits((prev) => {
      const next = new Set(prev);
      if (next.has(unitTitle)) {
        next.delete(unitTitle);
      } else {
        next.add(unitTitle);
      }
      return next;
    });
  };

  return (
    <ImageBackground source={desertBackground} style={styles.background}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('MainMenu')}>
            <Text style={styles.navButton}>← Main Menu</Text>
          </TouchableOpacity>
        </View>

        <ScrollView contentContainerStyle={styles.scrollContent}>
          {LESSON_MAP.map((unit) => {
            const isExpanded = expandedUnits.has(unit.unitTitle);
            return (
              <View key={unit.unitTitle} style={styles.unitContainer}>
                <TouchableOpacity onPress={() => toggleUnit(unit.unitTitle)} style={styles.unitTitleTile}>
                  <Text style={styles.unitTitleText}>
                    {isExpanded ? '▼' : '▶'} {unit.unitTitle}
                  </Text>
                </TouchableOpacity>

                {isExpanded &&
                  unit.lessons.map((lesson, index) => {
                    const icon = lesson.emoji || DEFAULT_EMOJIS[index % DEFAULT_EMOJIS.length];
                    const isLocked = lesson.status === 'locked';

                    return (
                      <TouchableOpacity
                        key={lesson.id}
                        style={[
                          styles.lessonTile,
                          lesson.status === 'completed' && styles.completedTile,
                          lesson.status === 'unlocked' && styles.unlockedTile,
                          lesson.status === 'locked' && styles.lockedTile,
                        ]}
                        disabled={isLocked}
                        onPress={() => {
                          if (!isLocked)
                            navigation.navigate('LessonActivityEngine', { lessonId: lesson.id });
                        }}
                      >
                        <View style={styles.lessonTextContainer}>
                          <Text style={styles.lessonTitle}>
                            {icon} {lesson.id} – {lesson.title}
                          </Text>
                          <Text style={styles.lessonSubtitle}>3 Roots • 10 XP</Text>

                          <View style={styles.rootsRow}>
                            {lesson.roots.map((root, rootIndex) => (
                              <View key={rootIndex} style={styles.rootGroupRow}>
                                {root.split(' - ').map((letter, letterIndex) => (
                                  <View key={letterIndex} style={styles.letterPill}>
                                    <Text
                                      style={[
                                        styles.arabicLetter,
                                        ['ف', 'د', 'ل', 'ق'].includes(letter) && { marginTop: 10 },
                                        letter === 'ب' && { marginTop: 5 },
                                      ]}
                                    >
                                      {letter}
                                    </Text>
                                  </View>
                                ))}
                              </View>
                            ))}
                          </View>
                        </View>

                        {lesson.status === 'completed' && (
                          <Ionicons name="checkmark" size={24} color="white" />
                        )}
                        {lesson.status === 'unlocked' && (
                          <Ionicons name="lock-open" size={24} color="white" />
                        )}
                        {lesson.status === 'locked' && (
                          <Ionicons name="lock-closed" size={24} color="white" />
                        )}
                      </TouchableOpacity>
                    );
                  })}
              </View>
            );
          })}
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 10,
  },
  navButton: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1C5C8F',
    paddingVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 6,
  },
  scrollContent: {
    paddingBottom: 30,
  },
  unitContainer: {
    marginBottom: 20,
  },
  unitTitleTile: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1.5,
    borderColor: '#FFD700',
    shadowColor: '#FFD700',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
  unitTitleText: {
    fontSize: 18,
    fontWeight: '800',
    color: 'white',
    textAlign: 'left',
    letterSpacing: 0.5,
  },
  lessonTile: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  completedTile: {
    backgroundColor: '#1C5C8F',
  },
  unlockedTile: {
    backgroundColor: '#3F7D20',
  },
  lockedTile: {
    backgroundColor: '#DDD1B0',
  },
  lessonTextContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  lessonTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: 'white',
    marginBottom: 2,
  },
  lessonSubtitle: {
    fontSize: 12,
    color: 'white',
    marginBottom: 10,
  },
  rootsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 10,
  },
  rootGroupRow: {
    flexDirection: 'row-reverse',
    writingDirection: 'rtl',
    backgroundColor: 'rgba(255,255,255,0.07)',
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 8,
    marginRight: 8,
    marginBottom: 6,
    minWidth: 90,
    justifyContent: 'center',
    alignItems: 'center',
  },
  letterPill: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    marginHorizontal: 2,
    minWidth: 36,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  arabicLetter: {
    fontFamily: 'Scheherazade',
    fontSize: 28,
    lineHeight: 40,
    color: 'white',
    textAlign: 'center',
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
});
