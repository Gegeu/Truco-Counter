import React, { useState } from "react";
import { Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import styles from "./Styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient'

export default function App() {

  const [pontOne, setPontOne] = useState(0)
  const [pontTwo, setPontTwo] = useState(0)

  if (pontOne > 11 || pontTwo > 11){
    setPontOne(0)
    setPontTwo(0)
  }

  function resetPont(){
    setPontOne(0)
    setPontTwo(0)
  }

  return (
    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 1}} colors={['#ffa54f', '#cd8500']} style={styles.container}>
      <SafeAreaView>
        <Text style={styles.title}>Contador Truco!</Text>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={styles.areaOne}>
            <Text style={styles.textPlayer}>Nós</Text>
             <Text style={styles.textPontos}>{pontOne}</Text>
            <TouchableOpacity style={styles.plusButton} onPress={() => setPontOne(pontOne + 1)}>
              < MaterialCommunityIcons name='plus-box' size={75} color='#FFF'/>
            </TouchableOpacity>
          </View>
          <View style={styles.areaTwo}>
            <Text style={styles.textPlayer}>Eles</Text>
              <Text style={styles.textPontos}>{pontTwo}</Text> 
            <TouchableOpacity style={styles.plusButton} onPress={() => setPontTwo(pontTwo + 1)}>
              < MaterialCommunityIcons name='plus-box' size={75} color='#FFF'/>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.resetPontos} onPress={() => resetPont()}>
            < MaterialCommunityIcons name='delete' size={65} color='#FFF'/>
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  );
}