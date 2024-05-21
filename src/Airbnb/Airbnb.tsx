import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { image1, image2, image3, image4, image5, image6 } from "@/images";
import Animated from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

export const Airbnb = () => {
  const images = [
    { id: 1, img: image1 },
    { id: 2, img: image2 },
    { id: 3, img: image3 },
    { id: 4, img: image4 },
    { id: 5, img: image5 },
    { id: 6, img: image6 },
  ];

  const navigation = useNavigation<any>();

  return (
    <View style={{ flex: 1, paddingTop: 50 }}>
      <Text style={{ textAlign: "center", fontSize: 18 }}>Airbnb</Text>
      <FlatList
        data={images}
        numColumns={3}
        keyExtractor={(item) => item?.id?.toString()}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              key={item?.id}
              onPress={() => navigation.navigate("Details", { item })}
            >
              <Animated.View sharedTransitionTag={item.id.toString()}>
                <Animated.Image
                  source={item?.img}
                  style={styles.image}
                  sharedTransitionTag={item.id.toString() + "1"}
                />
              </Animated.View>
            </TouchableOpacity>
          );
        }}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: { width: width / 3, height: 170 },
  separator: { height: 10 },
});
