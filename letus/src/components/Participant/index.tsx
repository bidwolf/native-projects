import { View ,Text, TouchableOpacity} from "react-native";
import { styles } from "./styles";
type TParticipantProps={
    name:string
    onRemove:()=>void
}
function Participant({name,onRemove}:TParticipantProps) {
    return (
        <View style={styles.container}>
        <Text style={styles.name}>{name}</Text>
        <TouchableOpacity style={styles.button} onPress={onRemove}>
                <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
        </View>
     )
}

export default Participant;