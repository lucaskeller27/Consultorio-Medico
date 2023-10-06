import React from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';


export function ScreenB() {
    const navigation = useNavigation();
  
    function openScreenC(){
        navigation.navigate('Consultas Agendadas')
    }
  
    function openScreenA(){
        navigation.navigate('Home')
    }

    return (
    <View style={styles.container}>
        <AntDesign name="back" size={40} color="white" style={styles.back} onPress={openScreenA}/>
        <Text style={styles.title}>Agendar Consulta</Text>
        <View style={styles.inputsView}>
            <TextInput style={styles.input} placeholder='Nome Completo'/>
            <TextInput style={styles.input} placeholder='CPF'/>
            <TextInput style={styles.input} placeholder='Data de nascimento'/>
            <TextInput style={styles.input} placeholder='Endereço'/>
            <TextInput style={styles.input} placeholder='E-mail'/>
            <TextInput style={styles.input} placeholder='Telefone'/>
        </View>
        <View style={styles.inputsView2}>
            <TextInput style={styles.input} placeholder='Data da consulta'/>
            <TextInput style={styles.input} placeholder='Horário da consulta'/>
            <TextInput style={styles.input} placeholder='Valor a ser pago'/>
        </View>
        <TouchableOpacity style={styles.button} /* onPress={enviar}*/>
            <Text style={styles.buttonText}>Enviar</Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1C8C7D',
        justifyContent: "center"
    },
    inputsView: {
        gap: 15,
        marginTop: 150,
    },
    inputsView2: {
        gap: 15,
        marginTop: 30,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        position: 'absolute',
        top: '15%',
        alignSelf: 'center',
    },
    back: {
        position: 'absolute',
        top: '5%',
        left: '10%',
    },
    input: {
        backgroundColor: 'white',
        color: '#1C8C7D',
        fontSize: 18,
        padding: 10,
        borderRadius: 10,
        width: '80%',
        alignSelf: 'center',
    },
    button: {
        backgroundColor: '#1C8C7D',
        borderColor: 'white',
        borderWidth: 1,
        width: '80%',
        alignSelf: 'center',
        borderRadius: 10,
        padding: 12,
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})