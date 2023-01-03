import { StatusBar } from "expo-status-bar";
import React, { useRef } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Smart from "../assets/SmartCompany.png";

import share from "../assets/Share1.png";

import * as Sharing from "expo-sharing";
import ViewShot from "react-native-view-shot";

export default function Yellow({ route }) {
  const ref = useRef();
  return (
    <ViewShot
      ref={ref}
      options={{
        fileName: "Captura_de_pantalla",
        format: "jpg",
        quality: 1,
      }}
      style={styles.container}
    >
      <View style={styles.container}>
        <Image style={styles.img} source={Smart} />

        <Text style={styles.titulo}>Bienvenido: Pedro</Text>

        <Text style={styles.texto}> Fecha: {route.params.date} </Text>

        <Text style={styles.texto}> Hora de entrada: {route.params.time} </Text>

        <View style={styles.content}>
          <Text style={styles.textoContenido}>
            {" "}
            Adelante, aún puedes alcanzar el
          </Text>
          <Text style={styles.textoContenido}> bono de puntualidad</Text>

          <Text style={styles.texto}> Son necesarias 20</Text>
          <Text style={styles.textoContenido}> asistencias puntuales para</Text>
          <Text style={styles.textoContenido}> acceder al bono</Text>
        </View>

        <Text style={styles.texto}> Asistencias puntuales: 6</Text>

        <TouchableOpacity
          style={styles.iconShare}
          onPress={() => {
            ref.current.capture().then(async (uri) => {
              console.log(uri);
              if (!(await Sharing.isAvailableAsync())) {
                alert("La imagen no está disponible");
                return;
              }

              await Sharing.shareAsync(uri);
            });
          }}
        >
          <Image style={styles.image} source={share} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Atras</Text>
        </TouchableOpacity>

        <StatusBar style="auto" />
      </View>
    </ViewShot>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffef90",
    alignItems: "center",
    justifyContent: "center",
  },
  img: { height: 200, width: 200, resizeMode: "contain" },
  titulo: {
    fontSize: 30,
    color: "#23254C",
    marginTop: 30,
  },

  subtitulo: {
    fontSize: 24,
    color: "#23254C",
    textShadowColor: "#c1c1c1",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },

  subtitulo0: {
    marginTop: 28,
    fontSize: 24,
    color: "#23254C",
    textShadowColor: "#c1c1c1",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },

  texto: {
    color: "#23254C",
    fontSize: 20,
    marginTop: 20,
    textShadowColor: "#c1c1c1",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },

  textoContenido: {
    color: "#23254C",
    fontSize: 20,
    textShadowColor: "#c1c1c1",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    width: 200,
    marginTop: 20,
    borderRadius: 12,
    backgroundColor: "#23254C",
  },

  textButton: {
    color: "#ffffff",
    fontWeight: "bold",
  },

  image: {
    height: 30,
    width: 30,
    resizeMode: "contain",
  },

  iconButton: {
    backgroundColor: "#23254C",
    height: 60,
    width: 60,
    borderRadius: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  iconShare: {
    backgroundColor: "#23254C",
    height: 60,
    width: 60,
    borderRadius: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 4,
    paddingBottom: 3,
    marginTop: 20,
  },

  orden: {
    display: "flex",
    flexDirection: "row",
    marginTop: 44,
    marginBottom: 40,
    width: 200,
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  TextInput: {
    padding: 6,
    paddingStart: 20,
    width: "60%",
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: "#ffffff",
  },

  content: {
    width: 300,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
});
