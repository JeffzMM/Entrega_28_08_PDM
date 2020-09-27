import React, {useState} from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import BotaoHeader from '../componentes/BotaoHeader';

const ListaDeContatos = (props) => {
    const [contatos, setContatos] = useState([]);
    const [contadorContatos, setContadorContatos] = useState(0);

    const addContato = (contato) => {
      setContatos(contatos => {
        setContadorContatos(contadorContatos + 2);

        return [...contatos, {key: contadorContatos.toString(), value: contato}];
      });
    }

    const removeItem = (key) => {
      setContatos(contatos => {
        return contatos.filter((contatos) => {
          return contatos.key !== key;
        })
      });
    }

    return (
        <View style={styles.telaPrincipal}>
            <FlatList
                data={contatos}
                renderItem={(contatos) => (
                    <ContatoItem
                    i={contato.item.key} 
                    contato={contato.item.value} 
                    onRemoverContato={removeItem}
                    />
                )
            } />
        </View>
    )
}

ListaDeContatos.navigationOptions = navData => {
    return {
        headerTitle: "Lista de contatos",
        headerRight: () => {
            return (
                <HeaderButtons HeaderButtonComponent={BotaoHeader}>
                    <Item
                        title="Adicionar"
                        iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add' }
                        onPress={() => {
                            navData.navigation.navigate('NovoContato')
                        }}
                    />
                </HeaderButtons>
            )
        }
    }
};

const styles = StyleSheet.create({
    telaPrincipal: {
        backgroundColor: '#fff',
        padding: 50,
        textAlign: 'center'

      },
});

export default ListaDeContatos;