import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHAndler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course goal!"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.actionButtons}>
            <View style={styles.button}>
                <Button title="Cancel" onPress={props.onCancel} color="red" />
            </View>
            <View style={styles.button}>
                <Button title="ADD" onPress={addGoalHAndler} />
            </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  textInput: {
    width: "80%",
    borderColor: "#000",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  actionButtons: {
      flexDirection: 'row',
      margin: 10,
      justifyContent: 'space-between',
      width: '40%'
  },
  button: {
      width: '60%'
  }
});

export default GoalInput;
