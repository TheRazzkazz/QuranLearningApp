import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const samplePairs = [
  { id: 1, left: 'ر ح م', right: 'Mercy' },
  { id: 2, left: 'غ ف ر', right: 'Forgiveness' },
  { id: 3, left: 'و د د', right: 'Love' },
];

export default function MatchPairs({ onComplete }) {
  const [matches, setMatches] = useState([]);
  const [selectedLeft, setSelectedLeft] = useState(null);

  const handleLeftSelect = (item) => {
    setSelectedLeft(item);
  };

  const handleRightSelect = (right) => {
    if (selectedLeft && selectedLeft.right === right) {
      setMatches([...matches, selectedLeft.id]);
      setSelectedLeft(null);
    } else {
      setSelectedLeft(null); // reset on wrong match
    }
  };

  const isCompleted = matches.length === samplePairs.length;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Match the Arabic root with its meaning</Text>
      <View style={styles.row}>
        <View style={styles.column}>
          {samplePairs.map((pair) => (
            <TouchableOpacity
              key={pair.id}
              style={[
                styles.item,
                selectedLeft?.id === pair.id && styles.selected,
              ]}
              onPress={() => handleLeftSelect(pair)}
              disabled={matches.includes(pair.id)}
            >
              <Text style={styles.arabic}>{pair.left}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.column}>
          {samplePairs
            .map((pair) => pair.right)
            .sort(() => Math.random() - 0.5)
            .map((right, index) => (
              <TouchableOpacity
                key={index}
                style={styles.item}
                onPress={() => handleRightSelect(right)}
              >
                <Text style={styles.text}>{right}</Text>
              </TouchableOpacity>
            ))}
        </View>
      </View>
      {isCompleted && (
        <TouchableOpacity style={styles.button} onPress={onComplete}>
          <Text style={styles.buttonText}>Complete Activity ✅</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 18, fontWeight: '600', marginBottom: 20 },
  row: { flexDirection: 'row', justifyContent: 'space-between' },
  column: { flex: 1 },
  item: {
    backgroundColor: '#F1F5F9',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  arabic: {
    fontSize: 20,
    fontFamily: 'Scheherazade',
    color: '#1C5C8F',
  },
  text: { fontSize: 16 },
  selected: {
    backgroundColor: '#A5D8FF',
  },
  button: {
    marginTop: 20,
    padding: 12,
    backgroundColor: '#1C5C8F',
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});
