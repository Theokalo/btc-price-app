import { request } from "../services/requests";
import { MethodTypes } from "../services/method_types";

const currentPriceURL = 'https://api.coindesk.com/v1/bpi/currentprice.json';
const currenciesURL = 'https://api.getgeoapi.com/v2/currency/convert?api_key=a6d2b23eb2ae0f35e5b6aa0bff7541be101bccb6&from=EUR&amount=';

export const getBTCPrice = async (currency:string) => {
   const response = await request(currentPriceURL, MethodTypes.get);
   return {price: convertBTCToCurrency(response?.bpi?.EUR?.rate_float, currency), timestamp: response?.time?.updated}
}

const convertBTCToCurrency = async (amount:number, currency:string) => {
    const response = await request(`${currenciesURL}${amount}&format=json`, MethodTypes.get);
        return response?.rates?.[currency]?.rate_for_amount
}

export const getAllCurrencies = async () => {
    let currencies:Array<Record<string, string>> = [];
    const response = await request(`${currenciesURL}10&format=json`, MethodTypes.get);
    if(!response?.rates)
        return [{key:'0' , value:'EUR'}];
    else {
        Object.keys(response?.rates).forEach( (key, index) => {
            currencies.push({key:index.toString() , value:key})
        });

        return currencies;
    }
}