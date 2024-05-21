import {
  ImageSourcePropType,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import Animated, {
  Extrapolation,
  interpolate,
  interpolateColor,
  runOnJS,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

const IMAGE_HEIGHT = 300;

const Details = () => {
  const navigation = useNavigation();
  const { width } = useWindowDimensions();
  const { item } = useRoute().params as {
    item: { id: number; img: ImageSourcePropType };
  };

  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);

  const animatedImageStyle = useAnimatedStyle(() => {
    // console.log(scrollOffset.value, ": scroll");
    return {
      opacity: interpolate(
        scrollOffset.value,
        [0, IMAGE_HEIGHT / 2, IMAGE_HEIGHT * 0.9],
        [1, 0.5, 0],
        Extrapolation.CLAMP
      ),
      transform: [
        {
          scale: interpolate(
            scrollOffset.value,
            [-IMAGE_HEIGHT, 0, IMAGE_HEIGHT / 2],
            [2, 1, 1],
            Extrapolation.CLAMP
          ),
        },
        {
          translateY: interpolate(
            scrollOffset.value,
            [-IMAGE_HEIGHT, 0, IMAGE_HEIGHT / 2],
            [0, 0, IMAGE_HEIGHT * 0.4],
            Extrapolation.CLAMP
          ),
        },
      ],
    };
  });

  const animatedRealityTopBannerStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        scrollOffset.value,
        [0, IMAGE_HEIGHT / 2, IMAGE_HEIGHT * 0.9],
        [0, 0.5, 1],
        Extrapolation.CLAMP
      ),
    };
  });

  const animatedImaginationTopBannerStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        scrollOffset.value,
        [0, IMAGE_HEIGHT / 2, IMAGE_HEIGHT * 0.9],
        [1, 0.5, 0],
        Extrapolation.CLAMP
      ),
    };
  });

  const transY = useSharedValue(0);
  const transX = useSharedValue(0);
  const opacity = useSharedValue(1);

  const pan = Gesture.Pan()
    .onStart((e) => {
      transY.value = e.translationY;
      transX.value = e.translationX;
    })
    .onUpdate((e) => {
      transY.value = e.translationY;
      transX.value = e.translationX;
    })
    .onChange((e) => {
      transY.value = e.translationY;
      transX.value = e.translationX;
    })
    .onEnd(() => {
      if (transY.value > IMAGE_HEIGHT) {
        opacity.value = 0;
        runOnJS(navigation.goBack)();
      } else {
        transY.value = withTiming(0);
        transX.value = withTiming(0);
      }
    });

  const animatedWrapper = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        opacity.value,
        [0, 1],
        ["transparent", "white"]
      ),
      overflow: "hidden",
      transform: [
        {
          translateY: transY.value,
        },
        {
          translateX: transX.value,
        },
      ],
    };
  });

  return (
    <GestureDetector gesture={pan}>
      <Animated.View style={[{ flex: 1 }, animatedWrapper]}>
        <Animated.View
          style={[
            {
              height: 100,
              backgroundColor: "white",
              width,
              paddingTop: 50,
              position: "absolute",
              zIndex: 1,
              justifyContent: "center",
              alignItems: "center",
            },
            animatedImaginationTopBannerStyle,
          ]}
        >
          <Text style={[{ fontSize: 16, fontWeight: "500" }]}>
            Imagination - Details
          </Text>
        </Animated.View>
        <Animated.View
          style={[
            {
              height: 100,
              backgroundColor: "white",
              width,
              paddingTop: 50,
              position: "absolute",
              zIndex: 1,
              justifyContent: "center",
              alignItems: "center",
            },
            animatedRealityTopBannerStyle,
          ]}
        >
          <Text style={[{ fontSize: 16, fontWeight: "500" }]}>
            Reality - Details
          </Text>
        </Animated.View>
        <Animated.ScrollView
          ref={scrollRef}
          style={styles.container}
          scrollEventThrottle={16}
        >
          <Animated.Image
            source={item?.img}
            style={[styles.image, { height: IMAGE_HEIGHT }, animatedImageStyle]}
            // sharedTransitionTag={item?.id?.toString() + "1"}
          />
          {/* content */}
          <View style={styles.containerWrapper}>
            {Array.from({ length: 40 }).map((_, index) => {
              return (
                <View style={styles.card} key={index}>
                  <Text style={styles.text}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                    perferendis harum vitae? Ad, saepe commodi odit quam in
                    repellendus itaque!
                  </Text>
                </View>
              );
            })}
          </View>
        </Animated.ScrollView>
      </Animated.View>
    </GestureDetector>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 50,
  },
  image: {
    width: "100%",
  },
  containerWrapper: {
    padding: 10,
  },
  card: {
    backgroundColor: "#fff",
    padding: 10,
    marginBottom: 10,
  },
  text: {
    fontSize: 14,
    fontWeight: "medium",
  },
});
