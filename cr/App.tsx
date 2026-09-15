import { StyleSheet, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import {WelcomeScreen} from './Components/WelcomeScreen/WelcomeScreen';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <WelcomeScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});


