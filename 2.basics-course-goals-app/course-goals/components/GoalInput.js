import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        {/* onchanetext execute on every keystroke */}
        <TextInput
          placeholder="Course Goals"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="CANCEL" color="red" onPress={props.onCancel} />
        <Button title="ADD" onPress={addGoalHandler} />
        {/* <Button title="ADD" onPress={props.onAddGoal.bind(this, enteredGoal)} /> */}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  textInput: {
    width: 200,
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10
  }
});

export default GoalInput;
