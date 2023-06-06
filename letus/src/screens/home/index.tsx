import {View,Text, TextInput, TouchableOpacity,FlatList, Alert} from 'react-native'

import { styles } from './styles';
import Participant from '../../components/Participant';
export default function Home (){
    const participants = [
        "Henrique de Paula Rodrigues",
        "Heverton de Paula Rodrigues",
        "Hebert Rodrigues de Paula",
        "Hernane Rodrigues de Paula",
        "Helena Aparecida de Paula Rodrigues",
        "Helena Aparecida de Paula Rodrigues2",
        "Helena Aparecida de Paula Rodrigues3",
        "Helena Aparecida de Paula Rodrigues4",
        "Helena Aparecida de Paula Rodrigues5",
        "Helena Aparecida de Paula Rodrigues6",
        "Helena Aparecida de Paula Rodrigues7",
        "Helena Aparecida de Paula Rodrigues8",
        "Helena Aparecida de Paula Rodrigues9",
        "Helena Aparecida de Paula Rodrigues10",
    ]
    const handleParticipantAdd = ()=>{
        if(participants.includes("Henrique de Paula Rodrigues")){
            Alert.alert("Participant alreadt exisits","This participant is already added")
        }
    }
    const handleParticipantRemove = (name:string)=>{
        Alert.alert("Remove",`Remove participant ${name}?`,[
            {
                text:"yes",
                onPress:()=>Alert.alert("Paricipant deleted")
            },
            {
                text:"no",
                style:"cancel"
            }
        ])
    }
    return (
        <View style={styles.container}>
          <Text style={styles.title}>This is the Letus phone app</Text>
          <Text style={styles.subtitle}>Now you will be able to know what im learning</Text>
          <View style={styles.form}>
            <TextInput
                style={styles.input}
                placeholder='Insira seu nome'
                placeholderTextColor={'#ffffff50'}
                keyboardType='name-phone-pad'
            />
            <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          </View>
          <FlatList showsVerticalScrollIndicator={false}
          data={participants}
          keyExtractor={item=>item}
          renderItem={({item})=><Participant name={item} key={item} onRemove={()=>handleParticipantRemove("Henrique de Paula Rodrigues")}/>
        }
          />
        </View>
      );
}