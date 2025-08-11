import {SplashScreen, Stack} from "expo-router";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {SafeAreaView} from "react-native";
import {ClerkProvider} from "@clerk/clerk-expo";
import {tokenCache} from "@clerk/clerk-expo/token-cache";
import InitialLayout from "@/components/initialLayout";
import ClerkAndConvexProvider from "@/providers/ClerkAndConvexProvider";
import {useFonts} from "expo-font";
import {useCallback} from "react";

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {

    const [ fontsLoaded ] = useFonts({
        "JetBrainsMono-Medium": require("../assets/fonts/JetBrainsMono-Medium.ttf")
    })

    const onLayoutRootView = useCallback(async () => {
        if(fontsLoaded) SplashScreen.hideAsync()
    }, [fontsLoaded])

  return (
      <ClerkAndConvexProvider>
            <SafeAreaProvider>
                <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }} onLayout={onLayoutRootView}>
                    <InitialLayout/>
                </SafeAreaView>
            </SafeAreaProvider>
      </ClerkAndConvexProvider>
  );
}
