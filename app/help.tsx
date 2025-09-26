import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link } from "expo-router";
import { useVideoPlayer, VideoView } from "expo-video";
import { useState } from "react";
import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { Colors } from "../constants/Colors";

const videoSource =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

const links = [
  {
    name: "Contact",
    ref: "https://www.ejemplo.com",
    icon: <FontAwesome name="whatsapp" size={32} />,
  },
  {
    name: "Facebook",
    ref: "/facebook",
    icon: <FontAwesome name="facebook" size={32} />,
  },
  {
    name: "Instagram",
    ref: "/instagram",
    icon: <FontAwesome name="instagram" size={32} />,
  },
];

const LinkItem = ({ item }: { item: (typeof links)[0] }) => {
  return (
    <Link href={item.ref as any}>
      <View style={styles.linkItem}>{item.icon}</View>
    </Link>
  );
};

export default function help() {
  const [showVideo, setShowVideo] = useState(false);

  const player = useVideoPlayer(videoSource, (player) => {
    player.loop = true;
    player.play();
  });

  const handleButtonPress = () => {
    setShowVideo(true);
  };

  const closeVideo = () => {
    setShowVideo(false);
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.mainContainer}>
        <View style={styles.textContainer}>
          <Pressable
            style={styles.button}
            onPress={() => {
              handleButtonPress();
            }}
          >
            Como usar
          </Pressable>
        </View>
        {showVideo ? 
        <View style={styles.video}>
          <VideoView
            style={styles.VideoView}
            player={player}
            allowsFullscreen
            allowsPictureInPicture
            />
        </View>
            : false}
      </View>
      <View style={styles.linkContainer}>
        <FlatList
          data={links}
          renderItem={({ item }) => <LinkItem item={item} />}
          keyExtractor={(item) => item.name}
          horizontal={true}
          contentContainerStyle={{
            flex: 1,
            justifyContent: "space-evenly",
          }}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    gap: 100,
    backgroundColor: Colors.customWhite,
    justifyContent: "center",
  },
  textContainer: {
    width: "100%",
  },
  textVideoContainer: {
    height: "100%",
  },
  linkContainer: {
    width: "100%",
    backgroundColor: Colors.customDarkBlue,
  },
  button: {
    shadowColor: "#000", // Color de la sombra
    shadowOffset: { width: 0, height: 5 }, // Desplazamiento horizontal y vertical
    shadowOpacity: 0.3, // Opacidad
    shadowRadius: 10, // Radio de desenfoque
    borderRadius: 4,
    margin: 3,
    padding: 4,
  },
  linkItem: {
    alignItems: "center",
    justifyContent: "flex-end",
    color: Colors.customWhite,
    padding: 10,
  },
  video: {
    width: "90%",
    height: "30%",
    aspectRatio: 16 / 9,
    alignSelf: "center", // Esta es la línea clave para centrar el video
  },
  VideoView: {
    borderRadius: 10,
  },
});
