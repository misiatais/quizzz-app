
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function DetalhesScreen({ route }) {
  const navigation = useNavigation();
  const { respostasUsuario, nivel } = route.params;

  const respostasCertas = respostasUsuario.filter(r => r.acertou);
  const respostasErradas = respostasUsuario.filter(r => !r.acertou);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/abelha.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
      />
      
      <View style={styles.overlay}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.title}>🐝 DETALHES DAS QUESTÕES</Text>
          
          {/* Resumo */}
          <View style={styles.resumoCard}>
            <Text style={styles.resumoTitle}>📊 Resumo</Text>
            <View style={styles.resumoItens}>
              <View style={styles.resumoItem}>
                <Text style={styles.resumoNumero}>{respostasCertas.length}</Text>
                <Text style={styles.resumoLabel}>Acertos</Text>
              </View>
              <View style={styles.resumoItem}>
                <Text style={styles.resumoNumero}>{respostasErradas.length}</Text>
                <Text style={styles.resumoLabel}>Erros</Text>
              </View>
              <View style={styles.resumoItem}>
                <Text style={styles.resumoNumero}>{respostasUsuario.length}</Text>
                <Text style={styles.resumoLabel}>Total</Text>
              </View>
            </View>
          </View>

         
          {respostasCertas.length > 0 && (
            <View style={styles.secaoCard}>
              <Text style={styles.secaoTitulo}>✅ Questões que Você Acertou</Text>
              {respostasCertas.map((resposta, index) => (
                <View key={index} style={[styles.questaoItem, styles.questaoCerta]}>
                  <Text style={styles.questaoTexto}>
                    {respostasUsuario.findIndex(r => r.pergunta === resposta.pergunta) + 1}. {resposta.pergunta}
                  </Text>
                  <Text style={styles.respostaTexto}>
                    <Text style={styles.label}>Sua resposta: </Text>
                    {resposta.opcoes[resposta.respostaUsuario]}
                  </Text>
                </View>
              ))}
            </View>
          )}

          
          {respostasErradas.length > 0 && (
            <View style={styles.secaoCard}>
              <Text style={styles.secaoTitulo}>❌ Questões que Você Errou</Text>
              {respostasErradas.map((resposta, index) => (
                <View key={index} style={[styles.questaoItem, styles.questaoErrada]}>
                  <Text style={styles.questaoTexto}>
                    {respostasUsuario.findIndex(r => r.pergunta === resposta.pergunta) + 1}. {resposta.pergunta}
                  </Text>
                  <Text style={styles.respostaTexto}>
                    <Text style={styles.label}>Sua resposta: </Text>
                    {resposta.opcoes[resposta.respostaUsuario]}
                  </Text>
                  <Text style={styles.corretaTexto}>
                    <Text style={styles.label}>Resposta correta: </Text>
                    {resposta.opcoes[resposta.respostaCorreta]}
                  </Text>
                </View>
              ))}
            </View>
          )}

          {/* Botões */}
          <View style={styles.botoesContainer}>
            <TouchableOpacity 
              style={styles.botao}
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.botaoText}>VOLTAR</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[styles.botao, styles.botaoSecundario]}
              onPress={() => navigation.navigate('Levels')}
            >
              <Text style={styles.botaoText}>NOVO QUIZ</Text>
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
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFD700',
    textAlign: 'center',
    marginBottom: 20,
  },
  resumoCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
  },
  resumoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 15,
  },
  resumoItens: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  resumoItem: {
    alignItems: 'center',
  },
  resumoNumero: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFD700',
  },
  resumoLabel: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  secaoCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
  },
  secaoTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  questaoItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: 15,
    borderRadius: 10,
    marginBottom: 12,
    borderLeftWidth: 4,
  },
  questaoCerta: {
    borderLeftColor: '#4CAF50',
  },
  questaoErrada: {
    borderLeftColor: '#F44336',
  },
  questaoTexto: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
    lineHeight: 20,
  },
  respostaTexto: {
    fontSize: 13,
    color: '#666',
    marginBottom: 3,
  },
  corretaTexto: {
    fontSize: 13,
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  label: {
    fontWeight: 'bold',
    color: '#333',
  },
  botoesContainer: {
    gap: 12,
    marginBottom: 20,
  },
  botao: {
    backgroundColor: '#FFD700',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  botaoSecundario: {
    backgroundColor: 'rgba(255, 215, 0, 0.8)',
  },
  botaoText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});