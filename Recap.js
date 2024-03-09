import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Recap() {
  const completedChallenges = 7;
  const uncompletedChallenges = 3;
  const encoursChallenges = 10;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Récapitulatif hebdomadaire</Text>
      <Text>Défis complétés cette semaine: {completedChallenges}</Text>
      <Text>Défis non complétés cette semaine: {uncompletedChallenges}</Text>
      <Text>Défis en cours cette semaine: {encoursChallenges}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
