import { BackIcon } from "@/assets/svg/icons";
import { sliders } from "@/data/home";
import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Carousel, {
  ICarouselInstance,
  Pagination,
} from "react-native-reanimated-carousel";

const width = Dimensions.get("window").width;

export function CarouselCard() {
  const ref = React.useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);

  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      /**
       * Calculate the difference between the current index and the target index
       * to ensure that the carousel scrolls to the nearest index
       */
      count: index - progress.value,
      animated: true,
    });
  };
  return (
    <View style={styles.sliderContainer}>
      <Carousel
        ref={ref}
        width={width}
        height={width / 2.5}
        data={sliders}
        onProgressChange={progress}
        renderItem={({ item }) => (
          <View style={styles.slider}>
            <View style={{ flexDirection: "column", width: "50%" }}>
              <Text style={styles.sliderText}>{item.title}</Text>
              <View className="flex-row items-center gap-1 ml-2">
                <BackIcon />
                <Text style={{ fontFamily: "PingBold", color: "#11296B" }}>
                  المزيد
                </Text>
              </View>
            </View>
            <Image
              source={{ uri: item.image }}
              style={{ width: "50%", height: 150 }}
            />
          </View>
        )}
      />

      <Pagination.Basic
        progress={progress}
        data={sliders}
        dotStyle={{
          width: 15,
          height: 4,
          backgroundColor: "#C4C9D6",
          borderRadius: 10,
        }}
        activeDotStyle={{
          overflow: "hidden",
          backgroundColor: "#11296B",
        }}
        containerStyle={{
          gap: 5,
          marginTop: 10,
        }}
        horizontal
        onPress={onPressPagination}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  sliderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  slider: {
    flex: 1,
    flexDirection: "row",
    borderRadius: 15,
    backgroundColor: "#EDEDED",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    overflow: "hidden",
  },
  sliderText: {
    textAlign: "right",
    fontSize: 20,
    fontFamily: "PingBold",
    color: "#11296B",
  },
});
