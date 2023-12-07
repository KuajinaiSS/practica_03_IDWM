import * as React from "react";
import { Card, Text, Modal, Portal } from "react-native-paper";
import { StyleSheet, Pressable, Image } from "react-native";

const Nose = ({ name, level, year }) => {
  return (
    <Card>
      <Card.Content>
        <Text>{name}</Text>
        <Text>{level}</Text>
        <Text>{year}</Text>
      </Card.Content>
    </Card>
  );
};
