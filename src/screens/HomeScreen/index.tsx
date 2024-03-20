import React from "react";
import { ScrollView } from "react-native";
import styles from "./styles";
import HeaderMain from "../../components/HeaderMain";
import BannerCarousel from "../../components/BannerCarousel";

function index() {
  return (
    <ScrollView stickyHeaderIndices={[0]} style={styles.ScrollWiew}>
      <HeaderMain />
      <BannerCarousel />
    </ScrollView>
  );
}

export default index;
