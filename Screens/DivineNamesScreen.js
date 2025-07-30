import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DivineNames from '../data/DivineNamesDeck.js';
import backgroundImage from '../assets/backgrounds/pattern.png';

export default function DivineNamesScreen() {
  const navigation = useNavigation();

  return (
    <ImageBackground source={backgroundImage} style={styles.background} resizeMode="cover">
      <View style={styles.container}>
        <Text style={styles.heading}>99 Names of Allah</Text>

        <ScrollView contentContainerStyle={styles.gridContainer}>
          {DivineNames.map((name) => (
            <TouchableOpacity
              key={name.id}
              style={styles.card}
              onPress={() => navigation.navigate('DivineNamesDetail', { name })}
            >
              <Text style={styles.arabic}>{name.arabicName}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
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
    marginBottom: 16,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingBottom: 100,
    paddingHorizontal: 10,
    width: '100%',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#14532d',
    padding: 16,
    marginBottom: 12,
    width: '48%',
    alignItems: 'center',
  },
  arabic: {
    fontSize: 28,
    fontFamily: 'Scheherazade',
    color: '#14532d',
  },
});