import {useEffect, useState} from 'react';
import {fetchRates} from '../api/fetchData';

export const useCurrency = (currency) => {
    const [rates, setRates] = useState([]);

    useEffect(() => {

        fetchRates(currency).then(data=>setRates(data.rates));

        const interval = setInterval(()=>fetchRates(currency), 15000);

        return () => clearInterval(interval);
    }, [currency]);

    return rates;
};