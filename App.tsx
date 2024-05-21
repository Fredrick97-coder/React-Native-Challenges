import "react-native-gesture-handler";
import * as React from "react";
import type { Routes } from "@/Routes";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useFonts } from "expo-font";
import {
  ColorSchemeProvider,
  darkTheme,
  LoadAssets,
  theme,
  useColorScheme,
} from "@/components";
import { ThemeProvider } from "@shopify/restyle";
// import { Instagram, StickerModal } from "@/Instagram";
import { StickerProvider } from "@/Instagram/StickerContext";
import { Airbnb, Details } from "@/Airbnb";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const fonts = {};
const assets: number[] = [];
const Stack = createNativeStackNavigator<Routes>();

const AppNavigator = () => {
  const { colorScheme } = useColorScheme();

  return (
    <ThemeProvider theme={colorScheme === "dark" ? darkTheme : theme}>
      <Stack.Navigator initialRouteName="Airbnb">
        <Stack.Screen
          name="Airbnb"
          component={Airbnb}
          options={{
            headerShown: false,
            // title: "Can it be done in React Native?",
          }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            headerShown: false,
            presentation: "transparentModal",
            // title: "Can it be done in React Native?",
          }}
        />
        {/* <Stack.Group>
          <Stack.Screen
            name="Instagram"
            component={Instagram}
            options={{
              headerShown: false,
              // title: "Can it be done in React Native?",
            }}
          />
        </Stack.Group>
        <Stack.Group screenOptions={{ presentation: "modal" }}>
          <Stack.Screen
            name="StickerModal"
            component={StickerModal}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Group> */}
      </Stack.Navigator>
    </ThemeProvider>
  );
};

export default function App() {
  const [fontsLoaded] = useFonts({
    SFProDisplayBold: require("@/fonts/SF-Pro-Display-Bold.ttf"),
    SFProTextRegular: require("@/fonts/SF-Pro-Text-Regular.otf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ColorSchemeProvider>
        <LoadAssets assets={assets} fonts={fonts}>
          <StickerProvider>
            <AppNavigator />
          </StickerProvider>
        </LoadAssets>
      </ColorSchemeProvider>
    </GestureHandlerRootView>
  );
}
