import React from "react";
import { StyleSheet, View, Text } from "react-native";

const AddQuizzCard = () => {
    return (
        <View style={styles.containerCard}>
            <View style={styles.container}>
                <Text style={styles.textPlus}>+</Text>
                <Text style={styles.text}>Ajouter</Text>
            </View>
            <Text></Text>
        </View>
    );
};

const styles = StyleSheet.create({
    containerCard: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },  
    container: {
        width: 160,
        height: 160,
        borderRadius: 20,
        borderColor: 'white',
        borderWidth: 3,
        borderStyle: 'dashed',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textPlus: {
        color: 'white',
        fontSize: 50,
    },
    text: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
    }
});

export default AddQuizzCard;