import Highlight from "@components/Highlight";
import { Container, GroupIcon } from "./styles";
import { Header } from "@components/Header";
import InputText from "@components/InputText";
import { Button } from "@components/Button";

export function NewGroup(){
    return (
        <Container>
            <Header showBackButton/>
            <GroupIcon/>
            <Highlight title="Nova Turma" subtitle="Crie uma turma para adicionar pessoas"/>
            <InputText placeholder="Nome da turma"/>
            <Button title="Criar"/>
        </Container>
    );
}