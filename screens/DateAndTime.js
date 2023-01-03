import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

let sDate,
  sTime = "";

export default function DateAndTime() {
  const date = new Date().toLocaleDateString();
  sDate = date;

  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
      sTime = time;
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <View>
      <Text style={styles.texto}> Fecha: {date} </Text>

      <Text style={styles.texto}> Hora: {time} </Text>
    </View>
  );
}

export function getTime() {
  return sTime;
}

export function getDate() {
  return sDate;
}

const styles = StyleSheet.create({
  texto: {
    color: "#23254C",
    fontSize: 20,
    marginTop: 20,
    textShadowColor: "#c1c1c1",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});
