import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

import ContatoItem from './componentes/ExibirContatos';
import ContatoInput from './componentes/SalvarContato';

export default function App() {
 
  const[contatos, setContatos] = useState ([]);
  const[contadorContatos, setContadorContatos] = useState(10);


  const adicionarContato = (contato) => {
    if (contato !== undefined && contato.nome !== '' && contato.telefone !== '') {
      setContatos(() => {
        setContadorContatos(contadorContatos + 2)
        return [...contatos, { value: contato, key: contadorContatos.toString() }]
      })
    }
  }
  const removerContato = (i) =>{
    setContatos(contatos => {
      return contatos.filter((contato) => {
         return contato.key !== i
      })
    });
  }

  return (
    <View>
      <ContatoInput onAdicionarContato={adicionarContato}/>
        <FlatList 
          data={contatos}
          renderItem={
            (contato) => (
              <ContatoItem
                i={contato.item.key} 
                contato={contato.item.value} 
                onRemoverContato={removerContato}
              />
            )
          }
        />      
    </View>
  );
}

