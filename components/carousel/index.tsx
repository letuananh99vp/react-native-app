import React, { useMemo } from "react";
import { Dimensions, View } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Carousel, {
  CarouselRenderItem,
  Pagination,
} from "react-native-reanimated-carousel";

type IProps = {
  height: number;
  renderItem: CarouselRenderItem<any>;
  pagination?: boolean;
  data: any[];
  autoPlay?: boolean;
  itemScale?: number;
};

const CarouselCustom = (props: IProps) => {
  const {
    height,
    renderItem,
    pagination,
    data,
    autoPlay,
    itemScale = 1,
  } = props;
  const progress = useSharedValue<number>(0);
  const width = Dimensions.get("window").width;
  const ITEM_WIDTH = width * itemScale;
  const SIDE_SPACE = (width - ITEM_WIDTH) / 2;
  const mapData = useMemo(() => {
    return data.slice(0, 4);
  }, [data]);

  return (
    <View id="carousel-component">
      <Carousel
        testID={"carousel-component-test"}
        width={ITEM_WIDTH}
        height={height}
        pagingEnabled={true}
        autoPlayInterval={3000}
        data={mapData}
        onProgressChange={progress}
        renderItem={renderItem}
        autoPlay={autoPlay}
        style={{
          width: width,
          rowGap: 12,
          paddingHorizontal: SIDE_SPACE,
        }}
      />

      {pagination && (
        <Pagination.Basic
          progress={progress}
          data={mapData}
          size={8}
          dotStyle={{
            backgroundColor: "rgba(0,0,0,0.2)",
            borderRadius: 50,
          }}
          activeDotStyle={{
            backgroundColor: "#006FFD",
            borderRadius: 50,
          }}
          containerStyle={{ gap: 8, position: "absolute", bottom: 16 }}
        />
      )}
    </View>
  );
};

export default CarouselCustom;
