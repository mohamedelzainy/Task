import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export function CategoryCard({ item }: any) {
  return (
    <View className="flex gap-1 mx-2 rounded-[35]">
      <View className="bg-[#F9F9F9] p-7 rounded-[25]">
        <Image source={{ uri: item.icon }} style={{ width: 20, height: 20 }} />
      </View>
      <Text style={[styles.text, { textAlign: "center" }]}>{item.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "PingBold",
    color: "#11296B",
  },
});
