import { StyleSheet, Text, View } from "react-native";

export default function Explore() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Explorer Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 24
  }
});