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
        <View className="flex-row justify-between">
          <Text style={styles.text}>المزيد</Text>
          <Text style={[styles.text, { color: "#191D31" }]}>التصنيفات</Text>
        </View>
        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return <CategoryCard item={item} />;
          }}
        />

        <View className="flex-row justify-between">
          <View className="flex-row items-center gap-1 ml-2">
            <BackIcon />
            <Text style={{ fontFamily: "PingBold", color: "#11296B" }}>
              الجميع
            </Text>
          </View>
          <Text style={[styles.text, { fontSize: 18, color: "#191D31" }]}>
            منتجات جديدة
          </Text>
        </View>
      </>
    );
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#FFFFFF", dark: "#1D3D47" }}
      headerImage={
        <ThemedView className="flex-row justify-between items-center mx-5 mt-16">
          <View className="flex-row gap-3 items-center">
            <GoBackIcon />
            <NotificationIcon />
          </View>
          <View className="w-[30%]">
            <TextInput
              placeholder="اكتشف..."
              className="rounded-[20] bg-[#F3F3F3] pr-6 h-10 font-pingMedium"
            />
            <View className="absolute top-3 right-2">
              <SearchIcon />
            </View>
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
