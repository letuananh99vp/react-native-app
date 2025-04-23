import React, { useRef, useState } from "react";
import { TextInput, View } from "react-native";

type IProps = {
  codeLength?: number;
  onChangeCode?: (code: string) => void;
};

const InputCode = (props: IProps) => {
  const CODE_LENGTH = 4;
  const { codeLength = CODE_LENGTH, onChangeCode } = props;
  const [code, setCode] = useState(Array(codeLength).fill(""));
  const inputsRef = useRef<(TextInput | null)[]>([]);

  const handleChange = (text: string, index: number) => {
    const char = text.replace(/[^0-9]/g, "");
    let newCode = [...code];
    if (char === "") {
      for (let i = index; i < codeLength - 1; i++) {
        newCode[i] = newCode[i + 1];
      }
      newCode[codeLength - 1] = "";
      setCode(newCode);
      if (index > 0) {
        inputsRef.current[index - 1]?.focus();
      }
      onChangeCode?.(newCode.join(""));
      return;
    }
    newCode[index] = char;
    setCode(newCode);
    if (index < codeLength - 1) {
      inputsRef.current[index + 1]?.focus();
    }
    const full = newCode.join("");
    onChangeCode?.(full);
  };
  return (
    <View className="flex-row gap-2 mb-6">
      {code.map((digit, index) => (
        <TextInput
          key={index}
          className="h-12 w-12 border rounded-xl px-4 border-[#C5C6CC] focus:border-[#006FFD] focus:border-[1.5px]"
          maxLength={1}
          keyboardType="number-pad"
          returnKeyType="done"
          ref={(ref) => (inputsRef.current[index] = ref as TextInput | null)}
          value={digit}
          onChangeText={(text) => handleChange(text, index)}
        />
      ))}
    </View>
  );
};

export default InputCode;
