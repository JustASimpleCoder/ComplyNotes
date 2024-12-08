import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, ScrollView } from 'react-native';

export default function NoteTakingScreen() {
  const [note, setNote] = useState<string>('');

  const handleSaveNote = () => {
    // Here you would typically save the note or send it to an API
    console.log('Saved Note:', note);
    alert('Note saved successfully!');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Take Notes</Text>

      {/* Text Input for Note Taking */}
      <TextInput
        style={styles.textInput}
        placeholder="Type your notes here..."
        multiline
        numberOfLines={10}
        value={note}
        onChangeText={setNote}
      />

      {/* Save Button */}
      <Button title="Save Note" onPress={handleSaveNote} />
      
      {/* Optionally, add any other functionalities like voice-to-text, compliance check */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  textInput: {
    height: 200,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
    textAlignVertical: 'top',
    fontSize: 16,
  },
});
