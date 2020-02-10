import React, { useState } from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  // array with all our coursegoals
  const [courseGoals, setCourseGoals] = useState([]);
  // tracking addgoal modal visibility
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = goalTitle => {
    if (goalTitle.length === 0) {
      return;
    }
    // pass in a function to make sure coursegoals are up to date
    // rather than setCourseGoals([...courseGoals, enteredGoal]);
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle }
    ]);
    setIsAddMode(false);
    // nb: all state changes are applied at once and then react rerender the component
  };r

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId);
    });
  };

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput
        visible={isAddMode}
        onAddGoal={addGoalHandler}
        onCancel={cancelGoalAdditionHandler}
      />
      {/* need to use flatlist as default view isn't scrollable
        scrollview renders the entire element at once, flatlist doesn't */}
      <FlatList
        keyExtractor={item => item.id}
        data={courseGoals}
        renderItem={({ item }) => (
          <GoalItem
            id={item.id}
            onDelete={removeGoalHandler}
            title={item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
