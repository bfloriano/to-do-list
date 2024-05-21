import { TextInput, View, TouchableOpacity, Text, Image, Pressable } from "react-native";
import { styles } from "./styles"
import { useState } from "react";

type Props = {
    text: string;
    checked: boolean;
    onRemove: () => void;
    onCheck: () => void;
}

export function Task (props: Props) {

    return (
        <View style={styles.container}>
            <Pressable 
                onPress={props.onCheck}
            > 
                {props.checked ? 
                    <Image source={require('../../../assets/Checked.png')} /> : 
                    <Image source={require('../../../assets/Vector.png')} />
                }
            </Pressable>
            <Text style={props.checked ? styles.checked : styles.text}>
                { props.text }
            </Text>
            <Pressable 
                onPress={ props.onRemove}
            >
                <Image source={require('../../../assets/trash.png')} />
            </Pressable>
        </View>
    )
}