import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';

export default function Reminders() {
  const [reminderEnabled, setReminderEnabled] = useState(false);

  // Fonction pour activer les rappels
  const enableReminder = async () => {
    try {
      Alert.alert('Les rappels sont activés');
      
      setReminderEnabled(true);
    } catch (error) {
      console.error('Erreur lors de l\'activation des rappels:', error);
      Alert.alert('Erreur', 'Impossible d\'activer les rappels. Veuillez réessayer plus tard.');
    }
  };

  // Fonction pour désactiver les rappels
  const disableReminder = async () => {
    try {
      Alert.alert('Les rappels sont désactivés');

      setReminderEnabled(false);
    } catch (error) {
      console.error('Erreur lors de la désactivation des rappels:', error);
      Alert.alert('Erreur', 'Impossible de désactiver les rappels. Veuillez réessayer plus tard.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Système de Rappels</Text>
      <Text style={styles.description}>Activez les rappels pour vous souvenir de vos défis quotidiens.</Text>
      {reminderEnabled ? (
        <Button title="Désactiver les Rappels" onPress={disableReminder} />
      ) : (
        <Button title="Activer les Rappels" onPress={enableReminder} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    marginBottom: 20,
    textAlign: 'center',
  },
});
