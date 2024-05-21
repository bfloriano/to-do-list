import { View, Text } from "react-native"
import { styles } from "./styles";

type Props = {
    created: number;
    completed: number;
}

export function Progress (props: Props) {
    return (
        <View style={styles.container}>    
            <Text style={styles.created}>
                Criadas {props.created}
            </Text>
            <Text style={styles.completed}>
                Concluídas {props.completed}
            </Text>
        </View>
    )
}