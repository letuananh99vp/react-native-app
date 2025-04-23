import AppleIcon from "@/assets/icons/apple-icon.svg";
import FacebookIcon from "@/assets/icons/facebook-icon.svg";
import GoogleIcon from "@/assets/icons/google-icon.svg";
import BackgroundImage from "@/components/background-image";
import CustomButton from "@/components/button";
import CustomTextInput from "@/components/text-input";
import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const LoginScreen = () => {
  const router = useRouter();
  return (
    <SafeAreaProvider>
      <SafeAreaView className="bg-white flex-1">
        <ScrollView>
          <BackgroundImage height={312} />
          <View className="py-10 px-6">
            <View className="mb-6">
              <Text className="font-extrabold text-2xl mb-6">Welcome!</Text>
              <CustomTextInput
                onChangeText={() => {}}
                placeholder="Email address"
              />
              <CustomTextInput
                onChangeText={() => {}}
                placeholder="Password"
                secureTextEntry
              />
              <TouchableOpacity onPress={() => {}} activeOpacity={0.8}>
                <Text className="color-primary font-semibold text-xs">
                  Forgot password?
                </Text>
              </TouchableOpacity>
            </View>
            <View className="mb-6">
              <CustomButton
                title="Login"
                onPress={() => router.push("(tabs)/explore")}
              />
              <View className="flex-row items-center justify-center mt-4">
                <Text className="font-semibold text-xs color-[#71727A]">
                  Not a member?{" "}
                </Text>
                <TouchableOpacity
                  onPress={() => router.push("/sign-up")}
                  activeOpacity={0.8}
                >
                  <Text className="color-primary font-semibold text-xs">
                    Register now
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View className="border-[0.5px] border-[#D4D6DD]" />
            <View className="mt-6 flex-col justify-center items-center">
              <Text className="mb-4 font-normal text-xs color-[#71727A]">
                Or continue with
              </Text>
              <View className="flex-row gap-3">
                <GoogleIcon width={40} height={40} />
                <AppleIcon width={40} height={40} />
                <FacebookIcon width={40} height={40} />
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default LoginScreen;
