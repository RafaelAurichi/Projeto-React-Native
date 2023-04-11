import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';

class List extends Component{
  constructor(props) {
    super(props);
    this.state = {
      feed:[
        {id: 1, nome: 'Joseffe', idade: 32},
        {id: 2, nome: 'João', idade: 17},
        {id: 3, nome: 'Maria', idade: 22},
        {id: 4, nome: 'Joaquim', idade: 42},
        {id: 5, nome: 'Paulo', idade: 36},
      ]
    }
  }

  render(){
    return(
        
      <View style={styles.container}>
        <FlatList
          data={this.state.feed}
          nestedScrollEnabled
          Horizontal
          keyExtractor={(item) => item.id}
          renderItem={ ({item}) => <Pessoa data={item}/>}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  areaPessoa:{
    backgroundColor: '#91a3ad',
    height: 170,
    marginBottom: 15
  },
  textoPessoa:{
    color: '#FFF',
    fontSize: 20,
  },
})


class Pessoa extends Component{
  render(){
    return(
      <View style={styles.areaPessoa}>
        <Text style={styles.textoPessoa}> Nome: {this.props.data.nome}

        </Text>

        <Text style={styles.textoPessoa}> Idade:
        {this.props.data.idade} </Text>

        <Text
          style={{
            margin: 10,
            color: '#ffff',
          }}
        >
          Vestibulum a dapibus justo, a dignissim tellus. Cras quis dui elit. Pellentesque a tristique nibh. Aliquam nec felis sed ligula elementum placerat et vel massa.
        </Text>
      </View>
    );
  }
}

export default List;