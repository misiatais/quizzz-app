
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Mybutton from '../components/button';
import { useNavigation } from '@react-navigation/native';

export default function LevelsScreen() {
  const navigation = useNavigation();

  const handlePress = (nivel) => {
    navigation.navigate('Quiz', { nivel: nivel });
  };

  return (
    <View style={styles.container}>
   
      <Image
        source={require('../assets/abelha.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
      />
      
      
      <View style={styles.overlay}>
        <Text style={styles.title}>🐝 ESCOLHA O NÍVEL</Text>
      
        
        <View style={styles.levelsContainer}>
          <View style={styles.levelCard}>
            <Text style={styles.levelIcon}>🐝</Text>
            <Text style={styles.levelTitle}>INICIANTE</Text>
            <Text style={styles.levelDesc}>Perguntas mais fáceis</Text>
            <Mybutton 
              title="Começar" 
              onPress={() => handlePress('facil')}
            />
          </View>

          <View style={styles.levelCard}>
            <Text style={styles.levelIcon}>🐝🐝</Text>
            <Text style={styles.levelTitle}>INTERMEDIÁRIO</Text>
            <Text style={styles.levelDesc}>Desafio moderado</Text>
            <Mybutton 
              title="Começar" 
              onPress={() => handlePress('medio')}
            />
          </View>

          <View style={styles.levelCard}>
            <Text style={styles.levelIcon}>🐝🐝🐝</Text>
            <Text style={styles.levelTitle}>AVANÇADO</Text>
            <Text style={styles.levelDesc}>Perguntas difíceis</Text>
            <Mybutton 
              title="Começar" 
              onPress={() => handlePress('dificil')}
            />
          </View>
        </View>
      </View>

      <StatusBar style="light" />
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
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 10,
    textAlign: 'center',
  },
  levelsContainer: {
    flex: 1,
    justifyContent: 'space-around',
  },
  levelCard: {
    backgroundColor: 'rgba(191, 196, 165, 0.9)',
    padding: 17,
    borderRadius: 90,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 15, height: 23 },
    shadowOpacity: 0.6,
    shadowRadius: 5,
    elevation: 6,
  },
  levelIcon: {
    fontSize: 11,
    marginBottom: 1,
  },
  levelTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 2,
    color: '#333',
  },
  levelDesc: {
    fontSize: 14,
    color: '#666',
    marginBottom: 2,
    textAlign: 'center',
  },
});
