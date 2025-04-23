import BackgroundImage from "@/components/background-image";
import CarouselCustom from "@/components/carousel";
import CarouselProducts from "@/components/carousel-products";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Link } from "expo-router";
import React, { useRef } from "react";
import { Animated, Text, TouchableOpacity, View } from "react-native";
import { Badge } from "@rneui/themed";
import { CarouselRenderItemInfo } from "react-native-reanimated-carousel/lib/typescript/types";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const products = [
  {
    id: 1,
    name: "Product 1",
    price: 99.99,
  },
  {
    id: 2,
    name: "Product 2",
    price: 99.99,
  },
  {
    id: 3,
    name: "Product 3",
    price: 99.99,
  },
  {
    id: 4,
    name: "Product 4",
    price: 99.99,
  },
];

const ExploreScreen = () => {
  const data = [...new Array(6).keys()];
  const scrollY = useRef(new Animated.Value(0)).current;

  const renderItem = (info: CarouselRenderItemInfo<any>) => {
    return (
      <Link href={`/explore/${info.item.id}`} asChild>
        <TouchableOpacity activeOpacity={0.8}>
          <View className="rounded-2xl mr-3">
            <BackgroundImage
              height={120}
              className="rounded-tl-2xl rounded-tr-2xl"
            />
            <View className="bg-[#F8F9FE] p-4 rounded-bl-2xl rounded-br-2xl">
              <Text className="font-normal text-sm">{info?.item?.name}</Text>
              <Text className="font-bold text-md">${info?.item.price}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </Link>
    );
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-white">
        <Animated.View className="absolute top-0 left-0 right-0 bg-white z-10">
          <View className="bg-white flex-row justify-between items-center p-6">
            <View>
              <FontAwesome5 name="search" size={24} color="black" />
            </View>
            <View className="flex-row gap-4">
              <FontAwesome5 name="heart" size={24} color="black" />
              <TouchableOpacity activeOpacity={0.8}>
                <Link href="/explore/cart">
                  <View>
                    <FontAwesome5 name="shopping-bag" size={24} color="black" />
                    <Badge
                      status="primary"
                      value={9}
                      badgeStyle={{
                        backgroundColor: "#006FFD",
                      }}
                      containerStyle={{
                        position: "absolute",
                        bottom: -7,
                        right: -7,
                      }}
                    />
                  </View>
                </Link>
              </TouchableOpacity>
            </View>
          </View>
        </Animated.View>
        <Animated.ScrollView
          contentContainerStyle={{ paddingTop: 72 }}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: true }
          )}
          scrollEventThrottle={16}
        >
          <CarouselCustom
            autoPlay
            data={data}
            height={214}
            pagination
            renderItem={() => <BackgroundImage height={214} />}
          />
          <View className="px-4 py-6 gap-10">
            <CarouselProducts
              onPress={() => {}}
              title="Perfect for you"
              renderItem={renderItem}
              data={products}
            />
            <CarouselProducts
              onPress={() => {}}
              title="For this summer"
              renderItem={renderItem}
              data={products}
            />
          </View>
        </Animated.ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default ExploreScreen;
