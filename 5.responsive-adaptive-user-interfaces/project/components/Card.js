import React from "react";
import { StyleSheet, View } from "react-native";

// apply card style to surrounding container
const Card = props => {
  return (
    // can overwrite any style from the card by passing style as props
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    // shadow for ios only
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    // shadow for android only
    elevation: 5,

    backgroundColor: "white",
    padding: 20,
    borderRadius: 10
  }
});

export default Card;
