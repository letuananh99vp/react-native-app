import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { CarouselRenderItem } from "react-native-reanimated-carousel";
import CarouselCustom from "../carousel";

type IProps = {
  data: any[];
  title: string;
  onPress: () => void;
  renderItem: CarouselRenderItem<any>;
};

const CarouselProducts = (props: IProps) => {
  const { data, title, onPress, renderItem } = props;

  return (
    <View>
      <View className="flex-row justify-between items-center mb-4">
        <Text className="font-bold">{title}</Text>
        <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
          <Text className="color-primary font-semibold">See more</Text>
        </TouchableOpacity>
      </View>
      <CarouselCustom
        data={data}
        height={189}
        renderItem={renderItem}
        itemScale={0.6}
      />
    </View>
  );
};

export default CarouselProducts;
