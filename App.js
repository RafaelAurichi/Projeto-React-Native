import {Text, View, Image} from 'react-native';
import Scroll from './Components/scroll';
import {LogoCurso} from './Components/scroll';
import List from './Components/flatList';
import Cadastro from './Components/cadastro';

function App(){
  return(
    <View>

      <LogoCurso/>
      
      <Scroll/>
      
      <Text
        style={{
          marginTop: 10,
          marginHorizontal: 10,
          fontSize: 15,
        }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vulputate urna sed urna hendrerit, eu sodales sem pretium. Phasellus finibus fringilla placerat. Donec ac aliquet enim. Sed placerat nisl ac neque dignissim ultrices.        Invenenatis eu magna id viverra. Cras sodales eget erat id placerat.
      </Text>

      <Text
        style={{
          marginTop: 10,
          marginHorizontal: 10,
          fontSize: 15,
        }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vulputate urna sed urna hendrerit, eu sodales sem pretium. Phasellus finibus fringilla placerat. Donec ac aliquet enim. Sed placerat nisl ac neque dignissim ultrices.        Invenenatis eu magna id viverra. Cras sodales eget erat id placerat.
      </Text>

      <Text
        style={{
        marginVertical: 20,
        marginLeft: 'auto',
        marginRight: 30,
        color: '#ed145b',
        fontSize: 40,
        fontWeight: 'bold',
      }}>
        R$ 99,99
      </Text>

      <Text
        style={{
          marginVertical: 20,
          marginHorizontal: 'auto',
          color: '#151819b3',
          fontSize: 30,
          fontWeight: 'bold',
        }}>
        Recomendações:
      </Text>

      <List/>

      <Cadastro/>
      
    </View>
  )
}

export default App;