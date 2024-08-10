import { View } from "react-native";

import Providers from "./src/providers/Providers";
import Navigator from "./src/navigation/Navigator";

export default function App() {
  return (
    <View style={{ backgroundColor: "purple", flex: 1 }}>
      <Providers>
        <Navigator />
      </Providers>
    </View>
  );
}
