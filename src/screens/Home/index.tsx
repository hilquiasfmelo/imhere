import { Fragment } from "react";
import {
  Alert,
  FlatList,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Participant } from "../../components/Participant";

import { styles } from "./styles";

export function Home() {
  const participants = [
    "Hilquias Ferreira Melo",
    "Millem Amaral Pereira",
    "Benjamin Sousa Melo",
    "Dalene Ferreira Melo",
    "Maria Madalena Ferreira Melo",
    "João dos Santos Braga Melo",
    "Simone Pereira Ferreira",
    "Eliudo Lopes Soares",
    "Tasso Chaves dos Santos",
    "Ivanilson Verde das Neves",
  ];

  function handleAddParticipant() {
    if (participants.includes("Hilquias Ferreira Melo")) {
      Alert.alert(
        "Error ao cadastrar",
        "Já existe esse participante na lista de contatos."
      );
    }

    console.log("You click on Button");
  }

  function handleRemoveParticipant(name: string) {
    Alert.alert(
      "Remover participante",
      `Você deseja realmente excluir o(a) participante ${name}?`,
      [
        {
          text: "Sim",
          onPress: () =>
            Alert.alert(`${name} foi deletado com sucesso.`),
        },
        {
          text: "Não",
          style: "cancel",
        },
      ]
    );

    console.log(`You click on remove participant ${name}`);
  }

  return (
    <Fragment>
      <View style={styles.container}>
        <Text style={styles.eventName}>Nome do evento</Text>
        <Text style={styles.eventDate}>Segunda, 01 de agosto de 2022</Text>

        <View style={styles.formEvent}>
          <TextInput
            style={styles.inputEvent}
            placeholder="Nome do participante"
            placeholderTextColor="#6B6B6B"
          />

          <TouchableOpacity
            style={styles.buttonEvent}
            onPress={handleAddParticipant}
          >
            <Text style={styles.buttonTextEvent}> + </Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={participants}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Participant
              key={item}
              name={item}
              onDelete={() => handleRemoveParticipant(item)}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <Text style={styles.listEmptyText}>
              Ninguém chegou ao evento ainda? Adicione participantes a sua lista
              de presença.
            </Text>
          )}
        />

        {/* Usando ScrollView */}
        {/* <ScrollView showsVerticalScrollIndicator={false}>
          {participants.map((participant) => (
            <Participant
              key={participant}
              name={participant}
              onDelete={() => handleRemoveParticipant(participant)}
            />
          ))}
        </ScrollView> */}
      </View>
    </Fragment>
  );
}
