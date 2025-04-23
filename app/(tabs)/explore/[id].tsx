import BackgroundImage from "@/components/background-image";
import CarouselCustom from "@/components/carousel";
import clsx from "clsx";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import CustomButton from "@/components/button";
import { Badge } from "@rneui/themed";

type IProductDetail = {
  size: string;
  color: string;
};

const ProductDetail = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const data = [...new Array(6).keys()];
  const sizes = ["XS", "S", "M", "L", "XL"];
  const colors = {
    "#1F2024": "bg-[#1F2024]",
    "#71727A": "bg-[#71727A]",
    "#C5C6CC": "bg-[#C5C6CC]",
    "#E8E9F1": "bg-[#E8E9F1]",
  };
  const [selectedData, setSelectedData] = useState<IProductDetail>({
    color: "",
    size: "",
  });

  const onChangeData = (key: string, value: string) => {
    setSelectedData((prev) => ({ ...prev, [key]: value }));
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-white">
        <AntDesign
          name="close"
          className="absolute left-5 top-5 z-20"
          size={24}
          color="black"
          onPress={() => router.back()}
        />
        <ScrollView>
          <CarouselCustom
            data={data}
            pagination
            autoPlay
            height={346}
            renderItem={() => <BackgroundImage height={346} />}
          />
          <View className="p-6">
            <View className="mb-10">
              <Text className="mb-2 font-extrabold text-lg tracking-wider">
                Amazing T-Shirt
              </Text>
              <Text className="text-base mb-6">$12.00</Text>
              <Text className="text-sm color-[#71727A] tracking-wider">
                The perfect T-shirt for when you want to feel comfortable but
                still stylish. Amazing for all ocasions. Made of 100% cotton
                fabric in four colours. Its modern style gives a lighter look to
                the outfit. Perfect for the warmest days.
              </Text>
            </View>
            <View className="mb-8">
              <Text className="mb-2 font-bold">Size</Text>
              <View className="flex-row gap-2">
                {sizes.map((size) => (
                  <TouchableOpacity
                    key={size}
                    activeOpacity={0.8}
                    onPress={() => onChangeData("size", size)}
                  >
                    <View
                      className={clsx(
                        "w-8 h-6 bg-[#EAF2FF] rounded-full items-center justify-center",
                        selectedData.size === size && "bg-primary"
                      )}
                    >
                      <Text
                        className={clsx(
                          "font-semibold text-xs color-primary",
                          selectedData.size === size && "color-white"
                        )}
                      >
                        {size}
                      </Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
            <View className="mb-10">
              <Text className="mb-2 font-bold">Color</Text>
              <View className="flex-row gap-3">
                {Object.keys(colors).map((color) => (
                  <TouchableOpacity
                    key={color}
                    activeOpacity={0.8}
                    onPress={() => onChangeData("color", color)}
                  >
                    <View
                      className={clsx(
                        "w-8 h-8 rounded-full items-center justify-center",
                        colors[color as keyof typeof colors]
                      )}
                    >
                      {selectedData.color === color && (
                        <Badge
                          badgeStyle={{
                            backgroundColor: "#006FFD",
                            borderColor: "white",
                            borderWidth: 2,
                          }}
                          value={
                            <Feather name="check" size={10} color="white" />
                          }
                          containerStyle={{
                            position: "absolute",
                            right: -5,
                            top: -5,
                          }}
                        />
                      )}
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
            <CustomButton title="+ Add to bag" onPress={() => {}} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default ProductDetail;
