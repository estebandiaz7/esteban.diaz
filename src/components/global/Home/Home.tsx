import React from "react";
import { Text, View } from "react-native";

import styles from "./Home.styles";
import { HomeProps as Props } from "./Home.types";

const Home: React.FC<Props> = (props) => {
  return (
    <View style={styles.container}>
      <Text>Search</Text>
    </View>
  );
};

export default Home;
