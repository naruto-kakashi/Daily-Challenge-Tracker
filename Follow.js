import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';

export default function Follow() {
  const [markedDates, setMarkedDates] = useState({});
  const [selectedDate, setSelectedDate] = useState('');

  const handleDayPress = (dateString) => {
    const updatedMarkedDates = { ...markedDates };

    // delete la sélection de la date précédemment sélectionnée
    if (selectedDate) {
      updatedMarkedDates[selectedDate] = {
        ...updatedMarkedDates[selectedDate],
        selected: false,
      };
    }

    // Mise à jour la date sélectionnée
    updatedMarkedDates[dateString] = {
      ...updatedMarkedDates[dateString],
      selected: true,
      selectedColor: 'green',
      dotColor: 'red', 
    };
    setMarkedDates(updatedMarkedDates);
    setSelectedDate(dateString);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calendrier de Suivi</Text>
      <Calendar
        markedDates={markedDates}
        markingType={'period'}
        onDayPress={(day) => handleDayPress(day.dateString)}
        style={styles.calendar}
        dayTextColor="#000" 
        todayTextColor="#000" 
      />
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
  calendar: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
});
