import { ScrollView, Text, View } from "react-native";

function Home() {
  return (
    <ScrollView>
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text> Edit app/index.tsx to edit this screen.</Text>
    </View>
    </ScrollView>
  );
}
export default Home;