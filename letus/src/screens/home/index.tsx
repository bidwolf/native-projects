import {View,Text, TextInput, TouchableOpacity,FlatList, Alert} from 'react-native'

import { styles } from './styles';
import Participant from '../../components/Participant';
import { useState } from 'react';
export default function Home (){
    
    const [participants,setParticipants] =useState<string[]>([])
    const [participantName,setParticipantName] =useState<string>("")
    const handleParticipantAdd = (name:string)=>{
        if(participants.includes(name)){
            Alert.alert("Participant already exist","This participant is already added")
            return
        }
        if(!participantName){
            
            Alert.alert("Participant in blank","You must type a name for add an participant")
            return
        }
        setParticipants(prevState=>[...prevState,name])
        setParticipantName("")
    }
    const handleParticipantRemove = (name:string)=>{
        Alert.alert("Remove",`Remove participant ${name}?`,[
            {
                text:"yes",
                onPress:()=>{
                    setParticipants(prevState=>prevState.filter(participant=>participant!==name))
                    Alert.alert("Participant deleted")}
            },
            {
                text:"no",
                style:"cancel"
            }
        ])
    }
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>This is the Letus phone app</Text>
                <Text style={styles.subtitle}>Now you will be able to know what im learning</Text>
                <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder='Insira seu nome'
                    placeholderTextColor={'#ffffff50'}
                    keyboardType='name-phone-pad'
                    onChangeText={(name)=>setParticipantName(name)}
                    value={participantName}
                />
                <TouchableOpacity style={styles.button} onPress={()=>handleParticipantAdd(participantName)}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
          <FlatList showsVerticalScrollIndicator={false}
          style={{backgroundColor:'#000'}}
          data={participants}
          keyExtractor={item=>item}
          renderItem={({item})=><Participant name={item} key={item} onRemove={()=>handleParticipantRemove(item)}/>}
          ListEmptyComponent={()=><Text style={styles.subtitle}>You haven't added participants for this event, you can do that, just fill the field above and click in the add button</Text>}
          />
        </View>
      );
}