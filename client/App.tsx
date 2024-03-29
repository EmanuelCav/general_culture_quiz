import React from 'react'
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { persistStore } from "redux-persist";
import { PersistGate } from 'redux-persist/integration/react';

import Container from './Container';
import Home from "./app/screens/home.screen";
import Play from "./app/screens/play.screen";
import Ranking from "./app/screens/ranking.screen";
import Playing from "./app/screens/playing.screen";
import Options from "./app/screens/options.screen";
import Categories from "./app/screens/categories.screen";
import Statistics from "./app/screens/statistics.screen";
import Settings from "./app/screens/settings.screen";
import Loading from "./app/components/response/loading";

import { store } from './app/server/store';

const Stack = createNativeStackNavigator()

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent'
  },
};

const persistor = persistStore(store)

export default function App() {

  return (
    <NavigationContainer theme={theme}>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <Container>
            <Loading />
            <StatusBar backgroundColor='#FF8C00' style="light" translucent={false} />
            <Stack.Navigator initialRouteName="Home" screenOptions={{
              headerShown: false
            }}>
              <Stack.Screen name="Home" component={Home} options={{
                animation: 'fade'
              }} />
              <Stack.Screen name="Play" component={Play} options={{
                animation: 'fade'
              }} />
              <Stack.Screen name="Categories" component={Categories as any} options={{
                animation: 'fade'
              }} />
              <Stack.Screen name="Options" component={Options} options={{
                animation: 'fade'
              }} />
              <Stack.Screen name="Playing" component={Playing as any} options={{
                animation: 'fade'
              }} />
              <Stack.Screen name="Ranking" component={Ranking} options={{
                animation: 'fade'
              }} />
              <Stack.Screen name="Settings" component={Settings} options={{
                animation: 'fade'
              }} />
              <Stack.Screen name="Statistics" component={Statistics} options={{
                animation: 'fade'
              }} />
            </Stack.Navigator>
          </Container>
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
}

