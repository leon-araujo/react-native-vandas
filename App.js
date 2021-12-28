import { StyleSheet, View, Text } from 'react-native';
import { ScrollView } from 'react-native-web';
import Home from './src/Home';

export default function App() {
  return (
    <ScrollView>
      <View  style={styles.container}>
        <View style={styles.cabecario}>
          <Text style={styles.title}>Loja do Leonardo Moura</Text>
        </View>
        <Home></Home>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cabecario: {
    backgroundColor: '#0070c0',
    width: '100%',
    textAlign: 'center',
    padding: 15
  },
  title: {
    fontSize: 19,
    fontWeight: 400,
    color: '#fff'
  }
});
