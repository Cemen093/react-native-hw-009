import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import ContactsList from "./components/ContactsList";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ContactsList/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignContent: "center",
    justifyContent: "space-around"
  },
});
