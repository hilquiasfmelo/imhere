import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

type IUsersProps = {
  name: string;
  onDelete?: () => void;
}

export function Participant({ name, onDelete }: IUsersProps) {

  return (
    <View style={styles.container}>
      <Text style={styles.nameParticipant}>{name}</Text>

      <TouchableOpacity
        style={styles.buttonRemoveParticipant}
        onPress={onDelete}
      >
        <Text style={styles.buttonTextRemoveParticipant}> - </Text>
      </TouchableOpacity>
    </View>
  );
}
