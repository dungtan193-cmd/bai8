import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Login() {
  const router = useRouter();
  const [phone, setPhone] = useState("");

  const handleLogin = () => {
    if (phone.length > 0) {
      router.replace("/(tabs)/explore");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>

      <TextInput
        style={styles.input}
        placeholder="Phone number"
        value={phone}
        onChangeText={setPhone}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.text}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 20
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 8,
    marginBottom: 20
  },
  button: {
    backgroundColor: "orange",
    padding: 15,
    borderRadius: 8
  },
  text: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold"
  }
});