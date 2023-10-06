import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity, ScrollView} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

export function ScreenC() {
    
    const navigation = useNavigation();
  
    function openScreenA(){
        navigation.navigate('Home')
    }
  
    /* const [nameList, setNameList] = useState([]);

    useEffect(() => {
        console.log('Nomes atualizados:', nameList);
      }, [nameList]);
    
      function handleAddName() {
        setNameList([...nameList, name]);
      } */

      const consultas = [
        {
            id: 1,
            nome: 'Lucas Keller',
            email: 'lucaskeller@gmail.com',
            data: '10/10/2023',
            horario: '16:00',
        },
        {
            id: 2,
            nome: 'Murilo Romeiro',
            email: 'muriloromeiro@gmail.com',
            data: '10/10/2023',
            horario: '16:00',
        },
        {
            id: 3,
            nome: 'Lucas Keller',
            email: 'lucaskeller@gmail.com',
            data: '10/10/2023',
            horario: '16:00',
        }
    ]

    return (
    <View style={styles.container}>
        <AntDesign name="back" size={40} color="white" style={styles.back} onPress={openScreenA}/>
        <Text style={styles.title}>Consultas Agendadas</Text>
            
        <ScrollView style={styles.consultas}>
            <FlatList
                data={consultas}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View>
                        <Text style={styles.nameItem}>{item.nome}</Text>
                        <Text style={styles.nameItem}>{item.email}</Text>
                        <Text style={styles.nameItem}>{item.data}</Text>
                        <Text style={styles.nameItem}>{item.horario}</Text><br/>
                        <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Editar dados</Text>
                        </TouchableOpacity>
                    </View>
                // keyExtractor={(index) => index.toString()}
                )}/>
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1C8C7D',
        justifyContent: "center"
    },
    text:{
        color: "#fff",
    },
    back: {
        position: 'absolute',
        top: '5%',
        left: '10%',
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        position: 'absolute',
        top: '20%',
        alignSelf: 'center',
    },
    consultas: {
        marginTop: '20%',
        backgroundColor: 'white',
        width: '75%',
        height: '66%',
        position: 'absolute',
        top: '20%',
        alignSelf: 'center',
        borderRadius: 10,
    },
    nameItem: {
        fontSize: 18,
        marginBottom: 8,
        color: 'black',
      },
      button: {
          backgroundColor: '#1C8C7D',
          borderColor: 'white',
          borderWidth: 1,
          width: '80%',
          alignSelf: 'center',
          borderRadius: 10,
          padding: 8,
          marginBottom: 20,
      },
      buttonText: {
          color: 'white',
          fontSize: 20,
          fontWeight: 'bold',
          textAlign: 'center',
      },
})