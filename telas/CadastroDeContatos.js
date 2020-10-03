import React, {useState} from 'react';
import { View, TextInput, StyleSheet, Button} from 'react-native';
import Tema from '../constantes/Tema';
import CaptureImage from '../components/CapturarImagem';
import { useDispatch } from 'react-redux';
import * as contactActions from '../store/contact-actions';

const CadastroDeContatos = (props) => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [imageURI, setImageURI] = useState();

    const addContact = () => {
        dispatch(contactActions.addContact(name, phone, imageURI));

        setName('');
        setPhone('');

        props.navigation.goBack();

        props.navigation.goBack();
    };

    const captureName = (name) => {
        setName(name);
    };

    const capturarPhone = (phone) => {
        setPhone(phone);
    };

    const pictureTaken = image => {
        setImageURI(image);
    }

    return (
        <View style={styles.mainView}>
            <CaptureImage
                onPictureTaken={pictureTaken}
            />
            <TextInput
                placeholder='Nome'
                style={styles.textInput}
                onChangeText={captureName}
            />
            <TextInput
                placeholder='Telefone'
                style={styles.textInput}
                onChangeText={capturarPhone}
            />
            <Button title='Adicionar' style={styles.addButton} onPress={addContact}/>
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