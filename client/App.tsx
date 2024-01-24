import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';

import Container from './Container';
import Home from "./app/screens/home.screen";
import Play from "./app/screens/play.screen";

import { store } from './app/server/store';

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
      <Provider store={store}>
        <Container>
          <StatusBar backgroundColor='#ffffff' translucent={false} />
          <Stack.Navigator initialRouteName="Home" screenOptions={{
            headerShown: false
          }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Play" component={Play} />
          </Stack.Navigator>
        </Container>
      </Provider>
    </NavigationContainer>
  );
}

