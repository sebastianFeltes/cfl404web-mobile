import { Text, TextInput, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Usuario</Text>
      <TextInput style={{ borderColor: "#000", borderWidth: 2 }} />
    </View>
  );
}
