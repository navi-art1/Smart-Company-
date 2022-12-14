import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, TouchableOpacity , Section, TextInput, Share} from 'react-native';
import Smart from './assets/SmartCompany.png';
import Micro from './assets/Micro.png';
import Huella from './assets/Huella.png';

import share from './assets/Share1.png';

export default function App() {
  return (



    <View style={styles.container}>
    
      <Image style={styles.img}
              source={Smart}
            />
    
      <Text  style={styles.titulo} >Bienvenido: Pedro</Text>

      <Text style={styles.texto}> Fecha: 13/12/22 </Text>

      <Text style={styles.texto }> Hora de entrada: 08:00 </Text>

       <View style={styles.content}>

      <Text style={styles.textoContenido }> Felicidades estas cada</Text>
      <Text style={styles.textoContenido }> vez más cerca del bono</Text>
      <Text style={styles.textoContenido }> de puntualidad</Text>


      <Text style={styles.texto }> Son necesarias 20</Text>
      <Text style={styles.textoContenido }> asistencias puntuales para</Text>
      <Text style={styles.textoContenido }> acceder al bono</Text>
      </View>



      <Text style={styles.texto }> Asistencias puntuales: 6</Text>

     
      <TouchableOpacity 
        style={styles.iconShare}>
        <Image style={styles.image}
                source={share}
              />
        </TouchableOpacity>


      <TouchableOpacity  
       style={styles.button}>
        <Text style={styles.textButton}>Atras</Text>
      </TouchableOpacity>


      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dcedc9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img:{height:200 , width:200 , resizeMode: 'contain'},
  titulo:{
    fontSize: 30,
    color: '#23254C',
    marginTop: 30
  },

  subtitulo:{
    fontSize: 24,
    color: '#23254C',
    textShadowColor: '#c1c1c1',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },

  subtitulo0:{
    marginTop: 28,
    fontSize: 24,
    color: '#23254C',
    textShadowColor: '#c1c1c1',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },



  texto:{
    color: '#23254C',
    fontSize: 20,
    marginTop: 20,
    textShadowColor: '#c1c1c1',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },

  textoContenido:{
    color: '#23254C',
    fontSize: 20,
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
    height: 30,
    width: 30,
    resizeMode: 'contain'
  },

  iconButton:{
    backgroundColor: '#23254C',
    height : 60,
    width: 60,
    borderRadius:30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

  },

  iconShare:{
    backgroundColor: '#23254C',
    height : 60,
    width: 60,
    borderRadius:30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 4,
    paddingBottom: 3,
    marginTop: 20

  },





  orden:{
    display:'flex',
    flexDirection: 'row',
    marginTop: 44,
    marginBottom: 40,
    width: 200,
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },

  TextInput:{
    padding: 6,
    paddingStart: 20,
    width: '60%',
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: '#ffffff'
  },

  content:{
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  }



});
