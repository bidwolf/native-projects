import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      height:'100%',
      width:'100%',
      paddingVertical:40,
      alignItems:'center'
    },
    title:{
        color:'#fff',
        textAlign:'center',
        fontSize:32
    },
    subtitle:{
        textAlign:'center',
        color:'#ffffff90',
        fontSize:16
    },
    form:{
        paddingVertical:40,
        alignItems:'center',
        flexDirection:'row',
        width:'80%',
        gap:8
    },
    input:{
        backgroundColor:'#ffffff20',
        padding:8,
        fontSize:16,
        color:'#ffffff95',
        width:'80%',
        borderRadius:8,
        borderWidth:2,
        borderColor:'#354478',
    },
    buttonText:{
        fontSize:32,
        color:'#fff'
    },
    button:{
        width:48,
        height:48,
        borderRadius:8,
        backgroundColor:'#3F9478',
        justifyContent:'center',
        alignItems:'center'
    }
  });
  