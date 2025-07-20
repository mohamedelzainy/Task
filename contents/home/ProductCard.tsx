import { HeartRedIcon, HeartWeightIcon, StarIcon } from "@/assets/svg/icons";
import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

const width = Dimensions.get("window").width;
export function ProductCard({ item }: any) {
  return (
    <View className="flex gap-1 mx-2 rounded-[35] mb-5">
      <View className="rounded-[25] mb-1">
        <Image
          source={{ uri: item.image }}
          style={{ width: width / 2.3, height: 200, borderRadius: 10 }}
        />
        <View className="rounded-full bg-[#fff] p-2 absolute top-2 left-2">
          {item.loved ? <HeartRedIcon /> : <HeartWeightIcon />}
        </View>
      </View>
      <Text style={[styles.text, { color: "#191D31" }]}>{item.title}</Text>
      <View className="flex-row justify-between">
        <Text style={styles.subTitle}>{item.subTitle}</Text>
        <View className="flex-row gap-0.5 items-center">
          <Text style={[styles.text, { color: "#FFBB0D", fontSize: 14 }]}>
            {item.rate}
          </Text>
          <StarIcon />
        </View>
      </View>
      <View className="flex-row gap-2">
        <Text
          style={[
            styles.text,
            {
              color: "#E50000",
              textDecorationLine: "line-through",
              fontSize: 13,
            },
          ]}
        >
          {item.priceBeforeDiscount}
          {"د.ع"}
        </Text>
        <Text style={[styles.text, { color: "#191D31" }]}>
          {item.price}
          {"د.ع"}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "PingBold",
    color: "#11296B",
  },
  subTitle: {
    color: "#8C8E98",
    fontFamily: "PingMedium",
    fontSize: 13,
  },
});
