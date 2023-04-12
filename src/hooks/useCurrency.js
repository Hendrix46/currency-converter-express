import {useEffect, useState} from 'react';
import {fetchRates} from '../api/fetchData';

export const useCurrency = (currency) => {
    const [rates, setRates] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        fetchRates(currency).then(data=>{
            setRates(data.rates)
            setLoading(false)
        });

        const interval = setInterval(()=>fetchRates(currency).then(data=>{
            setRates(data.rates)
            setLoading(false)
        }), 15000);

        return () => clearInterval(interval);
    }, [currency]);

    return {rates, loading};
};