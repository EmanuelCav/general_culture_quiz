import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from 'expo-status-bar';

import Container from './Container';
import Home from "./app/screens/home.screen";

const Stack = createNativeStackNavigator()

export default function App() {

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'transparent'
    },
  };


  return (
    <NavigationContainer theme={theme}>
      <Container>
        <StatusBar backgroundColor='#ffffff' translucent={false} />
        <Stack.Navigator initialRouteName="Home" screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </Container>
    </NavigationContainer>
  );
}

