import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'

import { Camera } from 'expo-camera';

export default function App() {

  const [type, setType] = useState(Camera.Constants.Type.back)
  const [permissao, setPerm] = useState(null)

  useEffect(() =>{
    (async()=>{
      const{status} = await Camera.requestCameraPermissionsAsync()
      setPerm(status === "granted");
    })();
  },[] )
  
  if (permissao == null) {
    return <View/>
  }

  if (permissao == false) {
    return <Text>"Permissão Negada!!"</Text>
  }

  return (
    <SafeAreaView style={styles.container}>
     <Camera
     style={styles.camera}
     type={type}
     >
     </Camera>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera:{
    width: "100%",
    height: "100%",
  }
});
