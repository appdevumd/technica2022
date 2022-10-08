import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { BACKEND_IP } from './ip.js';

export default function App() {
  const [title, setTitle] = useState("No requests yet");
  const [newTitle, setNewTitle] = useState("");

  const fetchData = async () => {
    // TODO: Implement GET request
  }

  const submitData = async () => {
    // TODO: Implement POST request
  }

  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Button onPress={fetchData} title="Refresh" />
      <TextInput value={newTitle} onChangeText={setNewTitle} style={styles.input} />
      <Button onPress={submitData} title="Submit" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: 150,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
