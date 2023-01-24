import React, { useState, useEffect } from "react";
import { Text, View, Button, Image, SafeAreaView, Alert } from "react-native";
import { SelectList } from 'react-native-dropdown-select-list'
import { styles } from "./style";
import { getBTCPrice, getAllCurrencies } from "../../helpers";

const PriceScreen = () => {
    const [btcprice, setBTCPrice] = useState<string>("Loading...");
    const [currency, setCurrency] = useState<string>("EUR");
    const [currencyToDisplay, setCurrencyToDisplay] = useState<string>('EUR');
    const [currencies, setCurrencies] = useState<Array<Record<string, string>>>([{key:'EUR', value:'EUR'}]);
    const [timeOfThePrice, setTimeOfThePrice] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    // get the available currencies and the btc amount
    useEffect(() => {
        getTheAmount();
        getCurrencies();
    }, [])

    // function to get the currencies and set them in the state
    const getCurrencies = async () => {
        const res = await getAllCurrencies();
        setCurrencies(res);
    }

    // function to get the amount and set in the state
    const getTheAmount = async () => {
        setLoading(true);
        setBTCPrice("Loading...");
        setCurrencyToDisplay("");

        const res = await getBTCPrice(currency);
        if(!res.price || !res.timestamp)
            alertBox();

        setBTCPrice(await res.price);
        setTimeOfThePrice(res.timestamp);
        setCurrencyToDisplay(currency);
        setLoading(false);
    }

    const alertBox = () => {
        Alert.alert('An Error Occurred!', 'The request failed!\nPlease try again!', [
            {text: 'OK'},
        ]);
    }

    return(
        <SafeAreaView style={styles.container}>
            <View testID="logo_id" style={{flex:0.2}}>
                <Image
                    style={styles.logo}
                    source={require('../../assets/btcImg.png')}
                />
            </View>
            <View testID="results_container_id" style={styles.resultContainer}>
                <View testID="time_id" style={styles.resultsItemsContainer}>
                    <Text style={styles.timeTitle}>Time of the price: </Text>
                    <Text style={styles.time}>{timeOfThePrice}</Text>
                </View>
                <View testID="price_id" style={styles.resultsItemsContainer}>
                    <Text style={styles.priceTitle}>Price of BTC: </Text>
                    <Text style={styles.price}>{btcprice} {currencyToDisplay}</Text>
                </View>
            </View>
            <View testID="currencies_list_id">
                <Text style={styles.currencyListTitle}>Change currency: </Text>
                <SelectList 
                    setSelected={(val) => setCurrency(val)} 
                    data={currencies} 
                    defaultOption={{key: currency, value: currency}}
                    save="value"
                    search={true} 
                    boxStyles={{width:200, backgroundColor:'#fff'}}
                    dropdownTextStyles={{color:'#F7931A'}}
                />
            </View>
            <View testID="btn_id" style={styles.btnContainer}>
                <Button
                    title={currency === currencyToDisplay ? 'Update' : "Get Price"}
                    onPress={getTheAmount}
                    color="#F7931A"
                    disabled={loading ? true : false}
                />
            </View>
        </SafeAreaView>
    )
}

export default PriceScreen;