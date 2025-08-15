import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LESSON_ACTIVITY_MAP = {
  '1.1': [
    'MatchPairs',
    'MultipleChoice',
    'TapInOrder',
    'ReorderWords',
    'SentenceCloze',
  ],
  '1.2': [
    'MiniFlashcardRecall',
    'RootFamilyTree',
    'MultipleChoice',
  ],
  // 🔒 Add more lessons here as you build them
};

export default function LessonActivityEngine({ route, navigation }) {
  const { lessonId } = route.params;
  const activities = LESSON_ACTIVITY_MAP[lessonId] || [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [completed, setCompleted] = useState(false);

  const handleNext = async () => {
    if (currentIndex < activities.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      await AsyncStorage.setItem(`lesson_${lessonId}_completed`, 'true');
      setCompleted(true);
    }
  };

  const renderActivity = () => {
    const type = activities[currentIndex];

    return (
      <View style={styles.card}>
        <Text style={styles.activityLabel}>{type}</Text>
        {/* 🧠 Replace this with actual component matching `type` */}
        <TouchableOpacity onPress={handleNext} style={styles.button}>
          <Text style={styles.buttonText}>Complete Activity</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.lessonTitle}>Lesson {lessonId}</Text>

      {!completed ? (
        <View style={styles.activityContainer}>
          {renderActivity()}
        </View>
      ) : (
        <View style={styles.card}>
          <Text style={styles.completedText}>✅ Lesson Complete!</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('LessonPath')}
          >
            <Text style={styles.buttonText}>Return to Path</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  lessonTitle: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  activityContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    padding: 24,
    borderRadius: 12,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
  },
  activityLabel: { fontSize: 20, marginBottom: 16 },
  button: {
    marginTop: 16,
    padding: 12,
    backgroundColor: '#007bff',
    borderRadius: 8,
  },
  buttonText: { color: '#fff', fontWeight: 'bold' },
  completedText: { fontSize: 22, color: 'green', marginBottom: 16 },
});
