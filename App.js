import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';

import MainMenuScreen from './Screens/MainMenuScreen';
import RootWordsScreen from './Screens/RootWordsScreen';
import DeckSelectionScreen from './Screens/DeckSelectionScreen';
import DivineNamesScreen from './Screens/DivineNamesScreen';
import NameDetailScreen from './Screens/NameDetailScreen';
import RootWordsDetailScreen from './Screens/RootWordsDetailScreen';
import DivineNamesDetailScreen from './Screens/DivineNamesDetailScreen';
import LessonPathScreen from './Screens/LessonPathScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    Font.loadAsync({
      'Scheherazade': require('./assets/fonts/ScheherazadeNew-Regular.ttf'),
    }).then(() => setFontsLoaded(true));
  }, []);

  if (!fontsLoaded) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MainMenu"
        screenOptions={{
          headerStyle: { backgroundColor: 'transparent' },
          headerTitleStyle: { fontWeight: 'bold', fontSize: 20, color: '#ffffff' },
          headerTintColor: '#ffffff',
          headerTransparent: true,
        }}
      >

        <Stack.Screen
          name="MainMenu"
          component={MainMenuScreen}
          options={{
            headerTitle: () => (
              <View style={styles.headerBubble}>
                <Text style={styles.bismillahArabic}>﷽</Text>
              </View>
            ),
            headerBackVisible: false,
          }}
        />

        <Stack.Screen
  name="LessonPath"
  component={LessonPathScreen}
  options={({ navigation }) => ({
    headerTitle: () => (
      <View style={styles.headerBubble}>
        <Text style={styles.headerTextGreen}>Journey</Text>
      </View>
    ),
    headerBackTitle: '',
    headerLeft: () => (
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.headerButton}
      >
        <Text style={styles.headerTextGreen}>Back</Text>
      </TouchableOpacity>
    ),
  })}
/>
        <Stack.Screen
          name="DeckSelection"
          component={DeckSelectionScreen}
          options={({ navigation }) => ({
            headerTitle: () => (
              <View style={styles.headerBubble}>
                <Text style={styles.headerTextDark}>Choose a Deck</Text>
              </View>
            ),
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate('MainMenu')}
                style={styles.headerButton}
              >
                <Text style={styles.headerTextDark}>Main Menu</Text>
              </TouchableOpacity>
            ),
          })}
        />

        <Stack.Screen
          name="RootWordsScreen"
          component={RootWordsScreen}
          options={({ navigation }) => ({
            headerTitle: () => (
              <View style={styles.headerBubble}>
                <Text style={styles.headerTextGreen}>RootWords</Text>
              </View>
            ),
            headerBackTitle: '',
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate('MainMenu')}
                style={styles.headerButton}
              >
                <Text style={styles.headerTextGreen}>Main Menu</Text>
              </TouchableOpacity>
            ),
          })}
        />

        <Stack.Screen
          name="RootWordsDetail"
          component={RootWordsDetailScreen}
          options={({ navigation }) => ({
            headerTitle: () => (
              <View style={styles.headerBubble}>
                <Text style={styles.headerTextGreen}>Root Word Detail</Text>
              </View>
            ),
            headerBackTitle: '',
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={styles.headerButton}
              >
                <Text style={styles.headerTextGreen}>Back</Text>
              </TouchableOpacity>
            ),
          })}
        />

        <Stack.Screen
          name="DivineNamesScreen"
          component={DivineNamesScreen}
          options={({ navigation }) => ({
            headerTitle: () => (
              <View style={styles.headerBubble}>
                <Text style={styles.headerTextGreen}>Divine Names</Text>
              </View>
            ),
            headerBackTitle: '',
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate('DeckSelection')}
                style={styles.headerButton}
              >
                <Text style={styles.headerTextGreen}>Back</Text>
              </TouchableOpacity>
            ),
          })}
        />

        <Stack.Screen
  name="DivineNamesDetail"
  component={DivineNamesDetailScreen}
  options={({ navigation }) => ({
    headerTitle: () => (
      <View style={styles.headerBubble}>
        <Text style={styles.headerTextGreen}>Name Detail</Text>
      </View>
    ),
    headerBackTitle: '',
    headerLeft: () => (
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.headerButton}
      >
        <Text style={styles.headerTextGreen}>Back</Text>
      </TouchableOpacity>
    ),
  })}
/>
        <Stack.Screen
          name="NameDetailScreen"
          component={NameDetailScreen}
          options={({ navigation }) => ({
            headerTitle: () => (
              <View style={styles.headerBubble}>
                <Text style={styles.headerTextGreen}>Name Detail</Text>
              </View>
            ),
            headerBackTitle: '',
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={styles.headerButton}
              >
                <Text style={styles.headerTextGreen}>Back</Text>
              </TouchableOpacity>
            ),
          })}
        />
      </Stack.Navigator>

      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerBubble: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 8,
  },
  headerButton: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    marginLeft: 10,
  },
  headerTextDark: {
    color: '#14532d',
    fontWeight: 'bold',
    fontSize: 18,
  },
  headerTextGreen: {
    color: '#006400',
    fontWeight: 'bold',
    fontSize: 18,
  },
  bismillahArabic: {
    fontSize: 28,
    fontFamily: 'Scheherazade',
    color: '#14532d',
    textAlign: 'center',
  },
});
