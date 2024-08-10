import React from "react";
import { View } from "react-native";

import styles from "./Home.screen.styles";
import { HomeProps as Props } from "./Home.screen.types";
import Home from "../../components/global/Home/Home";

const HomeScreen: React.FC<Props> = (props) => {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
};

export default HomeScreen;
