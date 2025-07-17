import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import {
  FavoutiteIcon,
  HomeSelectedIcon,
  MyOrderIcon,
  ProfileIcon,
} from "@/assets/svg/icons";
import { HapticTab } from "@/components/HapticTab";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "الرئيسية",
          tabBarIcon: ({ focused }) =>
            focused ? <HomeSelectedIcon /> : <HomeSelectedIcon />,
          tabBarLabelStyle: { fontFamily: "PingMedium" },
        }}
      />
      <Tabs.Screen
        name="orders"
        options={{
          title: "طلباتي",
          tabBarIcon: ({ focused }) =>
            focused ? <MyOrderIcon /> : <MyOrderIcon />,
          tabBarLabelStyle: { fontFamily: "PingMedium" },
        }}
      />
      <Tabs.Screen
        name="favourite"
        options={{
          title: "المفضلة",
          tabBarIcon: ({ focused }) =>
            focused ? <FavoutiteIcon /> : <FavoutiteIcon />,
          tabBarLabelStyle: { fontFamily: "PingMedium" },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "صفحتي",
          tabBarIcon: ({ focused }) =>
            focused ? <ProfileIcon /> : <ProfileIcon />,
          tabBarLabelStyle: { fontFamily: "PingMedium" },
        }}
      />
    </Tabs>
  );
}
