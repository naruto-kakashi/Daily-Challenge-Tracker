import React, { useState } from 'react';
import { TextInput, Text, Button, View, StyleSheet, FlatList } from 'react-native';

const Challenge = () => {
  const [challenges, setChallenges] = useState([]);
  const [text, setText] = useState('');

  const handleAddChallenge = () => {
    if (text.trim()) {
      const newChallenge = {
        text: text,
        createdAt: new Date().toLocaleString() 
      };
      setChallenges([...challenges, newChallenge]);
      setText('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text>Nouveau Défi</Text>
        <TextInput
          style={styles.input}
          placeholder="Ajouter un nouveau défi"
          onChangeText={setText}
          value={text}
        />
        <Button title="Ajouter" onPress={handleAddChallenge} />
      </View>
      <FlatList
        data={challenges}
        renderItem={({ item }) => (
          <View style={styles.challengeItemContainer}>
            <Text>{item.text}</Text>
            {item.createdAt && <Text>Date de création : {item.createdAt}</Text>}
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  challengeItemContainer: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
});

export default Challenge;
