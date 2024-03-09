import React from 'react';
import { Button, View, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  const goToChallengeScreen = () => {
    navigation.navigate('Challenge');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenue sur l'application</Text>
      <Button
        title="Commencer le défi quotidien"
        onPress={goToChallengeScreen}
        color="#841584" 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default Home;
