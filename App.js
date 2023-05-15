import React from 'react';
import Navbar from './components/Navbar';
import { NavigationContainer } from '@react-navigation/native';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import ForYou from './components/ForYou';
import LinearGradient from 'react-native-linear-gradient';
import CardContainer from './components/CardContainer';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
      <LinearGradient colors={['#082434', '#083c4c']} style={styles.container}>
        <CardContainer/>
        <Navbar/>
      </LinearGradient>
  )
}

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    flexDirection: 'column-reverse',
  },
})

export default App;
