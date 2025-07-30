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

const LESSON_MAP = [
  {
    unitTitle: 'Unit 1: Identity & Existence',
    lessons: [
      { id: '1.1', title: 'Names of Mercy', roots: ['ر ح م', 'غ ف ر', 'و د د'] },
      { id: '1.2', title: 'Creator & Originator', roots: ['خ ل ق', 'ب د ع', 'ص و ر'] },
      { id: '1.3', title: 'Our Soul & Self', roots: ['ن ف س', 'ر و ح', 'ق ل ب'] },
      { id: '1.4', title: 'The Human Form', roots: ['ع ق ل', 'ج س د', 'ب ص ر'] },
      { id: '1.5', title: 'Our Purpose', roots: ['ع ب د', 'خ ل ف', 'ع م ل'] },
      { id: '1.6', title: 'Life on Earth', roots: ['د ن ي', 'ز ي ن', 'ح ي ي'] },
      { id: '1.7', title: 'The Body & Senses', roots: ['س م ع', 'ب ص ر', 'ل س ن'] },
      { id: '1.8', title: 'Spiritual Hierarchy', roots: ['ع ب د', 'م ل ك', 'ج ن ن'] },
      { id: '1.9', title: 'Gender & Creation', roots: ['ذ ك ر', 'أ ن ث ى', 'ن س ل'] },
      { id: '1.10', title: 'Animals & Nature', roots: ['ب ه م', 'ط ي ر', 'ن ع م'] },
    ],
  },
];

export default function LessonPathScreen({ navigation }) {
  const [expandedUnits, setExpandedUnits] = useState([]);
  const [completedLessons, setCompletedLessons] = useState(['1.1']);
  const [unlockedLessons, setUnlockedLessons] = useState(['1.1', '1.2', '1.3']);

  const toggleExpand = (index) => {
    setExpandedUnits((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const handleLessonPress = (lessonId) => {
    navigation.navigate('LessonScreen', { lessonId });
  };

  return (
    <ImageBackground
      source={desertBackground}
      resizeMode="cover"
      style={styles.background}
    >
      <SafeAreaView style={styles.safeArea}>
        <ScrollView style={styles.container}>
          {LESSON_MAP.map((unit, uIndex) => (
            <View key={uIndex} style={styles.unitCard}>
              <TouchableOpacity onPress={() => toggleExpand(uIndex)}>
                <Text style={styles.unitTitle}>{unit.unitTitle}</Text>
              </TouchableOpacity>

              {expandedUnits.includes(uIndex) &&
                unit.lessons.map((lesson) => {
                  const isUnlocked = unlockedLessons.includes(lesson.id);
                  const isCompleted = completedLessons.includes(lesson.id);
                  const statusStyle = isCompleted
                    ? styles.completed
                    : isUnlocked
                    ? styles.unlocked
                    : styles.locked;

                  return (
                    <TouchableOpacity
                      key={lesson.id}
                      onPress={() => isUnlocked && handleLessonPress(lesson.id)}
                      disabled={!isUnlocked}
                      style={[styles.lessonTile, statusStyle]}
                    >
                      <View>
                        <Text style={styles.lessonText}>
                          {lesson.id} – {lesson.title}
                        </Text>
                        <Text style={styles.rootsText}>{lesson.roots.join(', ')}</Text>
                      </View>
                      {isCompleted ? (
                        <Ionicons name="checkmark-done" size={20} color="white" />
                      ) : isUnlocked ? (
                        <Ionicons name="lock-open" size={20} color="white" />
                      ) : (
                        <Ionicons name="lock-closed" size={20} color="white" />
                      )}
                    </TouchableOpacity>
                  );
                })}
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  container: {
    paddingTop: 100, // ⬅️ Added space below the translucent header
    paddingBottom: 40,
    paddingHorizontal: 10,
  },
  unitCard: {
    marginBottom: 16,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  unitTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 8,
  },
  lessonTile: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 8,
    padding: 12,
    marginVertical: 4,
  },
  unlocked: {
    backgroundColor: '#27ae60',
  },
  locked: {
    backgroundColor: '#bdc3c7',
  },
  completed: {
    backgroundColor: '#2980b9',
  },
  lessonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  rootsText: {
    color: 'white',
    fontSize: 14,
    fontStyle: 'italic',
    marginTop: 2,
  },
});
