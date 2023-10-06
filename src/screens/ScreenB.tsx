import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';


export function ScreenB() {
    const navigation = useNavigation();
  
    // function openScreenC(){
    //     navigation.navigate('Consultas Agendadas')
    // }
  
    function openScreenA(){
        navigation.navigate('Home')
    }
    
    const [name, setName] = useState('');
    const [nameList, setNameList] = useState([]);

    const [cpf, setCpf] = useState('');

    const [birthdate, setBirthdate] = useState('');

    const [endereco, setEndereco] = useState('');

    const [email, setEmail] = useState('');

    const [telefone, setTelefone] = useState('');
    const [telefoneList, setTelefoneList] = useState([]);

    useEffect(() => {
    //     console.log('Nomes atualizados:', nameList);
    //   }, [nameList]);

        console.log('Nova consulta:', "\nNome: " + name,  "\nTelefone: " + telefone, "\nEmail: " + email);
      }, [nameList]);
    
      function handleAddName() {
        setNameList([...nameList, name]);
        setTelefoneList([...telefoneList, telefone]);
      }

    return (
    <View style={styles.container}>
        <AntDesign name="back" size={40} color="white" style={styles.back} onPress={openScreenA}/>
        <Text style={styles.title}>Agendar Consulta</Text>
        <View style={styles.inputsView}>
            <TextInput style={styles.input} placeholder='Nome Completo' 
                value={name} onChangeText={(text) => setName(text)}/>
            <TextInput style={styles.input} placeholder='CPF' 
                value={cpf} onChangeText={(text) => setCpf(text)}/>
            <TextInput style={styles.input} placeholder='Data de nascimento' 
                value={birthdate} onChangeText={(text) => setBirthdate(text)}/>
            <TextInput style={styles.input} placeholder='Endereço' 
                value={endereco} onChangeText={(text) => setEndereco(text)}/>
            <TextInput style={styles.input} placeholder='Email' 
                value={email} onChangeText={(text) => setEmail(text)}/>
            <TextInput style={styles.input} placeholder='Telefone' 
                value={telefone} onChangeText={(text) => setTelefone(text)}/>
        </View>
        <View style={styles.inputsView2}>
            <TextInput style={styles.input} placeholder='Data da consulta'/>
            <TextInput style={styles.input} placeholder='Horário da consulta'/>
            <TextInput style={styles.input} placeholder='Valor a ser pago'/>
        </View>
        <TouchableOpacity style={styles.button} /* onPress={enviar}*/ onPress={handleAddName}>
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
    },
})