import React, {useState} from 'react';
import { View, TextInput, StyleSheet, OpaqueColorValue, Button, AsyncStorage } from 'react-native';
import Tema from '../constantes/Tema';

const CadastroDeContatos = (props) => {

    const [contato, setContato] = useState({ nome: '', telefone: '' });
    const capturarNome = (nome) => {
      let c = { ...contato, nome }
      setContato(c);
    }
    const capturarTelefone = (telefone) => {
      let c = { ...contato, telefone }
      setContato(c);
    }

    return (
        <View style={styles.mainView}>
            <TextInput
                placeholder='Nome'
                style={styles.textInput}
                onChangeText={capturarNome}
            />
            <TextInput
                placeholder='Telefone'
                style={styles.textInput}
                onChangeText={capturarTelefone}
            />
            <Button title='Adicionar' style={"#FFC0CB"} onPress={() => props.onAdicionarContato(contato)}/>
        </View>
    );
};

CadastroDeContatos.navigationOptions = navData => {
    return {
        headerTitle: "Novo contato"
    }
};

const styles = StyleSheet.create({
    mainView: {
        margin: 30,
    },
    textInput: {
        color: Tema.primary,
        borderBottomColor: Tema.primary,
        borderBottomWidth: 1,
        height: 45,
        marginBottom: 15,
        textAlign: 'center'
    },
    addButton: {
        backgroundColor: Tema.primary,
        color: Tema.secondary,
        paddingTop: 15,
        paddingBottom: 15,
    }
});

export default CadastroDeContatos;