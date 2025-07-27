import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ImageBackground,
} from 'react-native';
import backgroundImage from '../assets/backgrounds/pattern.png';

const decks = [
  { id: 'core30', title: 'Core 30 Roots' },
  { id: 'divineNames', title: 'Divine Names of Allah' },
];

export default function DeckSelectionScreen({ navigation }) {
const handleSelectDeck = (deckId) => {
  if (deckId === 'core30') {
    navigation.navigate('FlashcardScreen', { deckId });
  } else if (deckId === 'divineNames') {
    navigation.navigate('DivineNamesScreen');
  }
};

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.heading}>Choose a Deck</Text>
        <FlatList
          data={decks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.deckButton}
              onPress={() => handleSelectDeck(item.id)}
            >
              <Text style={styles.deckText}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
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
    padding: 20,
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#14532d',
    marginBottom: 20,
  },
  deckButton: {
    backgroundColor: 'white',
    borderColor: '#14532d',
    borderWidth: 2,
    borderRadius: 16,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginBottom: 16,
  },
  deckText: {
    color: '#14532d',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
});