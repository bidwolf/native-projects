import Highlight from '@components/Highlight';
import * as Group from './styles';
import { Header } from '@components/Header';
import { GroupCard } from '@components/GroupCard';
import { Button } from '@components/Button';
import { useState } from 'react';
import { FlatList } from 'react-native';
import ListEmpty from '@components/ListEmpty';
export function Groups (){
   const [groups,setGroup]=useState<string[]>([])
    return (
        <Group.Container >
            <Header/>
            <Highlight title='Turmas'subtitle='Jogue com sua turma'/>
            <FlatList 
            data={groups}
            renderItem={({item})=><GroupCard classroomName={item} key={item}/>}
            keyExtractor={item=>item}
            style={{width:'100%',gap:16}}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={
                <ListEmpty message='Nenhuma turma criada ainda. Crie a sua clicando no botão abaixo!'/>
            }
            />
            <Button title='Criar nova turma'/>
        </Group.Container>
      );
}