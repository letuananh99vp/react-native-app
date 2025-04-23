import BackgroundImage from "@/components/background-image";
import CustomButton from "@/components/button";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Divider } from "@rneui/themed";
import { useRouter } from "expo-router";
import React, { useMemo, useState } from "react";
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

type IProduct = {
  name: string;
  size: string;
  color: string;
  price: number;
  number: number;
  id: number;
};

const CartScreen = () => {
  const router = useRouter();
  const screenWidth = Dimensions.get("screen").width;
  const generateProducts = (count: number): IProduct[] => {
    return Array.from({ length: count }, (_, index) => ({
      id: index + 1,
      name: `Amazing T-shirt ${index + 1}`,
      size: "M",
      color: "Black",
      price: 12.0 + index,
      number: 1,
    }));
  };

  const [cartData, setCartData] = useState<IProduct[]>(generateProducts(7));
  const total = useMemo(() => {
    return cartData.reduce(
      (total, nextValue) => total + nextValue.price * nextValue.number,
      0
    );
  }, [cartData]);

  const onChangeCart = (id: number, number: number) => {
    setCartData((prev) => {
      const newState = [...prev];
      if (!number) return newState.filter((item) => item.id !== id);
      const index = newState.findIndex((item) => item.id === id);
      newState[index] = {
        ...newState[index],
        number,
      };
      return newState;
    });
  };

  const renderBadge = (name: any, onPress: () => void) => {
    return (
      <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
        <View className="w-6 h-6 rounded-full bg-[#EAF2FF]">
          <FontAwesome6
            className="m-auto"
            name={name}
            size={12}
            color="#006FFD"
          />
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-white">
        <View className="h-4/5">
          <ScrollView>
            <View className="p-6">
              {cartData.map((item, index) => (
                <View key={item.id}>
                  <View className="flex-row">
                    <BackgroundImage
                      height={100}
                      width={90}
                      className="rounded-2xl"
                    />
                    <View className="p-4" style={{ width: screenWidth - 130 }}>
                      <Text className="font-bold mb-1">{item.name}</Text>
                      <Text className="color-[#71727A]">
                        {item.color} / {item.size}
                      </Text>
                      <View className="flex-row justify-between mt-2">
                        <View className="flex-row gap-2 ">
                          <View>
                            {renderBadge("minus", () =>
                              onChangeCart(item.id, item.number - 1)
                            )}
                          </View>
                          <Text>{item.number}</Text>
                          <View>
                            {renderBadge("add", () =>
                              onChangeCart(item.id, item.number + 1)
                            )}
                          </View>
                        </View>
                        <View>
                          <Text className="font-extrabold">
                            ${(item.price * item.number).toFixed(2)}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  {cartData.length - 1 !== index && (
                    <Divider className="my-3" />
                  )}
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
        <View className="pt-3 px-6 pb-6">
          <View className="flex-row justify-between py-2 px-3">
            <Text className="color-[#71727A]">Total</Text>
            <Text className="font-black">${total.toFixed(2)}</Text>
          </View>
          <CustomButton
            title="Checkout"
            onPress={() => router.push("/explore/checkout")}
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default CartScreen;
