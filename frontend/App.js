import React, { useState, useEffect } from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";
import { PaperProvider, TextInput, Button, DataTable, Card, Title, Paragraph, IconButton, MD3Colors } from "react-native-paper";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import agent from "./services/api";
import axios from "axios";

const BASE_URL = 'http://192.168.4.25:8000/api';

export default function App() {
  const [profile, setProfile] = useState({});


  useEffect(() => {
    getData();
    // fetchData();
  }, []);



  const fetchData = async () => {
    const data = await axios.get('http://192.168.4.25:8000/api/profile')
      .then((response) => {
        console.log("fetch data")
        setProfile(response.data)
        console.log({ response })
      })
      .catch((error) => console.log({ error }));
  };


  const handleDeleteFramework = (frameworkId) => {
    axios.delete(`${BASE_URL}/profile/1/framework/${frameworkId}`)
      .then((response) => {
        console.log({ response });
        getData();
      })
      .catch((error) => console.log({ error }));
  };


  // usando agent
  const getData = async () => {
    const data = await agent.getData();
    setProfile(data);
  }


  return (

    <SafeAreaProvider>
      <PaperProvider>
        <SafeAreaView>
          <ScrollView>

            <View>
              <View style={styles.header}>
                <Text style={styles.title}>
                  {profile.name} {profile.Lastname}
                </Text>
              </View>

              <View style={styles.container}>

                <View style={styles.section}>
                  <Text style={styles.sectionTitle}>Sobre mí</Text>

                  <View style={styles.sectionItem}>
                    <Text style={styles.subTitle}>Descripción</Text>
                    <Text>{profile.summary}</Text>
                  </View>

                  <View style={styles.sectionItem}>
                    <Text style={styles.subTitle}>Datos Personales</Text>
                    <Text>{`Tengo 22 años y soy ${profile.city} y estudiante de la carrera Ingeniería Civil en Computación e Informática en la universidad Católica del Norte nací en la ciudad de ${profile.country}, pero me hospedó en la ciudad de Antofagasta por motivos de estudio, Mi correo es ${profile.email}`}</Text>
                  </View>

                  <View style={styles.sectionItem}>
                    <Text style={styles.subTitle}>Hobbies</Text>
                    <Text>{`Mi hobby principal es leer mangas y ver anime, también me gusta jugar videojuegos, escuchar música y ver películas, igualmente me gusta salir a caminar y jugar al basquetbol.`}</Text>
                  </View>
                </View>


                <DataTable>
                  <DataTable.Header style={styles.headerTable}>
                    <DataTable.Title style={styles.cell}>
                      <Text style={{ fontWeight: 'bold', color: 'black' }}>Tecnologia</Text>
                    </DataTable.Title>

                    <DataTable.Title style={styles.cell}>
                      <Text style={{ fontWeight: 'bold', color: 'black' }}>Nivel</Text>
                    </DataTable.Title>

                    <DataTable.Title style={styles.cell}>
                      <Text style={{ fontWeight: 'bold', color: 'black' }}>Año</Text>
                    </DataTable.Title>

                    <DataTable.Title style={styles.cell}>
                    <Text style={{ fontWeight: 'bold', color: 'black' }}>Accion</Text>
                    </DataTable.Title>
                  </DataTable.Header>


                  {profile.frameworks &&
                    profile.frameworks.map((framework) => (
                      <DataTable.Row key={framework.id} style={styles.row}>
                        <DataTable.Cell style={styles.cell}><Text>{framework.name}</Text></DataTable.Cell>
                        <DataTable.Cell style={styles.cell}><Text>{framework.level}</Text></DataTable.Cell>
                        <DataTable.Cell style={styles.cell}><Text>{framework.year}</Text></DataTable.Cell>
                        <DataTable.Cell style={styles.iconCell}>


                          <IconButton
                            icon="delete"
                            iconColor={MD3Colors.error50}
                            size={20}
                            onPress={() => handleDeleteFramework(framework.id)}
                          />

                          <IconButton
                            icon="pencil"
                            iconColor={MD3Colors.neutral50}
                            size={20}
                            onPress={() => handleEditFramework(framework.id)}
                          />

                        </DataTable.Cell>
                      </DataTable.Row>
                    ))}
                </DataTable>

              </View>
            </View>

          </ScrollView>
        </SafeAreaView>
      </PaperProvider>
    </SafeAreaProvider>
  );
}



const styles = StyleSheet.create({
  header: {
    backgroundColor: '#223F64',
    alignItems: 'center',
    paddingTop: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  container: {
    paddingHorizontal: 16,
  },
  section: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  sectionItem: {
    marginBottom: 8,

  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#000',
  },
  cell: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  iconCell: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
  },
  headerTable: {
    backgroundColor: '#223F64',
    alignItems: 'center',
  },
});