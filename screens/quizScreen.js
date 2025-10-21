// screens/quizScreen.js - VERSÃO CORRIGIDA
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { perguntasQuiz } from '../components/perguntas';

export default function QuizScreen({ route }) {
  const navigation = useNavigation();
  const { nivel } = route.params;
  const perguntasDoNivel = perguntasQuiz[nivel];
  
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [pontuacao, setPontuacao] = useState(0);
  const [respostasUsuario, setRespostasUsuario] = useState([]);

  const verificarResposta = (opcaoSelecionada) => {
    const perguntaAtualObj = perguntasDoNivel[perguntaAtual];
    const acertou = opcaoSelecionada === perguntaAtualObj.respostaCorreta;

    // Calcula a NOVA pontuação ANTES de atualizar o estado
    const novaPontuacao = acertou ? pontuacao + 1 : pontuacao;
    
    // Cria o array de respostas atualizado
    const novasRespostas = [...respostasUsuario, {
      pergunta: perguntaAtualObj.pergunta,
      respostaUsuario: opcaoSelecionada,
      respostaCorreta: perguntaAtualObj.respostaCorreta,
      acertou: acertou,
      opcoes: perguntaAtualObj.opcoes
    }];

    // Atualiza os estados
    if (acertou) {
      setPontuacao(novaPontuacao);
    }
    setRespostasUsuario(novasRespostas);
    
    if (perguntaAtual + 1 < perguntasDoNivel.length) {
      setPerguntaAtual(perguntaAtual + 1);
    } else {
      // Usa a NOVA pontuação calculada (não a do estado antigo)
      navigation.navigate('Pontuacao', {
        pontuacao: novaPontuacao, // ← CORRIGIDO: usa novaPontuacao
        totalPerguntas: perguntasDoNivel.length,
        nivel: nivel,
        respostasUsuario: novasRespostas
      });
    }
  };

  const progresso = ((perguntaAtual + 1) / perguntasDoNivel.length) * 100;

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/abelha.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
      />
      
      <View style={styles.overlay}>
        <Text style={styles.title}>🐝 QUIZ - {nivel.toUpperCase()}</Text>
        
        <View style={styles.progressoContainer}>
          <Text style={styles.contador}>
            Pergunta {perguntaAtual + 1} de {perguntasDoNivel.length}
          </Text>
          <View style={styles.barraProgresso}>
            <View style={[styles.barraPreenchimento, { width: `${progresso}%` }]} />
          </View>
        </View>

        <View style={styles.perguntaCard}>
          <Text style={styles.pergunta}>
            {perguntasDoNivel[perguntaAtual].pergunta}
          </Text>
        </View>

        <View style={styles.opcoesContainer}>
          {perguntasDoNivel[perguntaAtual].opcoes.map((opcao, index) => (
            <TouchableOpacity 
              key={index}
              style={styles.opcaoButton}
              onPress={() => verificarResposta(index)}
            >
              <Text style={styles.opcaoText}>{opcao}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
}

// Styles continuam os mesmos...
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
    marginTop: 40,
    marginBottom: 20,
  },
  progressoContainer: {
    marginBottom: 30,
  },
  contador: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
  },
  barraProgresso: {
    height: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 5,
    overflow: 'hidden',
  },
  barraPreenchimento: {
    height: '100%',
    backgroundColor: '#FFD700',
    borderRadius: 5,
  },
  perguntaCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: 20,
    borderRadius: 15,
    marginBottom: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
  },
  pergunta: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    lineHeight: 26,
  },
  opcoesContainer: {
    gap: 12,
  },
  opcaoButton: {
    backgroundColor: 'rgba(255, 215, 0, 0.9)',
    padding: 16,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#FFD700',
  },
  opcaoText: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});