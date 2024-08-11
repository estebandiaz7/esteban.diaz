import { StyleSheet, View } from "react-native";
import ErrorBoundary from "react-native-error-boundary";

import Providers from "./src/providers/Providers";
import Navigator from "./src/navigation/Navigator";

export default function App() {
  return (
    <View style={appStyles.appContainer}>
      <ErrorBoundary>
        <Providers>
          <Navigator />
        </Providers>
      </ErrorBoundary>
    </View>
  );
}

const appStyles = StyleSheet.create({
  appContainer: { flex: 1 },
});
