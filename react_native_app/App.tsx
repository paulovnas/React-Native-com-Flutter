/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { 
  StatusBar, 
  StyleSheet, 
  useColorScheme, 
  View, 
  Text,
  TouchableOpacity,
  Alert,
  NativeModules
} from 'react-native';

const { FlutterModule } = NativeModules;

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const openFlutterModule = async () => {
    try {
      const result = await FlutterModule.openFlutterScreen();
      console.log(result);
    } catch (error) {
      Alert.alert('Error', `Failed to open Flutter screen: ${error.message}`);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>🚀</Text>
          <Text style={styles.title}>App Híbrido</Text>
          <Text style={styles.subtitle}>React Native + Flutter</Text>
        </View>
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={openFlutterModule}>
            <Text style={styles.buttonIcon}>🎯</Text>
            <Text style={styles.buttonText}>Abrir Tela Flutter</Text>
          </TouchableOpacity>
          
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>
              Toque no botão acima para navegar para uma tela criada em Flutter integrada ao React Native!
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 40,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 60,
  },
  logo: {
    fontSize: 80,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2c3e50',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#7f8c8d',
    textAlign: 'center',
    fontWeight: '300',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 80,
  },
  button: {
    backgroundColor: '#3498db',
    paddingHorizontal: 30,
    paddingVertical: 18,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#3498db',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
    marginBottom: 30,
  },
  buttonIcon: {
    fontSize: 20,
    marginRight: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  infoContainer: {
    backgroundColor: '#e8f4fd',
    padding: 20,
    borderRadius: 15,
    borderLeftWidth: 4,
    borderLeftColor: '#3498db',
  },
  infoText: {
    fontSize: 14,
    color: '#34495e',
    textAlign: 'center',
    lineHeight: 20,
  },
});

export default App;
