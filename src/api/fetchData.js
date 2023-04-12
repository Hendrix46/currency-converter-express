import axios from "axios";
import {API_KEY} from "../constants";

export const fetchRates = async (currency) => {
    const { data } = await axios.get(
        `https://api.apilayer.com/fixer/latest?base=${currency}&apikey=${API_KEY}`
    );
    return data;
};

export const fetchSymbols = async () => {
    const { data } = await axios.get(
        `https://api.apilayer.com/fixer/symbols?apikey=${API_KEY}`
    );
    return data;
};