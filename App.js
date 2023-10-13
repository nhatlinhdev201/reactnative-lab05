import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Screen01 from './src/screen/Screen01';
import Screen2 from './src/screen/Screen2';

export default function App() {
  return (
    <View style={styles.container}>
      <Screen01/>
      {/* <Screen2/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
});
