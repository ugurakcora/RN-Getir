import React from "react";
import { View, Text, Image } from "react-native";
import { Entypo } from "@expo/vector-icons";
import styles from "./styles";

function index() {
  return (
    <View style={styles.headerMain}>
      <View style={styles.headerOne}>
        <Image
          style={styles.image}
          source={{ uri: "https://cdn.getir.com/misc/emoji/house.png" }}
        />
        <View style={styles.headerOneView}>
          <Text style={styles.addressName}>Ev</Text>
          <Text style={styles.address}>
            Dedepaşa Blv. Yenişehir Mahallesi...
          </Text>
          <Entypo name="chevron-right" size={24} color="#5D3EBD" />
        </View>

        <View style={styles.headerTwo}>
          <Text style={styles.tvs}>TVS</Text>
          <Text style={styles.counter}>
            13
            <Text style={styles.minutes}>dk</Text>
          </Text>
        </View>
      </View>

      <View></View>
    </View>
  );
}

export default index;
