import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

const ExibirContato = (props) => {
  return (
    <TouchableOpacity onPress={() => props.onRemoverContato(props.i)}>
      <View style={estilos.Lista}>
        <Text style={estilos.Text}>Id: {props.i}</Text>
        <Text style={estilos.Text}>nome: {props.contato.nome}</Text>
        <Text style={estilos.Text}>telefone: {props.contato.telefone}</Text>
      </View>
    </TouchableOpacity>
  );
};

const estilos = StyleSheet.create({
  Text: {
    color: 'black',
  },

  Lista: {
    padding: 12,
    backgroundColor: '#8B4513',
    borderColor: '#8B4513',
    marginBottom: 8,
    marginTop: 20,
    borderRadius: 8
  }
});

export default ExibirContato;