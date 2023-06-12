import Highlight from "@components/Highlight";
import { Container, GroupIcon } from "./styles";
import { Header } from "@components/Header";
import InputText from "@components/InputText";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Alert } from "react-native";

export function NewGroup(){
    const navigation = useNavigation()
    const [groupName,setGroupName] = useState('')
    const handleCreateGroup = ()=>{
        if(!groupName){
            Alert.alert("Group name in blank","You must type a name for the group")
            return
        }
        navigation.navigate("players",{group:groupName})
    }
    return (
        <Container>
            <Header showBackButton/>
            <GroupIcon/>
            <Highlight title="Nova Turma" subtitle="Crie uma turma para adicionar pessoas"/>
            <InputText
            placeholder="Nome da turma"
            value={groupName}
            onChangeText={(groupname)=>setGroupName(groupname)}/>
            <Button title="Criar" onPress={handleCreateGroup}/>
        </Container>
    );
}