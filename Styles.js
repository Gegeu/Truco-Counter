import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF',
      alignItems: 'center',
    },

    title: {
      fontSize: 32,
      color: '#FFF',
      fontWeight: 'bold',
      paddingTop: 35,
      textAlign: 'center'
    },

    areaOne: {
      width: '50%', 
      height: '100%', 
      //backgroundColor: 'yellow'
    },

    areaTwo: {
      width: '50%', 
      height: '100%', 
      //backgroundColor: 'red'
    },

    textPlayer: {
      fontSize: 25,
      color: '#FFF',
      fontWeight: 'bold',
      textAlign: 'center',
    
    },

    plusButton: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: '100%'

    },

    textPontos: {
      textAlign: 'center',
      fontSize: 40,
      fontWeight: 'bold',
      paddingTop: '80%',
      color: '#FFF'

    },

    resetPontos: {
        alignItems: "center",
        marginTop: 10
    }

  });

export default styles