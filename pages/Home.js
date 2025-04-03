import { View, Button, StyleSheet, Image } from "react-native";
import { TextInput } from "react-native-web";

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
          <Image  style={styles.image} source={require('../assets/img/flower.jpg')}/>
          <TextInput style={styles.input} placeholder="Email"></TextInput>
          <TextInput style={styles.input} placeholder="Senha"></TextInput>
            <Button title="Ir para Perfil" onPress={() => navigation.navigate("Perfil")} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#00008b",
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
    },
    image: {
      width: 300,
      height: 250,
      borderRadius: 20,
    },
    input: {
      backgroundColor: "#9acef8",
      borderRadius: 20,
      width: 250,
      padding: 10,
    },
});