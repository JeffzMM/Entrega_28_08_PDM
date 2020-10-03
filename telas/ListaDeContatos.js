import React, {useState} from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderBtn from '../components/BotaoHeader';
import { useSelector } from 'react-redux';
import ContactItem from '../components/ContatoItem';
import * as contactActions from '../store/contact-actions';
import { useDispatch } from 'react-redux';

const ListaDeContatos = (props) => {
    const dispatch = useDispatch();

    const contacts = useSelector(state => state.contacts.contacts);

    const removeItem = id => {
      dispatch(contactActions.deleteContact(id));
    }

    return (
        <View style={styles.telaPrincipal}>
            <FlatList
                data={contacts}
                renderItem={(contact) => (
                    <ContactItem
                    id={contact.item.id}
                        image={contact.item.imageURI}
                        name={contact.item.name}
                        phone={contact.item.phone}
                        onRemoveItem={removeItem}
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
                <HeaderButtons HeaderButtonComponent={HeaderBtn}>
                    <Item
                        title="Adicionar"
                        iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add' }
                        onPress={() => {
                            navData.navigation.navigate('CadContato')
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
        padding: 50
      },
});

export default ListaDeContatos;