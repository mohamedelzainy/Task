import type { PropsWithChildren, ReactElement } from "react";
import { StyleSheet, View } from "react-native";

import { ThemedView } from "@/components/ThemedView";
import { useColorScheme } from "@/hooks/useColorScheme";

const HEADER_HEIGHT = 100;

type Props = PropsWithChildren<{
  headerImage?: ReactElement;
  headerBackgroundColor: { dark: string; light: string };
}>;

export default function ParallaxScrollView({
  children,
  headerImage,
  headerBackgroundColor,
}: Props) {
  const colorScheme = useColorScheme() ?? "light";
  // const scrollRef = useAnimatedRef<Animated.ScrollView>();
  // const scrollOffset = useScrollViewOffset(scrollRef);
  // const bottom = useBottomTabOverflow();
  // const headerAnimatedStyle = useAnimatedStyle(() => {
  //   return {
  //     transform: [
  //       {
  //         translateY: interpolate(
  //           scrollOffset.value,
  //           [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
  //           [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75]
  //         ),
  //       },
  //       {
  //         scale: interpolate(
  //           scrollOffset.value,
  //           [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
  //           [2, 1, 1]
  //         ),
  //       },
  //     ],
  //   };
  // });

  return (
    <ThemedView style={styles.container}>
      {/* <Animated.ScrollView
        ref={scrollRef}
        scrollEventThrottle={16}
        scrollIndicatorInsets={{ bottom }}
        contentContainerStyle={{ paddingBottom: bottom }}
      > */}
      <View
        style={[
          styles.header,
          { backgroundColor: headerBackgroundColor[colorScheme] },
          // headerAnimatedStyle,
        ]}
      >
        {headerImage}
      </View>
      <ThemedView style={styles.content}>{children}</ThemedView>
      {/* </Animated.ScrollView> */}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: HEADER_HEIGHT,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 8,
    zIndex: 1,
  },
  content: {
    flex: 1,
    padding: 15,
    gap: 16,
    overflow: "hidden",
  },
});
