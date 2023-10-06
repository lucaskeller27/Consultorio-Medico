import React from 'react';
import { View, StyleSheet, Button, Text} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

export function ScreenC() {
    
    const route = useRoute();
    
    const navigation = useNavigation();
  
    function openScreenA(){
        navigation.navigate('Home')
    }
  
    return (
    <View style={styles.container}>
        <AntDesign name="back" size={40} color="white" style={styles.back} onPress={openScreenA}/>
        <Text style={styles.title}>Consultas Agendadas</Text>
        <View style={styles.consultas}>
            <Text></Text>
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
        height: '50%',
        alignSelf: 'center',
        borderRadius: 10,
    }
})