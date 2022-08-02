import { StatusBar } from "expo-status-bar";
import { FormEvent, Fragment } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { Participant } from "../../components/Participant";

import { styles } from "./styles";

export function Home() {
  function handleAddParticipant() {
    console.log("You click on Button");
  }

  function handleRemoveParticipant(name: string) {
    console.log(`You click on remove participant ${name}`);
  }

  return (
    <Fragment>
      <StatusBar style="light" />
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

        <Participant
          name="Hilquias Ferreira Melo"
          onDelete={() => handleRemoveParticipant('Hilquias')}
        />
        <Participant name="Millem Amaral Pereira" />
        <Participant name="Benjamin Sousa Melo" />
      </View>
    </Fragment>
  );
}
