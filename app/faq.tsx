import FaqCard from "@/components/FaqCard";
import faqsData from "@/constants/FaqsMock";
import { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";

function Faq() {
  const [faqs, setFaqs] = useState(faqsData);

  return (
    <ScrollView>
      {/*  <FlatList
        data={faqs}
        renderItem={(item) => (
          <FaqCard subtitle={item.subtitle} text={item.text} />
        )}
      /> */}

      {faqs.map((item, idx) => (
        <FaqCard key={idx} subtitle={item.subtitle} text={item.text} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    padding: 20,
    gap: 20,
  },
});

export default Faq;
