import Highlight from "@components/Highlight";
import { Container, Form, Inline, NumberOfPlayers } from "./styles";
import { Header } from "@components/Header";
import InputText from "@components/InputText";
import { Button } from "@components/Button";
import { ButtonIcon } from "@components/ButtonIcon";
import { Filter } from "@components/Filter";
import { Alert, FlatList } from "react-native";
import { useState } from "react";
import ListEmpty from "@components/ListEmpty";
import { PlayerCard } from "@components/PlayerCard";
import { useRoute } from "@react-navigation/native";
type Player ={
    name:string
}
type Team={
    name:string
    players:Player[]
}
type RouteParams={
    group:string
}
export function NewPlayers(){
    const route = useRoute()
    const {group}=route.params as RouteParams
    const [team,setTeam]=useState<Team[]>([{name:'time a',players:[]},{name:'time b',players:[]}]);
    const [currentTeam,setCurrentTeam]=useState<string>('time a')
    const [playerName,setPlayerName] =useState<string>("")
    const handlePlayerRemove = (name:string)=>{
        const newTeam = team.find(team=>team.name===currentTeam)
        const newTeamIndex = team.findIndex(team=>team.name===currentTeam)
        if(newTeam){
            const removedPlayerIndex = newTeam.players.findIndex(player=>player.name===name)
            if(removedPlayerIndex>=0){
                newTeam.players.splice(removedPlayerIndex)
                const currentTeam = team
                currentTeam.splice(newTeamIndex,1,newTeam)
                setTeam(currentTeam)
            }
            Alert.alert("Player not exists","The player is already deleted.")
            return
        }
        Alert.alert("Team not exists","The current team is not available.")
            return
        }
    const handlePlayerAdd = (name:string)=>{
        if(!playerName){
            Alert.alert("Player in blank","You must type a name for add an player")
            return
        }
        const newTeam = team.find(team=>team.name===currentTeam)
        const newTeamIndex = team.findIndex(team=>team.name===currentTeam)
        if(newTeam){
            if(newTeam.players.find(player=>player.name===name)){
                Alert.alert("Player already exists","This player is already added")
                return
            }
            
            const currentTeam = team
            newTeam.players.push({name})
            currentTeam.splice(newTeamIndex,1,newTeam)
            setTeam(currentTeam)
        }
        setPlayerName("")
    }
    return (
        <Container>
            <Header showBackButton/>
            <Highlight title={group} subtitle="Adicione a galera e separe os times"/>
            <Form>
            <InputText placeholder="Nome do player" autoCorrect={false} onChangeText={(e)=>setPlayerName(e)} value={playerName}/>
            <ButtonIcon icon="add" onPress={()=>handlePlayerAdd(playerName)}/>
            </Form>
            <Inline>

            <FlatList data={team}
            keyExtractor={item=>item.name}
            renderItem={({item})=>(
            <Filter
                title={item.name}
                isActive={item.name==currentTeam}
                onPress={()=>{
                    setCurrentTeam(item.name)
                }}
                />)}
            horizontal
            ListEmptyComponent={()=><ListEmpty message="Nenhum time foi cadastrado ainda nessa turma"/>}
            />
            <NumberOfPlayers>{team.find(t=>t.name===currentTeam)?.players.length}</NumberOfPlayers>
            </Inline>
            <FlatList data={team.find(team=>team.name==currentTeam)?.players}
            keyExtractor={item=>item.name}
            renderItem={({item})=>(
            <PlayerCard
                playerName={item.name}
                onRemove={()=>handlePlayerRemove(item.name)}
                />)}
            ListEmptyComponent={()=><ListEmpty message="Nenhum player foi cadastrado ainda nesse time"/>}
            showsVerticalScrollIndicator={false}
            style={{width:'100%'}}
            />

            <Button title="Remover Turma" type="danger"/>
        </Container>
    );
}