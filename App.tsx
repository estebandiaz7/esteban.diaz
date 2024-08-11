import { StyleSheet, View } from "react-native";

import Providers from "./src/providers/Providers";
import Navigator from "./src/navigation/Navigator";

export default function App() {
  return (
    <View style={appStyles.appContainer}>
      <Providers>
        <Navigator />
      </Providers>
    </View>
  );
}

const appStyles = StyleSheet.create({
  appContainer: { flex: 1 },
});
