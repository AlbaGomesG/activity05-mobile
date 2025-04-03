import { View, Text, StyleSheet, Image } from "react-native";

export default function Perfil() {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../assets/img/flower.jpg')}/>
            <Text style={styles.title}>Bem-vindo(a) ao nosso site!🤍</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#00008b",
    },
    title: {
        fontSize: 17,
        color: "white",
        gap: 5,
    },
    image: {
        width: 300,
        height: 250,
        borderRadius: 20,
    }
});