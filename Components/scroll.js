import React, { Component } from 'react';
import { View, ScrollView, Image } from 'react-native';

class Scroll extends Component{
  render(){

    let img1 = 'https://www.fiap.com.br/wp-content/themes/fiap2016/images/graduacao/fotos/small/01.png';
    let img2 = 'https://www.fiap.com.br/wp-content/themes/fiap2016/images/graduacao/fotos/small/03.png';
    let img3 = 'https://www.fiap.com.br/wp-content/themes/fiap2016/images/graduacao/fotos/small/06.png';
    let img4 = 'https://www.fiap.com.br/wp-content/themes/fiap2016/images/graduacao/fotos/small/08.png';

    let dimensao = 300;

    return(
      <ScrollView
        horizontal
        style={{
          height: 1,
        }}
        //showsHorizontalScrollIndicator={false}
      >
        <View>
          <Image
          source={{ uri: img1 }}
          style={{ width: dimensao, height: dimensao}}
          />
        </View>
        <View>
            <Image
            source={{ uri: img2 }}
            style={{ width: dimensao, height: dimensao}}
            />
        </View>
        <View>
            <Image
            source={{ uri: img3 }}
            style={{ width: dimensao, height: dimensao}}
            />
        </View>
        <View>
            <Image
            source={{ uri: img4 }}
            style={{ width: dimensao, height: dimensao}}
            />
        </View>
      </ScrollView>
    )
  }
}

class LogoCurso extends Component{
  render(){
    return(
    <Image
      source={{ uri: 'https://www.fiap.com.br/wp-content/themes/fiap2016/images/shared/nano-courses/title.png' }}
      style={{ 
        width: 200, 
        height: 50,
        marginHorizontal: 'auto',
        marginTop: 50,
        marginBottom: 20,
        }}
    />
    )
  }
}

export {LogoCurso};
export default Scroll;
