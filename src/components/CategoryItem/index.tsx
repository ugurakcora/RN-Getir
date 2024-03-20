import React from "react";
import { TouchableOpacity, Image, Text } from "react-native";
import styles from "./styles";
import { Category } from "../../models";

type CategoryItemProps = {
  item: Category;
};

function index({ item }: CategoryItemProps) {
  return (
    <TouchableOpacity style={styles.Container}>
      <Image style={styles.Img} source={{ uri: item.src }} />
      <Text style={styles.Title}>{item.name}</Text>
    </TouchableOpacity>
  );
}

export default index;
