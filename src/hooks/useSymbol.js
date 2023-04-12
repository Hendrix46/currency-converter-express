import {useEffect, useState} from "react";
import {fetchSymbols} from "../api/fetchData";

export const useSymbols = () => {
    const [symbols, setSymbols] = useState([]);

    useEffect(() => {
        fetchSymbols().then(data => setSymbols(data.symbols))
    }, []);

    return symbols;
};