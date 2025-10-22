import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();
 
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/abelha.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
      />
      
     
      <View style={styles.overlay}>
        <Text style={styles.title}>🐝 QUIZZZ</Text>
        <Text style={styles.subtitle}>Desafie seus conhecimentos!</Text>
        
        <Text style={styles.description}>
          Teste o que você sabe sobre conhecimentos gerais em nosso quiz interativo!
        </Text>

        {/* Botão dentro do overlay */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.startButton}
            onPress={() => navigation.navigate('Levels')}
          >
            <Text style={styles.startButtonText}>COMEÇAR</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.footer}>Feito por: Filipe Jorge, Mísia Taís e Vitória Priscila</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.6)', 
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: 'yellow',
    marginBottom: 30,
    lineHeight: 22,
  },
  buttonContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  startButton: {
    backgroundColor: '#FFD700',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 20,
    minWidth: 150,
  },
  startButtonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  footer: {
    fontSize: 14,
    color: '#e6f603ff',
    marginTop: 20,
    textAlign: 'center',
  },
});