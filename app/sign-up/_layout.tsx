import CustomTextInput from "@/components/text-input";
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { CheckBox } from "@rneui/themed";
import { useState } from "react";
import CustomButton from "@/components/button";
import { useRouter } from "expo-router";

const SignUpScreen = () => {
  const router = useRouter();
  const [checked, setChecked] = useState<boolean>(false);
  const toggleCheckbox = () => setChecked(!checked);
  return (
    <SafeAreaProvider>
      <SafeAreaView className="bg-white flex-1">
        <View className="p-6">
          <View className="mb-6">
            <Text className="font-extrabold text-base mb-2">Sign up</Text>
            <Text className="font-normal text-xs color-[#71727A]">
              Create an account to get started
            </Text>
          </View>
          <View className="mb-2">
            <CustomTextInput
              onChangeText={() => {}}
              placeholder="Name"
              label="Name"
            />
            <CustomTextInput
              onChangeText={() => {}}
              placeholder="name@email.com"
              label="Email Address"
            />
            <CustomTextInput
              label="Password"
              onChangeText={() => {}}
              placeholder="Create a password"
              secureTextEntry
            />
            <CustomTextInput
              onChangeText={() => {}}
              placeholder="Confirm password"
              secureTextEntry
            />
          </View>
          <View className="mb-6 flex-row items-center">
            <CheckBox
              checked={checked}
              onPress={toggleCheckbox}
              iconType="material-community"
              checkedIcon="checkbox-marked"
              uncheckedIcon="checkbox-blank-outline"
              containerStyle={{
                padding: 0,
                margin: 0,
                marginLeft: 0,
              }}
              checkedColor="#006FFD"
            />
            <Text className="font-normal text-xs tracking-wide color-[#71727A]">
              I've read and agree with the{" "}
              <Text className="color-primary font-semibold">
                Terms of Service
              </Text>{" "}
              and the{" "}
              <Text className="color-primary font-semibold">
                Privacy Policy
              </Text>
              .
            </Text>
          </View>
          <CustomButton
            title="Sign up"
            onPress={() => router.push("/confirm-code")}
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default SignUpScreen;
