import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Title from './src/components/title/';


import Form from './src/components/form';


export default function App() {
  return (      //chamando a função title la
    <View style={styles.container}>
      
        <Title/>     
        <Form/>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C74B3',
    paddingTop:80,
  },
});
