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

import { store } from './app/server/store';
import Loading from "./app/components/response/loading";

const Stack = createNativeStackNavigator()

export default function App() {

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'transparent'
    },
  };

  const persistor = persistStore(store)

  return (
    <NavigationContainer theme={theme}>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <Loading />
          <Container>
            <StatusBar backgroundColor='#ffffff' style="light" translucent={false} />
            <Stack.Navigator initialRouteName="Home" screenOptions={{
              headerShown: false
            }}>
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Play" component={Play} />
              <Stack.Screen name="Categories" component={Categories as any} />
              <Stack.Screen name="Options" component={Options} />
              <Stack.Screen name="Playing" component={Playing as any} />
              <Stack.Screen name="Ranking" component={Ranking} />
              <Stack.Screen name="Settings" component={Settings} />
              <Stack.Screen name="Statistics" component={Statistics} />
            </Stack.Navigator>
          </Container>
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
}

