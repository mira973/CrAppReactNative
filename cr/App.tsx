import { StyleSheet, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import {WelcomeScreen} from './Components/WelcomeScreen/WelcomeScreen';
import { LoginPage } from './Components/WelcomeScreen/LogInPage';
import { SignUpPage } from './Components/WelcomeScreen/SignUpPage';

export default function App() {
  return (
    <View style={styles.appContainer}>
      {/* <WelcomeScreen /> */}
      {/* <LoginPage></LoginPage> */}
      <SignUpPage></SignUpPage>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});


