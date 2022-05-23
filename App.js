import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import logo from './assets/logo.png'

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} /> 

      <Text style={styles.instructions} >
        Para compartilhar uma foto do seu celular com um amigo, basta pressionar o botão abaixo!
      </Text>
      
      <TouchableOpacity
        onPress={() => alert('Hello, world!')}
        style={styles.button}>
        <Text style={styles.buttonText}>Pick a photo</Text>
      </TouchableOpacity>
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
  logo: {
    width: 305,
    height: 159,
    marginBotton: 10,
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15
  },
  button: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
});
