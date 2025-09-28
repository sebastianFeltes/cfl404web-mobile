import { Colors } from "@/constants/Colors";
import { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

function Profile() {
  const [userData, setUserData] = useState({
    firstName: "Emiliano",
    lastName: "Perez",
    dni: "42548532",
    phone: "2215684210",
    dob: "11/12/1998",
    email: "pedritp@gmail.com",
    role: "user",
    address: "Calle 168 n°1658",
  });
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Perfil</Text>
      <View style={styles.contentContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: "https://media.istockphoto.com/id/1335121220/photo/serious-young-man-front-and-profile-mugshots.jpg?s=1024x1024&w=is&k=20&c=CVjAXod5x0UH2UIexEGjUdVNbukTq96ZL5x9zr56C6s=",
            }}
            style={styles.imagenPerfil}
          />
          <View style={styles.roleContainer}>
            <Text style={styles.title}>
              {userData?.lastName} {userData?.firstName}
            </Text>
            <View style={styles.rolerole}>
              <Text style={styles.dataTextTitle2}>{userData?.role}</Text>
            </View>
          </View>
        </View>
        <View style={styles.dataContainer}>
          <View>
            <Text style={styles.dataTextTitle}>D.N.I.</Text>
            <Text style={styles.dataText}>{userData?.dni}</Text>
          </View>
          <View>
            <Text style={styles.dataTextTitle}>Dirección</Text>
            <Text style={styles.dataText}>{userData?.address}</Text>
          </View>
          <View>
            <Text style={styles.dataTextTitle}>Teléfono</Text>
            <Text style={styles.dataText}>{userData?.phone}</Text>
          </View>
          <View>
            <Text style={styles.dataTextTitle}>E-mail</Text>
            <Text style={styles.dataText}>{userData?.email}</Text>
          </View>
          <View>
            <Text style={styles.dataTextTitle}>F. Nac.</Text>
            <Text style={styles.dataText}>{userData?.dob}</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>Editar</TouchableOpacity>
          <TouchableOpacity style={styles.button}>Guardar</TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    color: Colors.customDarkBlue,
  },
  dataContainer: {
    gap: 8,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderColor: Colors.customDarkBlue,
    borderWidth: 1,
    borderRadius: 20,
    alignItems: "flex-start",
  },
  dataTextTitle: {
    fontFamily: Colors.fontPoppins,
    fontSize: 10,
    fontWeight: "semibold",
    textDecorationStyle: "solid",
    textDecorationColor: Colors.customDarkBlue,
  },
  dataText: {
    fontFamily: Colors.fontPoppins,
    fontSize: 15,
    paddingLeft: 8,
  },
  imagenPerfil: {
    width: 150,
    height: 150,
    borderRadius: "100%",
    borderWidth: 1,
    borderColor: Colors.customDarkBlue,
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    borderWidth: 2,
    borderColor: Colors.customDarkBlue,
    paddingVertical: 5,
    paddingHorizontal: 35,
    borderRadius: 10,
    fontFamily: Colors.fontPoppins,
    fontSize: 15,
    backgroundColor: Colors.customDarkBlue,
    color: Colors.customWhite,
  },
  contentContainer: {
    gap: 20,
    paddingHorizontal: 30,
  },
  roleContainer: {
    gap: 0,
  },
  dataTextTitle2: {
    fontFamily: Colors.fontPoppins,
    fontSize: 10,
    fontWeight: "semibold",
    textDecorationStyle: "solid",
    textDecorationColor: Colors.customDarkBlue,
    borderRadius: 4,
    paddingVertical: 1,
    paddingHorizontal: 2,
    backgroundColor: Colors.customLigthBlue,
    color: Colors.customWhite,
  },
  rolerole: {
    flexDirection: "column",
    alignItems: "flex-end",
  },
});
