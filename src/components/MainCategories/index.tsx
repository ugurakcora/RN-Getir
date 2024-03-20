import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import CategoryItem from "../CategoryItem";
import categoriesGetir from "../../../assets/categoriesGetir";
import styles from "./styles";

function index() {
  const [categories, setCategories] = useState(categoriesGetir);

  return (
    <View style={styles.Container}>
      <View style={styles.ListContainer}>
        {categories.map((item) => (
          <CategoryItem key={item.id} item={item} />
        ))}
      </View>
    </View>
  );
}

export default index;
