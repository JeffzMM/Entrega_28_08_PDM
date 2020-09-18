import React, { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  Image,
  StyleSheet
} from 'react-native';

const SalvarContato = (props) => {

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
    <View style={estilos.contatoView}>
      <TextInput 
        placeholder="Nome"
        style={estilos.ContatoText}
        onChangeText={capturarNome}
        value={contato.nome}        
      />
       <TextInput 
        placeholder="Telefone"
        style={estilos.ContatoText}
        onChangeText={capturarTelefone}
        value={contato.telefone}        
      />
      <Button 
        style={estilos.button}
        title="Adicionar"
        color= "black"
        onPress={() => props.onAdicionarContato(contato)}
      />
    </View>
  );
};

const estilos = StyleSheet.create({
  ContatoText: {
    borderBottomColor: '#8B4513',
    padding: 8,
    marginBottom: 8,
    textAlign: 'center',
    color: '#8B4513',
  },
});



export default SalvarContato;