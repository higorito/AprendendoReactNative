import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';     
 
export default function App() {       
  return (           //view é um componente nativo do react native
    <View style={styles.container}>        
      <Text>ESTOU VENDO ESSE TEXTO NO MEU CELULAR</Text>
      <Text>E agora no meu pc EMULADO</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({          //estilo de css para ser mais tranquilo de estilizar futuramente
  container: {
    flex: 1,
    backgroundColor: '#00FFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
