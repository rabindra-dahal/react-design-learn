import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Login from './components/Login';
import Header from './components/Header';
import HeroImage from './components/HeroImage';
import Body from './components/Body';

export default function App() {
  return (
    <ScrollView style={styles.container} stickyHeaderIndices={[0]}>
      <Header />
      <HeroImage />
      <Body />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
