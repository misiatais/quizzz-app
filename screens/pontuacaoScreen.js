
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function PontuacaoScreen({ route }) {
  const navigation = useNavigation();
  const { pontuacao, totalPerguntas, nivel, respostasUsuario } = route.params;

  const porcentagem = Math.round((pontuacao / totalPerguntas) * 100);

  const getMensagem = () => {
    if (porcentagem >= 90) return "Excelente!";
    if (porcentagem >= 70) return "Muito bom!";
    if (porcentagem >= 50) return "Uauu Bom trabalho!";
    return "Continue tentando!";
  };

  const getEmoji = () => {
    if (porcentagem >= 90) return "🏆";
    if (porcentagem >= 70) return "⭐";
    if (porcentagem >= 50) return "✅";
    return "📚";
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/abelha.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
      />
      
      <View style={styles.overlay}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.title}>🐝 PONTUAÇÃO FINAL</Text>
          
         
          <View style={styles.resultCard}>
            <Text style={styles.emoji}>{getEmoji()}</Text>
            <Text style={styles.pontuacao}>
              {pontuacao}/{totalPerguntas}
            </Text>
            <Text style={styles.porcentagem}>{porcentagem}%</Text>
            <Text style={styles.mensagem}>{getMensagem()}</Text>
            <Text style={styles.nivel}>Nível: {nivel}</Text>
          </View>

         
          <View style={styles.botoesContainer}>
            <TouchableOpacity 
              style={styles.botao}
              onPress={() => navigation.navigate('Quiz', { nivel: nivel })}
            >
              <Text style={styles.botaoText}>TENTAR NOVAMENTE</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[styles.botao, styles.botaoSecundario]}
              onPress={() => navigation.navigate('Levels')}
            >
              <Text style={styles.botaoText}>OUTRO NÍVEL</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={[styles.botao, styles.botaoHome]}
              onPress={() => navigation.navigate('Welcome')}
            >
              <Text style={styles.botaoText}>INÍCIO</Text>
            </TouchableOpacity>

            {/* Botão para ver detalhes completos */}
            <TouchableOpacity 
              style={[styles.botao, styles.botaoDetalhes]}
              onPress={() => navigation.navigate('Detalhes', {
                respostasUsuario: respostasUsuario,
                nivel: nivel
              })}
            >
              <Text style={styles.botaoText}>VER DETALHES DAS QUESTÕES</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
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
    padding: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFD700',
    textAlign: 'center',
    marginBottom: 12,
  },
  resultCard: {
    backgroundColor: 'rgba(248, 249, 225, 0.9)',
    padding: 30, 
    borderRadius: 18,
    alignItems: 'center',
    marginBottom: 20, 
    marginTop: 20,
  },
  emoji: {
    fontSize: 40,
    marginBottom: 8,
  },
  pontuacao: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  porcentagem: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 12,
  },
  mensagem: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 8,
    fontWeight: 'bold',
  },
  nivel: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
  },
  botoesContainer: {
    gap: 10,
    marginBottom: 30,
  },
  botao: {
    backgroundColor: '#FFD700',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  botaoSecundario: {
    backgroundColor: 'rgba(255, 215, 0, 0.8)',
  },
  botaoHome: {
    backgroundColor: 'rgba(255, 215, 0, 0.6)',
  },
  botaoDetalhes: {
    backgroundColor: 'rgba(255, 215, 0, 0.7)',
  },
  botaoText: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
  },
});