import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, TouchableOpacity , Section} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Smart from '../assets/SmartCompany.png';
import Micro from '../assets/Micro.png';
import Huella from '../assets/Huella.png';
import icon from '../assets/icon.png';

export default function Main() {
  const navigation = useNavigation();

  return (

    <View style={styles.container}>
    
      <Image style={styles.img}
              source={Smart}
            />
    
      <Text  style={styles.titulo} >Bienvenido</Text>

      <Text style={styles.texto}>Cantidad de Trabajadores: 4</Text>

      <Text style={styles.texto}> Fecha: 13/12/22 </Text>

      <Text style={styles.texto}> Hora: 08:20 </Text>

      <View style={styles.orden} >

        <TouchableOpacity 
        onPress={() => navigation.navigate("Voz")}
        style={styles.iconButton}>
        <Image style={styles.image}
                source={Micro}
              />
        </TouchableOpacity>

        <TouchableOpacity 
        onPress={() => navigation.navigate("Huella")}
        style={styles.iconButton}>
        <Image style={styles.image}
                source={Huella}
              />
      </TouchableOpacity>

      </View>

      <TouchableOpacity  
        onPress={() => navigation.navigate("Manual")}
        style={styles.button}>
        <Text style={styles.textButton}>Forma Manual</Text>
      </TouchableOpacity>


      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img:{height:200 , width:200 , resizeMode: 'contain'},
  titulo:{
    fontSize: 30,
    color: '#23254C',
    marginTop: 30
  },
  texto:{
    color: '#23254C',
    fontSize: 20,
    marginTop: 20,
    textShadowColor: '#c1c1c1',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },

  button:{
    alignItems: 'center',
    justifyContent: 'center',
    padding : 10,
    width: 200,
    marginTop:20,
    borderRadius:12,
    backgroundColor :'#23254C',
  },

  textButton:{
    color: '#ffffff',
    fontWeight: 'bold'
  },

  image:{
    height: 40,
    width: 40,
    resizeMode: 'contain'
  },

  iconButton:{
    backgroundColor: '#23254C',
    height : 60,
    width: 60,
    borderRadius:30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  orden:{
    display:'flex',
    flexDirection: 'row',
    marginTop: 44,
    marginBottom: 40,
    width: 200,
    justifyContent: 'space-evenly',
    alignItems: 'center'
  }

});
