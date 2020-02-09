import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
  ClippingRectangle
} from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = goalTitle => {
    // pass in a function to make sure coursegoals are up to date
    // rather than setCourseGoals([...courseGoals, enteredGoal]);
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle }
    ]);
  };

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId);
    });
  };

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler} />
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
