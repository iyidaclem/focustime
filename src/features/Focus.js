import { React, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { colors } from '../utils/colors';
import { RoundedButton } from '../components/RoundedButton'
export const Focus = ({addSubject}) => {
  const [subject, setSubject] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
        style={styles.textInput}
          label="What do you want to focus on?"
          onChangeText={setSubject}
        />
        <RoundedButton title="+" size={50}  
        onPress={() => addSubject(subject)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.3,
    // marginTop: ,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: "center",
    padding: 50,
  },
  textInput: {
  flex: 1,
  marginRight: 10
  }
});
