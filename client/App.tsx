import React from 'react'
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { persistStore } from "redux-persist";
import { PersistGate } from 'redux-persist/integration/react';

import Container from './Container';
import Home from "./app/screens/home.screen";
import History from "./app/screens/history.screen";
import Configuration from "./app/screens/configuration.screen";
import Generate from "./app/screens/generate.screen";
import Annotator from "./app/screens/annotator.screen";
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
            <StatusBar backgroundColor='#F18212' style="light" translucent={false} />
            <Stack.Navigator initialRouteName="Home" screenOptions={{
              headerShown: false
            }}>
              <Stack.Screen name="Home" component={Home} options={{
                animation: 'fade'
              }} />
              <Stack.Screen name="History" component={History} options={{
                animation: 'fade'
              }} />
              <Stack.Screen name="Configuration" component={Configuration} options={{
                animation: 'fade'
              }} />
              <Stack.Screen name="Generate" component={Generate} options={{
                animation: 'fade'
              }} />
              <Stack.Screen name="Annotator" component={Annotator} options={{
                animation: 'fade'
              }} />
            </Stack.Navigator>
          </Container>
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
}

