import React,{useState} from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Modal } from 'react-native';

import Cliente from '../Cliente';

export default function Home() {
    const [cliente, setCliente] = useState([]);
    const [input, setInput] = useState() ;


    function validarCli() {
        if (input == null) {
            alert('Nome de cliente não informado')
        } else {
            
        }
    }    

    return(
        <View style={styles.home}>
            <TextInput
            style={styles.cliNome}
            placeholder='Nome Do Cliente'
            value={input}
            onChangeText={(texto) => setInput(texto)}
            autoCorrect={false}
            />
            <View style={styles.btnContainer}>
                <TouchableOpacity
                style={styles.btnCad}
                onPress={validarCli}
                >Cadastrar</TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({ // Estilização da page Home
    home: {
      marginTop: '20%',
      width: '80%',
      
    },
    cliNome: {
      padding: 8,
      borderRadius: 10,
      borderColor: '#ddd',
      borderWidth: 3,
      fontSize: 16
    },
    btnContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50
    },
    btnCad: {
        textAlign: 'center',
        marginTop: 10,
        paddingTop: 13,
        paddingBottom: 13,
        backgroundColor: '#0070c0',
        color: '#fff',
        borderRadius: 10,
        fontSize: 25,
        fontFamily: 'Arial',
        width: '50%'
    }
  });
  