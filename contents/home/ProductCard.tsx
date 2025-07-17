import { StarIcon } from "@/assets/svg/icons";
import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

const width = Dimensions.get("window").width;
export function ProductCard({ item }: any) {
  return (
    <View className="flex gap-1 mx-2 rounded-[35] mb-5">
      <View className="rounded-[25]">
        <Image
          source={{ uri: item.image }}
          style={{ width: width / 2.3, height: 200, borderRadius: 10 }}
        />
      </View>
      <Text style={[styles.text, { textAlign: "right", color: "#191D31" }]}>
        {item.title}
      </Text>
      <View className="flex-row justify-between">
        <View className="flex-row gap-0.5 items-center">
          <StarIcon />
          <Text style={[styles.text, { color: "#FFBB0D", fontSize: 14 }]}>
            {item.rate}
          </Text>
        </View>
        <Text style={styles.subTitle}>{item.subTitle}</Text>
      </View>
      <View className="flex-row justify-end gap-2">
        <Text
          style={[
            styles.text,
            {
              textAlign: "right",
              color: "#E50000",
              textDecorationLine: "line-through",
              fontSize: 13,
            },
          ]}
        >
          {item.priceBeforeDiscount}
          {"د.ع"}
        </Text>
        <Text style={[styles.text, { textAlign: "right", color: "#191D31" }]}>
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
    textAlign: "right",
    color: "#8C8E98",
    fontFamily: "PingMedium",
    fontSize: 13,
  },
});
