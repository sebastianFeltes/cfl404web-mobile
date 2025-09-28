import { Colors } from "@/constants/Colors";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

function FaqCard({ subtitle, text }: { subtitle: string; text: string }) {
  const [isShow, setIsShow] = useState(false);

  return (
    <View style={styles.questionCard}>
      <Pressable style={styles.subtitle} onPress={() => setIsShow(!isShow)}>
        <MaterialIcons
          style={{
            backgroundColor: Colors.customDarkBlue,
            borderRadius: "100%",
          }}
          name="question-mark"
          size={18}
          color={Colors.customWhite}
        />
        <Text style={styles.subtitleText}>{subtitle}</Text>
      </Pressable>
      {isShow && <Text style={styles.response}>{text}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  questionCard: {
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 4,
    fontWeight: "bold",
    alignItems: "flex-start",
    width: "100%",
  },
  subtitle: {
    borderTopEndRadius: 20,
    // borderTopStartRadius: 20,
    gap: 4,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.customDarkBlue,
    color:Colors.customWhite,
    padding: 4,
  },
  subtitleText: {
    color: Colors.customWhite,
    fontStyle: "italic",
  },
  response: {
    fontWeight: "black",
    fontSize: 12,
    padding:10,
    textAlign: "justify",
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: Colors.customSoftBlue,
  },
});

export default FaqCard;
