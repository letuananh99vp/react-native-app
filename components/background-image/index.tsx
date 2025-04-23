import clsx from "clsx";
import React, { memo } from "react";
import { ImageBackground, View } from "react-native";

const image = {
  uri: "https://t4.ftcdn.net/jpg/05/97/47/95/360_F_597479556_7bbQ7t4Z8k3xbAloHFHVdZIizWK1PdOo.jpg",
};

type IProps = {
  height?: number;
  width?: number;
  className?: string;
  uri?: string;
};

const BackgroundImage = (props: IProps) => {
  const { height, className, uri, width } = props;
  return (
    <View
      style={{ height: height, width: width }}
      className={`bg-[#EAF2FF] justify-center items-center ${className}`}
    >
      <ImageBackground
        source={{ uri: uri ?? image.uri }}
        className={clsx(uri ? "w-full h-full" : "w-[32px] h-[32px]")}
        resizeMode={uri ? "cover" : "center"}
      />
    </View>
  );
};

export default memo(BackgroundImage, (prev, next) => {
  return (
    prev?.uri === next?.uri &&
    prev?.width === next?.width &&
    prev?.height === next?.height
  );
});
