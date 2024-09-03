import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [pin, setPin] = useState('');
  const [users, setUsers] = useState(['1234', '5678']); // Contoh PIN pengguna

  const handleConnect = () => {
    if (users.includes(pin)) {
      navigation.navigate('Chat', { pin });
    } else {
      alert('PIN tidak valid!');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Masukkan PIN"
        value={pin}
        onChangeText={setPin}
        keyboardType="numeric"
      />
      <Button title="Connect" onPress={handleConnect} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});
