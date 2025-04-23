import { Stack, useRouter } from "expo-router";
import React from "react";
import { Pressable, Text, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

const ExploreRouter = () => {
  const router = useRouter();
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="cart"
        options={{
          title: "Your bag",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerLeft: () => (
            <TouchableOpacity activeOpacity={0.8} onPress={() => router.back()}>
              <AntDesign name="left" size={20} color="#006FFD" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="checkout"
        options={{
          title: "Checkout",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerLeft: () => (
            <TouchableOpacity activeOpacity={0.8} onPress={() => router.back()}>
              <Text className="color-primary font-semibold">Cancel</Text>
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen name="[id]" options={{ headerShown: false }} />
    </Stack>
  );
};

export default ExploreRouter;
