import BackgroundImage from "@/components/background-image";
import CustomButton from "@/components/button";
import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const Onboarding = () => {
  const router = useRouter();
  return (
    <SafeAreaProvider>
      <SafeAreaView className="bg-white flex-1">
        <ScrollView>
          <BackgroundImage height={506} />
          <View className="p-8">
            <View className="mb-6 py-4 px-2">
              <Text className="font-extrabold text-2xl mb-6">
                Create a prototype in just a few minutes
              </Text>
              <Text className="text-xs font-normal color-[#71727A] ">
                Enjoy these pre-made components and worry only about creating
                the best product ever.
              </Text>
            </View>
            <CustomButton
              title="Next"
              onPress={() => router.push("/onboarding/choose-interests")}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Onboarding;
