import React from "react";
import { ScrollView } from "react-native";
import styles from "./styles";
import HeaderMain from "../../components/HeaderMain";
import BannerCarousel from "../../components/BannerCarousel";
import CategoryItem from "../../components/CategoryItem";
import MainCategories from "../../components/MainCategories";

function index() {
  return (
    <ScrollView stickyHeaderIndices={[0]} style={styles.ScrollWiew}>
      <HeaderMain />
      <BannerCarousel />
      {/* <CategoryItem /> */}
      <MainCategories />
    </ScrollView>
  );
}

export default index;
