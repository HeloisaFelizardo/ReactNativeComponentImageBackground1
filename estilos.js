import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: '#0b4368',
  },
  box: {
    backgroundColor: '#fff',
    width: 300,
    padding: 10
  },
  boxTitulo: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 15
  },
  boxParagrafo:{
    fontSize: 16,
    marginBottom: 10
  }
});

export default estilos;