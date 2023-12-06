import { StyleSheet, ScrollView, View, Text } from "react-native";
import { PaperProvider, Button, Card } from "react-native-paper";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import React, { useState, useEffect } from "react";
import agent from "./services/api";


const getProfile = async () => {
  const response = await fetch(
    agent.getData()
  );
  const profile = await response.json();
  return profile;
}


export default function App() {
  const [profileData, setProfileData] = useState({});

  useEffect(() => {
    fetchProfileData();
  }, []);

  const fetchProfileData = async () => {
    try {
      const response = await agent.getData(); // Utiliza el método getData del objeto agent
      setProfileData(response.data); // Actualiza el estado con los datos del perfil
    } catch (error) {
      console.error('Error fetching profile data:', error);
    }
  };


  return (
    <SafeAreaProvider>
      <PaperProvider>
        <SafeAreaView>
          <ScrollView contentContainerStyle={styles.scrollView}>

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Text>Profile Name: {profileData.name}</Text>
              {/* Mostrar otros datos del perfil según lo necesario */}
            </View>


          </ScrollView>
        </SafeAreaView>
      </PaperProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#223F64",
    alignItems: "center",
    justifyContent: "center",
  },
  scrollView: {
    flexGrow: 1,
  },
});
