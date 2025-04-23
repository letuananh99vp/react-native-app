import CustomButton from "@/components/button";
import InputCode from "@/components/input-code";
import React, { useRef, useState } from "react";
import { Alert, Text, TextInput, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const ConfirmCodeScreen = () => {
  const [code, setCode] = useState<string>("");

  const handleSubmit = () => {
    Alert.alert("Xác nhận mã", `Bạn nhập: ${code}`);
    // Gửi mã về server...
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView className="bg-white flex-1">
        <View className="px-6 flex-col justify-center items-center flex-1">
          <View className="mb-10 flex-col justify-center items-center">
            <Text className="font-extrabold text-base mb-2">
              Enter confirmation code
            </Text>
            <Text className="font-normal text-xs color-[#71727A]">
              A 4-digit code was sent to
            </Text>
            <Text className="font-normal text-xs color-[#71727A]">
              lucasscott3@email.com
            </Text>
          </View>
          <InputCode codeLength={4} onChangeCode={(value) => setCode(value)} />
        </View>
        <View className="p-6 gap-3">
          <CustomButton
            title="Recent code"
            onPress={() => {}}
            type="terciary"
          />
          <CustomButton title="Continute" onPress={handleSubmit} />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default ConfirmCodeScreen;
