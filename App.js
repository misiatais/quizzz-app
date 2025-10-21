// App.js - VERSÃO CORRETA COM NAVEGAÇÃO
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/homeScreen'; // ← 'H' maiúsculo no import
import LevelsScreen from './screens/LevelsScreen';
import QuizScreen from './screens/quizScreen';
import PontuacaoScreen from './screens/pontuacaoScreen';
import DetalhesScreen from './screens/detalhesScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome"> 
        <Stack.Screen 
          name="Welcome" 
          component={HomeScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Levels" 
          component={LevelsScreen}
          options={{ title: 'Escolha o Nível' }}
        />
        <Stack.Screen 
          name="Quiz" 
          component={QuizScreen}
          options={{ title: 'Quiz' }}
        />
        <Stack.Screen
        name="Pontuacao"
        component={PontuacaoScreen}
        options={{title:'Pontuação'}}
        />
        <Stack.Screen 
       name="Detalhes" 
       component={DetalhesScreen}
       options={{ title: 'Detalhes' }}
/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}