import { Colors } from "@/constants/Colors";
import MaterialIcons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
function Faq() {
  const [faqs, setFaqs] = useState([{ subtitle: "", text: "" }]);
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.questionCard}>
          <View style={styles.subtitle}>
            <MaterialIcons name="checkmark-sharp" size={18} color={Colors.customDarkBlue} />
            <Text style={styles.subtitleText}>¿Cómo me inscribo a los cursos?</Text>
          </View>
          <Text style={styles.response}>
            Puedes hacer tu inscripción a curso de tu preferencia en una gran variedad de cursos que se están ofreciendo
             en el CFL404 haciendo click en el curso que quieras inscribirte y ver una breve descripción del curso elegido, junto con su horario de cursada, lugar, fecha de inicio y fin de la cursada y los requisitos para inscribirte.
             También tiene información de cómo inscribirte en el curso y qué necesitas para hacerlo. 
          </Text>
        </View>
        <View style={styles.questionCard}>
          <View style={styles.subtitle}>
            <MaterialIcons name="checkmark-sharp" size={18} color={Colors.customDarkBlue} />
            <Text style={styles.subtitleText}>Pregunta 2</Text>
          </View>
          <Text style={styles.response}>
            Respuesta: Empanadas de jamón y queso.
          </Text>
        </View>
        <View style={styles.questionCard}>
          <View style={styles.subtitle}>
            <MaterialIcons name="checkmark-sharp" size={18} color={Colors.customDarkBlue} />
            <Text style={styles.subtitleText}>¿Cuál es tu bebida favorita?</Text>
          </View>
          <Text style={styles.response}>
            Respuesta: Sprite de Lima/Limón en primer lugar porque no me puedo permitir tomar todos los días Sprite, en segundo lugar
            el agua porque la tomo todos los días y es más accesible y buena para el cuerpo y la salud.
          </Text>
        </View>
        <View style={styles.questionCard}>
          <View style={styles.subtitle}>
            <MaterialIcons name="checkmark-sharp" size={18} color={Colors.customDarkBlue} />
            <Text style={styles.subtitleText}>¿Cuál es tu pasatiempo favorito?</Text>
          </View>
          <Text style={styles.response}>
            Respuesta: Jugar a la PC (Rankear en el LoL o jugar CS) y hacer trading en Binance si tengo plata.
          </Text>
        </View>
        <View style={styles.questionCard}>
          <View style={styles.subtitle}>
            <MaterialIcons name="checkmark-sharp" size={18} color={Colors.customDarkBlue} />
            <Text style={styles.subtitleText}>Pregunta 4</Text>
          </View>
          <Text style={styles.response}>
            Respuesta: Ejemplo
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    padding: 20, 
    gap: 10
  },
  questionCard: {
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 4,
    fontWeight: "bold",
    alignItems: "flex-start",
    gap:5,
  },
  subtitle: {
    flexDirection: "row",
    alignItems: "center",
  },
  subtitleText: {
    color: Colors.customDarkBlue,
    fontWeight: "bold",
  },
  response: {
    fontWeight: "black",
    fontSize: 12,
    textAlign: "justify",
  },
});


export default Faq;
