import React, { Component } from 'react';
import { View, Text, TextInput, Button, Switch, ScrollView} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import { styles } from '../styles';

class Cadastro extends Component{
  constructor(props){
    super(props);
    this.state = {
      nome: '',
      cidade: '',
      escolaridade: 'Médio',
      experiencia: 0,
      recomendacao: false,
      resultado: ''
    };
    this.confirmar = this.confirmar.bind(this);
  }
 
  confirmar(){
    this.setState({
      resultado: 'Nome: ' + this.state.nome + '\n' +
                 'Cidade: ' + this.state.cidade + '\n' +
                 'Escolaridade: ' + this.state.escolaridade + '\n' +
                 'Tempo de Experiência: ' + this.state.experiencia + '\n' +
                 ( (this.state.recomendacao) ? 'Sim' : 'Não' )
    });
  }
 
  render(){
    return(
      <ScrollView>
        <View style={styles.container}>

          <Text style={styles.titulo}>Fique por dentro da novidades:</Text>

          <Text style={styles.label}>Nome</Text>
          <TextInput
            style={styles.input}
            onChangeText={(valor) => this.setState({nome: valor})}
          />

          <Text style={styles.label}>Cidade</Text>
          <TextInput
            style={styles.input}
            onChangeText={(valor) => this.setState({cidade: valor})}
            
          />

          <Text style={styles.label}>Escolaridade</Text>
          <Picker
            selectedValue={this.state.escolaridade}
            onValueChange={ (itemValue, itemIndex) => this.setState({escolaridade: itemValue}) }
          >
            <Picker.Item key={1} value='Médio' label="Médio" />
            <Picker.Item key={2} value='Graduação' label="Graduação" />
            <Picker.Item key={3} value='Pós Graduação' label="Pós Graduação" />
            <Picker.Item key={4} value='MBA' label="MBA" />
          </Picker>

          <Text style={styles.label}>Tempo de Experiência:</Text>
          <Slider
            minimumValue={0}
            maximumValue={100}
            step={1}
            value={this.state.experiencia}
            onValueChange={ (valorSelecionado) => this.setState({experiencia: valorSelecionado})}
            
          />
          <Text style={styles.experiencia}>{this.state.experiencia}</Text>

          <Text style={styles.label}>Recomendaria?</Text>
          <Switch 
          value={this.state.recomendacao}
          onValueChange={ (valorSwitch) => this.setState({recomendacao: valorSwitch})}
          />


          <Button title="Confirmar" onPress={this.confirmar} />
    
          <Text style={styles.texto}> {this.state.resultado} </Text>
        </View>
      </ScrollView>
    );
  }
}

export default Cadastro;