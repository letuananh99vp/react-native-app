import React from "react";
import { TextInput, TextInputProps, View, Text } from "react-native";

interface CustomTextInputProps extends TextInputProps {
  label?: string;
  error?: string;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  label,
  error,
  ...props
}) => {
  return (
    <View className="mb-4">
      {label && <Text className="mb-2 text-xs font-bold">{label}</Text>}
      <TextInput
        className={`h-12 border rounded-xl px-4 focus:border-[#006FFD] focus:border-[1.5px] ${
          error ? "border-red-500" : "border-gray-300"
        }`}
        {...props}
      />
      {error && <Text className="mt-1 text-xs text-red-500">{error}</Text>}
    </View>
  );
};

export default CustomTextInput;
