import React from 'react';
import { View, StyleSheet, Button, Text} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';


export function ScreenA() {
    const navigation = useNavigation();
  
    function openScreenB(){
        navigation.navigate('Agendar Consulta')
    }
  
    function openScreenC(){
        navigation.navigate('Consultas Agendadas')
    }

    return (
    <View style={styles.container}>
        <Text style={styles.title}>Clínica Odontológica Keller</Text>
        <View style={styles.buttonsView}>
            <TouchableOpacity style={styles.button} onPress={openScreenB}>
                <Text style={styles.buttonText}>Agendar Consulta</Text>
                </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={openScreenC}>
                <Text style={styles.buttonText}>Consultas Agendadas</Text>
                </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1C8C7D',
        justifyContent: "center"
    },
    buttonsView: {
        gap: 20
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        position: 'absolute',
        top: '25%',
        alignSelf: 'center',
    },
    button: {
        backgroundColor: 'white',
        width: '60%',
        alignSelf: 'center',
        borderRadius: 10,
        padding: 15,
    },
    buttonText: {
        color: '#1C8C7D',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})