import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Screen01 from './src/screen/Screen01';
import Screen2 from './src/screen/Screen2';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Screen4 from './src/screen/Screen4';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Screen1'>
        <Stack.Screen name='Screen1' component={Screen01} options={{ headerShown: false }}/>
        <Stack.Screen name='Screen2' component={Screen2} options={{ headerTitle:"Chọn loại sản phẩm" }}/>
        <Stack.Screen name='Screen4' component={Screen4} options={{headerTitle : "Xác nhận thông tin"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
});
