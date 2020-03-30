import React, { useEffect } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';

import logoImg from '../../assets/logo.png';
import styles from './styles';

import api from '../../services/api'

export default function create() {

  const [valueAuthor, onChangeTextAuthor] = React.useState('');
  const [valueEmail, onChangeTextEmail] = React.useState('');
  const [valuePassword, onChangeTextPassword] = React.useState('');

  async function createAuthorApi(valueAuthor, valueEmail, valuePassword){
    const reponse = await api.post('/users', {
      name: valueAuthor,
      email: valueEmail,
      password: valuePassword
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>
          Cadastro de <Text style={styles.headerTextBold}>Autores</Text>
        </Text>
      </View>

      <Text style={styles.title}>Bem-Vindo!</Text>
      <Text style={styles.description}>Realize o cadastro do seu Autor abaixo:</Text>

      <View style={styles.createAutor}>
        <View style={styles.create}>
          <Text style={styles.createProperty}>
            Nome do Autor:
          </Text>
          <TextInput style={styles.textInput}
            onChangeText={text => onChangeTextAuthor(text)}
            value={valueAuthor} />
          <Text style={styles.createProperty}>
            Email:
          </Text>
          <TextInput style={styles.textInput}
            onChangeText={text => onChangeTextEmail(text)}
            value={valueEmail} />
          <Text style={styles.createProperty}>
            Senha:
          </Text>
          <TextInput style={styles.textInput}
            onChangeText={text => onChangeTextPassword(text)}
            value={valuePassword} />
          <TouchableOpacity style={styles.submitButton}
            onPress={() => createAuthorApi(valueAuthor, valueEmail, valuePassword)}>

            <Text style={styles.submitButtonText}>
              Submit
            </Text>

          </TouchableOpacity>

        </View>
      </View>
    </View>
  );
}
