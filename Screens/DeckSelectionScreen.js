import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from 'react-native';
import backgroundImage from '../assets/backgrounds/pattern.png';

const decks = [
  { id: 'core30', title: 'Core 30 Roots' },
  { id: 'divineNames', title: 'Divine Names of Allah' },
];

export default function DeckSelectionScreen({ navigation }) {
  const handleSelectDeck = (deckId) => {
    if (deckId === 'core30') {
      navigation.navigate('RootWordsScreen', { deckId });
    } else if (deckId === 'divineNames') {
      navigation.navigate('DivineNamesScreen');
    }
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.background} resizeMode="cover">
      <View style={styles.centeredContainer}>
        {decks.map((deck) => (
          <TouchableOpacity
            key={deck.id}
            style={styles.deckButton}
            onPress={() => handleSelectDeck(deck.id)}
          >
            <Text style={styles.deckText}>{deck.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ImageBackground>
  );
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  deckButton: {
    backgroundColor: '#ffffff',
    borderColor: '#14532d',
    borderWidth: 2,
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 24,
    marginVertical: 12,
    width: width * 0.85,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
  },
  deckText: {
    color: '#14532d',
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
  },
});