import React from "react";
import { TouchableOpacity, Text, GestureResponderEvent } from "react-native";

interface ButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  type?: "primary" | "secondary" | "terciary";
  className?: string;
}

const CustomButton: React.FC<ButtonProps> = ({
  title,
  onPress,
  type = "primary",
  className = "",
}) => {
  const typeButton = {
    primary: "bg-primary",
    secondary: "bg-white border border-primary",
    terciary: "bg-white",
  };

  const typeText = {
    primary: "text-white",
    secondary: "color-primary",
    terciary: "color-primary",
  };

  return (
    <TouchableOpacity
      className={`h-12 w-full rounded-xl items-center justify-center ${typeButton[type]} ${className}`}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text className={`text-xs font-semibold ${typeText[type]}`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
