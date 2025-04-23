import CustomButton from "@/components/button";
import { useRouter } from "expo-router";
import React, { useMemo } from "react";
import {
  FlatList,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { clsx } from "clsx";

const InterestScreen = () => {
  const router = useRouter();
  const [selectedInterests, setSelectedInterests] = React.useState<string[]>(
    []
  );

  const selectedInterestsMap = useMemo(() => {
    return new Set(selectedInterests);
  }, [selectedInterests]);

  const interests = [
    "User Interface",
    "User Experience",
    "User research",
    "UX Writing",
    "User Testing",
    "Service Design",
    "Strategy",
    "Design Systems",
  ];

  const onPress = (interest: string) => {
    setSelectedInterests((prev) => {
      if (selectedInterestsMap.has(interest)) {
        return prev.filter((item) => item !== interest);
      } else {
        return [...prev, interest];
      }
    });
  };

  const Item = ({ title }: { title: string }) => (
    <TouchableOpacity activeOpacity={0.8} onPress={() => onPress(title)}>
      <View
        className={clsx(
          "h-[52px] px-4 flex-row justify-between items-center mb-2 rounded-xl",
          !selectedInterestsMap.has(title)
            ? "border-[0.5px] border-[#C5C6CC]"
            : "bg-[#EAF2FF]"
        )}
      >
        <Text className="text-sm">{title}</Text>
        {selectedInterestsMap.has(title) && (
          <FontAwesome5 name="check" size={12} color="#006FFD" />
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaProvider>
      <SafeAreaView className="bg-white flex-1">
        <View className="p-6 gap-10">
          <View className="relative">
            <View className="h-2 rounded bg-[#E8E9F1]" />
            <View className="absolute rounded-lg h-2 w-1/2 bg-primary" />
          </View>
          <View>
            <Text className="font-extrabold text-2xl mb-4 tracking-wide">
              Personalise your experience
            </Text>
            <Text className="text-sm font-normal color-[#71727A]">
              Choose your interests.
            </Text>
          </View>
          <View>
            <FlatList
              data={interests}
              renderItem={({ item }) => <Item title={item} />}
              keyExtractor={(item) => item}
            />
            <CustomButton
              className="mt-2"
              onPress={() => {
                router.push("/login");
              }}
              title="Next"
            />
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default InterestScreen;
