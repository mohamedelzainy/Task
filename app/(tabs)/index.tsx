import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";

import {
  BackIcon,
  GoBackIcon,
  NotificationIcon,
  SearchIcon,
} from "@/assets/svg/icons";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedView } from "@/components/ThemedView";
import { CarouselCard } from "@/contents/home/CarouselCard";
import { CategoryCard } from "@/contents/home/CategoryCard";
import { ProductCard } from "@/contents/home/ProductCard";
import { categories, products } from "@/data/home";
import React from "react";

export default function HomeScreen() {
  const handelHeader = () => {
    return (
      <>
        <CarouselCard />
        <View className="flex-row justify-between mt-3 mb-2">
          <Text style={[styles.text, { color: "#191D31" }]}>التصنيفات</Text>
          <Text style={styles.text}>المزيد</Text>
        </View>
        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return <CategoryCard item={item} />;
          }}
        />

        <View className="flex-row justify-between mt-3 mb-2">
          <Text style={[styles.text, { fontSize: 18, color: "#191D31" }]}>
            منتجات جديدة
          </Text>
          <View className="flex-row items-center gap-1 ml-2">
            <Text style={{ fontFamily: "PingBold", color: "#11296B" }}>
              الجميع
            </Text>
            <BackIcon />
          </View>
        </View>
      </>
    );
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#FFFFFF", dark: "#1D3D47" }}
      headerImage={
        <ThemedView className="flex-row justify-between items-center mx-5 mt-16">
          <View className="w-[30%]">
            <View className="absolute top-3 left-2 z-[99]">
              <SearchIcon />
            </View>
            <TextInput
              placeholder="اكتشف..."
              className="rounded-[20] bg-[#F3F3F3] pl-[22] items-center h-10 font-pingMedium"
            />
          </View>
          <View className="flex-row gap-3 items-center">
            <GoBackIcon />
            <NotificationIcon />
          </View>
        </ThemedView>
      }
    >
      <FlatList
        data={products}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={handelHeader}
        numColumns={2}
        key={2}
        renderItem={({ item, index }) => {
          return <ProductCard item={item} />;
        }}
      />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "PingBold",
    color: "#11296B",
  },
});
