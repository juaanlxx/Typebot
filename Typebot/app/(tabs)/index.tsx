import { Image, Text, StyleSheet, Platform } from 'react-native';
import { Bubble } from "@typebot.io/react";


export default function HomeScreen() {
  return (
    <div>
      <h1>oii juju</h1>
      <Bubble typebot="biblioteca" theme={{ button: { backgroundColor: "#7792cf" } }} /> 
    </div>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
