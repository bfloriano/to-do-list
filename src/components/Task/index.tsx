import { TextInput, View, TouchableOpacity, Text, Image, Pressable } from "react-native";
import { styles } from "./styles"
import { useState } from "react";

type Props = {
    text: string;
    onRemove: () => void;
}

export function Task (props: Props) {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{ props.text }</Text>
            <Pressable 
                style={styles.delete}
                onPress={ props.onRemove}
            >
                <Image source={require('../../../assets/trash.png')} />
            </Pressable>
        </View>
    )
}