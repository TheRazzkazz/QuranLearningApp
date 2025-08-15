import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import backgroundImage from '../assets/backgrounds/pattern.png';

export default function MainMenuScreen({ navigation }) {
  return (
    <ImageBackground
      source={backgroundImage}
      resizeMode="cover"
      style={styles.background}
    >
      <View style={styles.container}>
        {/* ✅ White background box with green text */}
        <View style={styles.titleBox}>
          <Text style={styles.titleText}>Quranic Words</Text>
        </View>

        {/* ✅ Button to Flashcard Decks */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('DeckSelection')}
        >
          <Text style={styles.buttonText}>Choose a Deck</Text>
        </TouchableOpacity>

        {/* ✅ Button to Lesson Path Journey */}
        <TouchableOpacity
          style={[styles.button, { marginTop: 16 }]} // Add space between buttons
          onPress={() => navigation.navigate('LessonPath')}
        >
          <Text style={styles.buttonText}>Begin Journey</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'transparent',
  },
  titleBox: {
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#14532d',
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  titleText: {
    color: '#14532d',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#14532d',
    backgroundColor: 'white',
  },
  buttonText: {
    color: '#14532d',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
});
