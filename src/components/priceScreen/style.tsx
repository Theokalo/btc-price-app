import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#333333",
      alignItems: "center",
      justifyContent: "center",
    },
    priceTitle: {
        fontSize: 20,
        color: '#fff'
    },
    price: {
        fontSize: 15,
        fontWeight: '700',
        color: '#F7931A',
    },
    timeTitle: {
        fontSize: 20,
        color: '#fff'
    },
    time: {
        fontSize: 15,
        fontWeight: '700',
        color: '#F7931A',
    },
    currencyListTitle: {
      fontSize: 20,
      color: '#fff',
      paddingBottom: 10
    },
    logo: {
      width: 66,
      height: 66,
    },
    resultContainer: {
      flex: 0.2, 
      justifyContent: "center", 
      alignItems: 'center', 
      width: '90%'
    },
    resultsItemsContainer: {
      flexDirection: 'row', 
      alignItems:'flex-end'
    },
    btnContainer: {
      flex: 0.1, 
      justifyContent: "center"
    }
  });