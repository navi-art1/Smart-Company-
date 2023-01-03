import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Smart from "../assets/SmartCompany.png";
import Micro from "../assets/Micro.png";

import DateAndTime, { getTime, getDate } from "./DateAndTime";

export default function Voz(props) {
  let time = "";

  return (
    <View style={styles.container}>
      <Image style={styles.img} source={Smart} />

      <Text style={styles.titulo}>Bienvenido</Text>

      <Text style={styles.subtitulo0}> Mencione su </Text>
      <Text style={styles.subtitulo}> Nombre </Text>

      <DateAndTime />

      <View style={styles.orden}>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => {
            time = getTime();
            const [hours, minutes] = time.split(":");
            hours = 7;

            if (hours < 7 || hours > 17) {
              alert(
                "¡No se puede registrar antes de las 7:00 AM ni pasado las 6:00 PM!"
              );
              return;
            }

            if (hours == 7) {
              props.navigation.navigate("Green", {
                date: getDate(),
                time: time,
                name: results,
              });
            } else if (hours == 8 && minutes <= 15) {
              props.navigation.navigate("Yellow", {
                date: getDate(),
                time: time,
                name: results,
              });
            } else {
              props.navigation.navigate("Red", {
                date: getDate(),
                time: time,
                name: results,
              });
            }
          }}
        >
          <Image style={styles.image} source={Micro} />
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1",
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
    height: 40,
    width: 40,
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

  orden: {
    display: "flex",
    flexDirection: "row",
    marginTop: 44,
    marginBottom: 40,
    width: 200,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
